export type conditon = "New" | "Used";

export interface Itruck {
  condition: conditon;
  name: string;
  price: number;
  imageUrl: string;
  purpose: "Hire" | "Sell";
}

export interface Iparts {
  condition: conditon;
  name: string;
  price: number;
  imageUrl: string;
}

export interface Idriver {
  name: string;
  imageUrl: string;
}

export interface Idelete {
  id: string
}