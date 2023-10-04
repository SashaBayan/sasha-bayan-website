import Link from "next/link";

export default function MailingListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center justify-center bg-[#E8E1DD]">
        <div className="ml-10 flex h-20 w-full items-center justify-start">
          <Link href="/">
            <h4
              className={`flex items-center text-sm font-thin uppercase tracking-widest transition-all duration-700 `}
            >
              Sasha Bayan
            </h4>
          </Link>
        </div>
        {children}
      </body>
    </html>
  );
}
