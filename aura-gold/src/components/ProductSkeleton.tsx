// src/components/ProductSkeleton.tsx
export default function ProductSkeleton() {
  return (
    <div className="animate-pulse">
      {/* Image skeleton */}
      <div className="aspect-square bg-surface rounded-[40px] border border-border-subtle mb-8" />
      
      {/* Text skeletons */}
      <div className="space-y-4 px-2">
        <div className="h-3 bg-surface rounded-full w-1/4" />
        <div className="h-8 bg-surface rounded-full w-3/4" />
        <div className="h-4 bg-surface rounded-full w-full" />
        <div className="h-4 bg-surface rounded-full w-5/6" />
        <div className="h-4 bg-surface rounded-full w-4/6" />
      </div>

      {/* Button skeleton */}
      <div className="mt-8 h-14 bg-surface rounded-full w-full" />
    </div>
  );
}

