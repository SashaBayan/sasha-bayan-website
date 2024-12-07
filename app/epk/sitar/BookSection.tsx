import { GoMail } from "react-icons/go";

export function BookSection() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 px-10">
      <div className="flex items-center space-x-3">
        <h2 className="text-2xl font-semibold">Book</h2>
      </div>
      <div className="flex flex-col items-center gap-3 hover:cursor-pointer hover:underline">
        <a
          href="mailto:booking@sashabayan.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2  "
        >
          <GoMail className="text-3xl" />
          <span className="text-sm">booking@sashabayan.com</span>
        </a>
      </div>
    </div>
  );
}
