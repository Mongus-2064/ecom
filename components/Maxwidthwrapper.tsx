import React, { ReactNode } from "react";

export default function Maxwidthwrapper({ children }: { children: ReactNode }) {
  return <div className="max-w-5xl px-2 mx-auto py-4 ">{children}</div>;
}
