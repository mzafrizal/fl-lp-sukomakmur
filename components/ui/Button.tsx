type ButtonVariant = "default" | "outline" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

export function Button({
  variant = "default",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 disabled:opacity-50 cursor-pointer select-none";

  const variants: Record<ButtonVariant, string> = {
    default:
      "bg-emerald-600 text-white hover:bg-emerald-700 active:scale-[0.98] shadow-md hover:shadow-lg",
    outline:
      "border-2 border-white/70 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 active:scale-[0.98]",
    secondary:
      "bg-white text-emerald-800 hover:bg-emerald-50 active:scale-[0.98] shadow-md",
    ghost:
      "border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 active:scale-[0.98]",
  };

  const sizes: Record<ButtonSize, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
