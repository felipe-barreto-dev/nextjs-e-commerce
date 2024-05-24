declare module "./data.json" {
  import { Product } from "@/models/product";
  const value: { products: Product[] };
  export default value;
}