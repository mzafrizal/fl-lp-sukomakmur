interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className = "" }: CardProps) {
  return <div className={`p-6 pb-3 ${className}`}>{children}</div>;
}

export function CardTitle({ children, className = "" }: CardProps) {
  return (
    <h3 className={`text-lg font-bold text-slate-800 leading-tight ${className}`}>
      {children}
    </h3>
  );
}

export function CardDescription({ children, className = "" }: CardProps) {
  return (
    <p className={`text-sm text-emerald-600 font-medium mt-0.5 ${className}`}>
      {children}
    </p>
  );
}

export function CardContent({ children, className = "" }: CardProps) {
  return <div className={`px-6 pb-6 ${className}`}>{children}</div>;
}
