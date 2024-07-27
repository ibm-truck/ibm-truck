import { EdgeStoreProvider } from "@/lib/edgestore";
import React, { ReactNode } from "react";

export default function Providers({
  children,
}: {
  children: ReactNode;
}) {
  return <EdgeStoreProvider>{children}</EdgeStoreProvider>;
}
