import { db } from "@/lib/db";
import { Itruck } from "@/lib/types";
import { APIResponse, APIResponseWithData } from "@/server/lib/api";
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const purpose = req.headers.get("x-purpose");


    if (!purpose) {
      return APIResponse("Invalid purpose", 400);
    }
    const trucks = await db.truck.findMany({
      where: {
        purpose,
      },
    });

    return APIResponseWithData({ data: trucks, status: 200 });
  } catch (error) {
    console.error(error);
  }
}

export async function POST(req: Request) {
  try {
    const { condition, imageUrl, name, price, purpose }: Itruck =
      await req.json();

    if (!condition || !imageUrl || !name || !price) {
      return APIResponse("Invalid body", 402);
    }

    const res = await db.truck.create({
      data: {
        condition,
        imageUrl,
        price,
        purpose,
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

    const res = await db.truck.delete({
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
