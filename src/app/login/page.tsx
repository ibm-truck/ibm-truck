"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaShield } from "react-icons/fa6";

type Inputs = {
  email: string;
  password: string;
};

export default function Page() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("email")); // watch input value by passing the name of it
  return (
    <main className="bg-neutral-100 min-h-screen grid place-content-center px-4">
      <div className="container">
        <Link href={"/"} className="text-sm underline mb-1 w-fit">
          <div className="flex items-center gap-1">
            <ArrowLeft size={15} /> <p>Go back to public site</p>
          </div>
        </Link>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-[600px] shadow-md sm:w-[500px] w-full px-3 py-5 bg-white rounded-md flex flex-col gap-5"
        >
          <div className="text-primary font-semibold flex items-center gap-2">
            <FaShield />
            <h1>Login to Admin console</h1>
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-sm">
              Email
            </label>
            <input
              className="border px-2 py-1"
              placeholder="boss@gmail.com"
              id="email"
              type="email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm" htmlFor="password">
              Password
            </label>
            <input
              placeholder="***********"
              id="password"
              type="password"
              className="border px-2 py-1"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>

          <Button className="hover:bg-blue-500">Login</Button>
        </form>
      </div>
    </main>
  );
}
