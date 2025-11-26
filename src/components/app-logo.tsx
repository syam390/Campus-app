import { cn } from "@/lib/utils";

export default function AppLogo({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-6", className)}
      {...props}
    >
      <path d="M18.5 7.5c-2.3-2.3-5.7-2.3-8 0s-2.3 5.7 0 8" />
      <path d="M5.5 16.5c2.3 2.3 5.7 2.3 8 0s2.3-5.7 0-8" />
    </svg>
  );
}
