import Image from "next/image";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────────────────────
   YOUR LOGO — how to swap it in
   1. Put your file in the /public folder.
   2. Name it  logo.png        -> shown on LIGHT backgrounds (navbar)
      and      logo-white.png  -> shown on DARK backgrounds (footer)
      (.jpg works too — just change the extensions below.)
   3. Set INTRINSIC to your file's REAL pixel dimensions.
      This only sets the aspect ratio + sharpness; the on-screen
      size is controlled by the height classes further down.
   4. If you only have ONE version, point both constants at it.
   ───────────────────────────────────────────────────────────── */
const LOGO_DARK = "/logo.png";        // for light/white backgrounds
const LOGO_LIGHT = "/logo-white.png"; // for navy/dark backgrounds
const INTRINSIC = { width: 640, height: 170 };

// On-screen height. Change these two numbers to resize the logo site-wide.
const HEIGHT_NAVBAR = "h-11";  // ~44px
const HEIGHT_FOOTER = "h-12";  // ~48px

export default function Logo({
  variant = "dark",
  className,
}: {
  /** "dark" = logo for light backgrounds · "light" = logo for dark backgrounds */
  variant?: "light" | "dark";
  className?: string;
}) {
  const isLight = variant === "light";

  return (
    <Image
      src={isLight ? LOGO_LIGHT : LOGO_DARK}
      alt="Bellcorp International"
      width={INTRINSIC.width}
      height={INTRINSIC.height}
      priority={!isLight}
      className={cn("w-auto object-contain", isLight ? HEIGHT_FOOTER : HEIGHT_NAVBAR, className)}
    />
  );
}
