import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";
export function Container({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mx-auto w-full max-w-[1200px] px-6 md:px-8", className)} {...rest} />;
}
