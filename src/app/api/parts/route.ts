// import prisma from 'prisma'

import { db } from "@/lib/db";
import { Iparts } from "@/lib/types";
import { APIResponse, APIResponseWithData } from "@/server/lib/api";

export async function GET() {
  try {
    const parts = await db.part.findMany();

    return APIResponseWithData({ data: parts, status: 200 });
  } catch (error) {
    console.error(error);
  }
}

export async function POST(req: Request) {
  try {
    const { condition, imageUrl, name, price }: Iparts = await req.json();

    if (!condition || !imageUrl || !name || !price) {
      return APIResponse("Invalid body", 402);
    }

    const res = await db.part.create({
      data: {
        condition,
        imageUrl,
        price,
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

    const res = await db.part.delete({
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
