"use client";

import { deleteDriver } from "@/services/delete";
import { Driver } from "@prisma/client";
import { Loader, Trash } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export default function DriverCard({ driver }: { driver: Driver }) {
  const [deleting, setDeleting] = useState(false);

  return (
    <article className="flex gap-3 p-1">
      <div className="h-[100px] w-[100px] relative">
        <Image
          src={driver.imageUrl}
          alt="Driver Image"
          fill
          unoptimized
          className="relative h-full w-full object-cover"
        />
      </div>
      <div className="flex justify-between items-start w-full">
        <h1>{driver.name}</h1>
        <button
          onClick={async () => {
            setDeleting(true);
            await deleteDriver({ id: driver.id });

            window.location.reload();
          }}
          className="text-red-500 p-2 grid place-content-center rounded-full h-10 w-10 hover:bg-slate-300"
        >
          {!deleting && <Trash size={20} />}
          {deleting && <Loader size={20} className="animate-spin" />}
        </button>
      </div>
    </article>
  );
}
