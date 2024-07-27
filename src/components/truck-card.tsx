"use client";
import { conditon } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Loader, Trash } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

interface TruckCardProps {
  name: string;
  price: number;
  imageUrl: string;
  condition: conditon;
  deletefn?: boolean;
}

export default function TruckCard({
  name,
  price,
  imageUrl,
  condition,
  deletefn,
}: TruckCardProps) {
  const [deleting, setDeleting] = useState(false);
  return (
    <div className="border bg-white rounded-lg shadow-lg overflow-hidden relative">
      <p
        className={cn(
          "px-2 py-0.5 text-white rounded-md absolute top-2 left-2 inline-block text-xs",
          condition === "New" ? "bg-green-500" : "bg-primary"
        )}
      >
        {condition}
      </p>
      {deletefn && (
        <button
          onClick={async () => {
            setDeleting(true);
            setTimeout(() => {
              setDeleting(false);
            }, 1000);
            console.log("hello");
          }}
          title="delete"
          aria-label="delete"
          className={cn(
            "p-2 hover:scale-110 transition-all duration-300 rounded-full text-white absolute top-2 right-2 inline-block text-xs bg-red-500"
          )}
        >
          {!deleting && <Trash size={15} />}
          {deleting && <Loader size={15} className="animate-spin" />}
        </button>
      )}
      <Image
        unoptimized
        width={500}
        height={500}
        src={imageUrl}
        alt={name}
        className="w-full h-32 sm:h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-sm sm:text-lg line-clamp-1 overflow-ellipsis">
          {name}
        </h2>
        <p className="text-primary">₦{price.toLocaleString()}</p>
      </div>
    </div>
  );
}
