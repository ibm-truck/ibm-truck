"use client";
import { SingleImageDropzone } from "@/components/single-image-dropzone";
import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEdgeStore } from "@/lib/edgestore";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  condition: "Used" | "New";
  price: number;
  image: string;
};

export default function Page() {
  const [condition, setCondition] = useState<Inputs["condition"]>("New");
  const [imageUrl, setImageUrl] = useState({ url: "", error: true });
  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (!imageUrl.error) {
      const truckData = {
        name: data.name,
        price: Number(data.price),
        condition,
        imageUrl: imageUrl.url,
      };
      console.log("truckData: ", truckData);
    }
  };
  const [file, setFile] = useState<File>();
  const { edgestore } = useEdgeStore();
  return (
    <main>
      <div className="bg-black text-white grid place-content-center py-2">
        <Logo />
      </div>
      <section className="container mt-10 px-4 mb-10">
        <h1 className="text-2xl sm:text-3xl font-bold">Add a new truck part</h1>
        <p className="text-neutral-700 mb-5">
          Truck parts added here will reflect in the truck list on the public site
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-[600px] shadow-md sm:w-[500px] w-full px-3 py-5 bg-white rounded-md flex flex-col gap-5"
        >
          <SingleImageDropzone
            width={200}
            height={200}
            value={file}
            onChange={(file) => {
              setFile(file);
              console.log("The file", file);
              if (!file) {
                setImageUrl({ url: "", error: true });
              }
            }}
          />
          {file && (
            <Button
              disabled={uploading || imageUrl.url.length > 0}
              variant={"outline"}
              onClick={async (e) => {
                e.preventDefault();
                if (file) {
                  setUploading(true);
                  const res = await edgestore.publicFiles.upload({
                    file,
                    onProgressChange: (progress) => {
                      // you can use this to show a progress bar
                      console.log(progress);
                    },
                  });
                  // you can run some server action or api here
                  // to add the necessary data to your database
                  setUploading(false);
                  console.log(res);
                  setImageUrl({ url: res.url, error: false });
                }
              }}
            >
              {uploading
                ? "Uploading..."
                : imageUrl.url.length > 0
                ? "Uploaded"
                : "Upload"}
            </Button>
          )}
          {imageUrl.error && (
            <p className="text-sm text-red-500">Upload an image</p>
          )}
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 text-sm">
              Truck Part Name
            </label>
            <input
              className="border px-2 py-1"
              placeholder="6 cylinder engine"
              id="name"
              type="text"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="condition" className="mb-1 text-sm">
              Condition
            </label>
            <Select
              onValueChange={(e) => {
                setCondition(e as Inputs["condition"]);
              }}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="New" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="New">New</SelectItem>
                <SelectItem value="Used">Used</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="price" className="mb-1 text-sm">
              Price
            </label>
            <input
              className="border px-2 py-1"
              placeholder="45,000,000"
              id="price"
              type="number"
              {...register("price", { required: true })}
            />
            {errors.name && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>

          <Button
            disabled={uploading || submitting}
            className="hover:bg-blue-500"
          >
            {submitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </section>
    </main>
  );
}
