import { cn } from '@/lib/utils';

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12',
        className,
      )}
    >
      {children}
    </div>
  );
}
