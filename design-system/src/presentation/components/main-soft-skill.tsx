import type { PropsWithChildren } from "react";

export default function SoftSkill({ children }: PropsWithChildren) {
  return (
    <div className="flex items-center h-screen mt-[64px]">
      {children}
    </div>
  );
}