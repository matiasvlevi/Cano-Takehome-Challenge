import { Product } from "../types";

interface ProductCardProps {
  item: Product;
}

export default function ProductCard({ item }: ProductCardProps) {
  return (
    <div
      className="ProductCard"
      style={{
        borderRadius: "12px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",

        padding: "1rem",
        verticalAlign: "middle",

        display: "flex",
        gap: "2rem",
        justifyContent: "space-between",
      }}
    >
      <h3>{item.name}</h3>
      <span className="small">
        Environmental impact score: {item.environmentalImpactScore}
      </span>
    </div>
  );
}
