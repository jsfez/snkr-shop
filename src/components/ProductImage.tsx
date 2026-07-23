import { cn } from '@/lib/utils';
import Image from 'next/image';

/**
 * Product picture, framed. Replaces the three near-identical image wrappers
 * that lived in ProductCard, CartCard and the product detail page. Callers
 * keep their own frame height through `className`.
 */
export const ProductImage = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'flex items-center justify-center overflow-hidden',
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={400}
        height={400}
        className="h-full w-full object-cover"
      />
    </div>
  );
};
