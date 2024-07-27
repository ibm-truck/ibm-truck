// import prisma from 'prisma'

import { db } from "@/lib/db";
import { Idriver } from "@/lib/types";
import { APIResponse, APIResponseWithData } from "@/server/lib/api";

export async function GET() {
  try {
    const drivers = await db.driver.findMany();

    return APIResponseWithData({ data: drivers, status: 200 });
  } catch (error) {
    console.error(error);
  }
}

export async function POST(req: Request) {
  try {
    const { imageUrl, name }: Idriver = await req.json();

    if (!imageUrl || !name) {
      return APIResponse("Invalid body", 402);
    }

    const res = await db.driver.create({
      data: {
        imageUrl,
        name,
      },
    });

    if (!res) {
      console.error(res);
      return APIResponse("Something went wrong", 400);
    }

    return APIResponseWithData({ data: res, status: 200 });
  } catch (error) {
    console.error(error);
  }
}

export async function DELETE(req: Request) {
  try {
    const id = req.headers.get("id");

    if (!id) {
      return APIResponse("Invalid body", 402);
    }

    const res = await db.driver.delete({
      where: {
        id,
      },
    });

    if (!res) {
      console.error(res);
      return APIResponse("Something went wrong", 400);
    }

    return APIResponseWithData({ data: res, status: 200 });
  } catch (error) {
    console.error(error);
  }
}
