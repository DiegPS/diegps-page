export function BrandMark({ className }: { className: string }) {
  return (
    <img
      src="/brand-mark.svg"
      width={64}
      height={64}
      className={className}
      alt=""
      aria-hidden="true"
    />
  );
}
