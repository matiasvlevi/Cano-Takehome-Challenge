import { Product } from "../types";
import ProductCard from "./ProductCard";

interface ProductListProps {
  items: Product[];
}

export default function ProductList({ items }: ProductListProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: "0.5rem",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      {items &&
        items.map((item: Product, key: number) => (
          <ProductCard key={key} item={item}></ProductCard>
        ))}
    </div>
  );
}
