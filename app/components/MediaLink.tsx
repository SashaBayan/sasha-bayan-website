export function MediaLink({
  href,
  icon,
  copy,
}: {
  href: string;
  icon: React.ReactNode;
  copy: string;
}) {
  return (
    <a className="flex gap-2 hover:animate-pulse" target="_blank" href={href}>
      {icon}
      <p>{copy}</p>
    </a>
  );
}
