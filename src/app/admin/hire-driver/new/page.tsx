"use client";
import { SingleImageDropzone } from "@/components/single-image-dropzone";
import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import { useEdgeStore } from "@/lib/edgestore";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addDriver } from "@/services/post";
import { useRouter } from "next/navigation";
import AdminNav from "@/components/navigation/admin-nav";

type Inputs = {
  name: string;
  image: string;
};

export default function Page() {
  const router = useRouter();
  const [imageUrl, setImageUrl] = useState({ url: "", error: true });
  const [uploading, setUploading] = useState(false);

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["add-driver"],
    mutationFn: addDriver,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async ({ image, name }) => {
    if (!imageUrl.error) {
      await mutateAsync({ imageUrl: imageUrl.url, name })
        .then((res) => {
          if ("id" in res) {
            toast.success("Uploaded Successfully");
            window.location.reload();
            return;
          }
          if (res.response.status !== 200) {
            toast.error(res.response.data.message);
          } else {
            toast.success(res.response.data.message);
            router.refresh();
          }
        })
        .catch((err) => {
          toast.error(err.response.data.message);
        });
    }
  };
  const [file, setFile] = useState<File>();
  const { edgestore } = useEdgeStore();
  return (
    <main>
      <AdminNav />
      <section className="container mt-10 px-4 mb-10">
        <h1 className="text-2xl sm:text-3xl font-bold">Add a new driver</h1>
        <p className="text-neutral-700 mb-5">
          Drivers added here will reflect in the driver for hire list on the
          public site
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
                  });
                  // you can run some server action or api here
                  // to add the necessary data to your database
                  setUploading(false);
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
              Driver Name
            </label>
            <input
              className="border px-2 py-1"
              placeholder="Bola Tinubu"
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

          <Button
            disabled={uploading || isPending}
            className="hover:bg-blue-500"
          >
            {isPending ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </section>
    </main>
  );
}
