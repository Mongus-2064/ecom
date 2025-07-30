import React, { ReactNode } from "react";

export default function Maxwidthwrapper({ children }: { children: ReactNode }) {
  return <div className="max-w-6xl px-2 mx-auto mt-4 ">{children}</div>;
}
