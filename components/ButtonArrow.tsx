import { ArrowUpRight } from "lucide-react";

export default function ButtonArrow({
  className = "",
}: {
  className?: string;
}) {
  return (
    <span className={`btn-arrow ${className}`}>
      <ArrowUpRight size={14} strokeWidth={2} absoluteStrokeWidth />
    </span>
  );
}
