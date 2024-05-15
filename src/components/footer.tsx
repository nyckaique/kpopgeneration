import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}
export function Footer(className: InputProps) {
  return (
    <div
      className={cn("bg-black text-center text-white py-4 snap-end", className)}
    >
      <p>
        Desenvolvido por{" "}
        <a
          href="https://linkedin.com/in/nycollaskaique"
          target="_blank"
          className="underline"
        >
          Nycollas Kaique
        </a>
      </p>
    </div>
  );
}
