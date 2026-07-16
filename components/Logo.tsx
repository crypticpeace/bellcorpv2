import Image from "next/image";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export default function Logo({
  variant = "dark",
  className = "",
}: LogoProps) {
  const src = variant === "light" ? "/logo-white.png" : "/logo.png";

  return (
    <Image
      src={src}
      alt="Bellcorp International"
      width={300}
      height={80}
      priority
      className={`h-12 w-auto object-contain ${className}`}
    />
  );
}