import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium tracking-[0.12em] uppercase transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jintian-mahogany/35 focus-visible:ring-offset-2 focus-visible:ring-offset-jintian-cream disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-jintian-mahogany text-white shadow-[0_18px_50px_-12px_rgba(66,13,9,0.55)] hover:shadow-[0_24px_60px_-10px_rgba(66,13,9,0.65)] hover:brightness-110 active:scale-[0.98]",
        ghost:
          "bg-transparent text-jintian-mahogany hover:bg-jintian-mahogany/5",
        outline:
          "border border-jintian-black/15 bg-transparent text-jintian-mahogany hover:border-jintian-black/30 hover:bg-white/50",
      },
      size: {
        default: "h-12 px-8 py-2",
        sm: "h-10 rounded-full px-5 text-xs",
        lg: "h-14 rounded-full px-10 text-sm",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
