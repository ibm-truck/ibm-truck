import Navbar from "@/components/navigation/navbar";
import React from "react";

export default function Page() {
  return (
    <main>
      <header className="bg-black text-white">
        <div className="container">
          <Navbar />
        </div>
      </header>
    </main>
  );
}
