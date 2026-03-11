import type { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  href: string;
}

export default function FooterLink({
  href,
  children,
}: Props) {
  return (
    <a
      href={href}
      className="
        text-black text-[18px] no-underline
        max-[480px]:text-[16px]
        max-[395px]:hidden
      "
    >
      {children}
    </a>
  );
}