export type conditon = "New" | "Used";

export interface Itruck {
  condition: conditon;
  name: string;
  price: number;
  imageUrl: string;
}
