import type { PropsWithChildren } from "react";

export default function FooterContainer({ children }: PropsWithChildren) {
  return (
    <div
      className="
        h-[80px] min-w-[400px] p-8
        flex items-center justify-end
        text-black
        max-[900px]:justify-center
        max-[480px]:text-[13px]
        max-[480px]:py-8 max-[480px]:px-0
      "
    >
      {children}
    </div>
  );
}


export function MadeWith({ children }: { children: React.ReactNode }) {
  return <span>{children}</span>;
}

export function Heart({ children }: { children: React.ReactNode }) {
  return <span className="mx-[6px]">{children}</span>;
}

export function By({ children }: { children: React.ReactNode }) {
  return <span className="mr-[6px] max-[395px]:hidden">{children}</span>;
}

export function Period({ children }: { children: React.ReactNode }) {
  return <span>{children}</span>;
}