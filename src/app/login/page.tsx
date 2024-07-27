"use client";
import { Button } from "@/components/ui/button";
import { login } from "@/features/auth/services/post";
import { ArrowLeft, ArrowRight, Loader } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { FaShield } from "react-icons/fa6";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from 'next-auth/react';

type Inputs = {
  email: string;
  password: string;
};

export default function Page() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["login"],
    mutationFn: login,
  });
  const callBackParam = useSearchParams();
  const callBackUrl = callBackParam.get('callbackUrl');


  const OnSubmit = async ({ email, password }: Inputs) => {
    await mutateAsync({ email, password })
      .then((res) => {
        if (res.status !== 200) {
          toast.error(res.data.message);
        } else {
          void signIn('credentials', {
            email,
            password,
            redirect: false
          }).then((res) => {
            toast.success('Login Successful');
            if (callBackUrl) {
              window.location.href = callBackUrl;
            } else {
              window.location.href = '/admin';
            }
          });
          // toast.success(res.data.message);
          // router.push("/admin");
        }
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <main className="bg-neutral-100 min-h-screen grid place-content-center px-4">
      <div className="container">
        <Link href={"/"} className="text-sm underline mb-1 w-fit">
          <div className="flex items-center gap-1">
            <ArrowLeft size={15} /> <p>Go back to public site</p>
          </div>
        </Link>
        <form
          onSubmit={handleSubmit(OnSubmit)}
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

          <Button
            disabled={isPending}
            className="hover:bg-blue-500 flex items-center gap-1"
          >
            <p>Login</p>{" "}
            {isPending && <Loader className="animate-spin" size={20} />}
          </Button>
        </form>
      </div>
    </main>
  );
}
