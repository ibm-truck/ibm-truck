"use client";
import { EdgeStoreProvider } from "@/lib/edgestore";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

export default function Providers({ children }: { children: ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <EdgeStoreProvider>
        <Toaster position="top-right" reverseOrder={false} />
        {children}
      </EdgeStoreProvider>
    </QueryClientProvider>
  );
}
