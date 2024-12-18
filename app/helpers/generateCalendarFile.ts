import { format, parseISO } from "date-fns";

interface CalendarEventProps {
  date: string; // Expected: "yyyy-MM-dd"
  startTime: string; // Expected: "HH:mm"
  endTime?: string; // Optional: "HH:mm"
  title: string;
  description: string;
  location: string;
}

export const generateCalendarFile = ({
  date,
  startTime,
  endTime,
  title,
  description,
  location,
}: CalendarEventProps): string => {
  try {
    // Parse date properly and combine with times
    const baseDate = parseISO(date);
    const [startHour, startMinute] = startTime.split(":").map(Number);

    if (isNaN(startHour) || isNaN(startMinute)) {
      throw new Error("Invalid start time format");
    }

    const startDateTime = new Date(baseDate);
    startDateTime.setHours(startHour, startMinute, 0);

    let endDateTime = new Date(startDateTime);
    if (endTime) {
      const [endHour, endMinute] = endTime.split(":").map(Number);
      if (isNaN(endHour) || isNaN(endMinute)) {
        throw new Error("Invalid end time format");
      }
      endDateTime.setHours(endHour, endMinute, 0);
    }

    // Format the dates for ICS
    const formattedStart = format(startDateTime, "yyyyMMdd'T'HHmmss");
    const formattedEnd = format(endDateTime, "yyyyMMdd'T'HHmmss");

    // ICS content
    const icsContent = `
BEGIN:VCALENDAR
VERSION:2.0
CALSCALE:GREGORIAN
BEGIN:VEVENT
DTSTART:${formattedStart}
DTEND:${formattedEnd}
SUMMARY:${title}
DESCRIPTION:${description}
LOCATION:${location}
END:VEVENT
END:VCALENDAR
    `.trim();

    // Create a downloadable object URL for the file
    const blob = new Blob([icsContent], {
      type: "text/calendar;charset=utf-8",
    });
    return URL.createObjectURL(blob);
  } catch (error) {
    console.error("Error generating calendar file:", error.message);
    return "";
  }
};
