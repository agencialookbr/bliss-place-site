type LogoProps = {
  variant?: "stacked" | "horizontal";
  size?: number;
};

/**
 * Bliss Place logo using the real PNG image.
 */
export function BlissLogo({ variant = "stacked", size = 120 }: LogoProps) {
  if (variant === "horizontal") {
    return (
      <img
        src="/logo-bliss.png"
        alt="Bliss Place"
        style={{ height: size * 0.45, width: "auto", objectFit: "contain" }}
        draggable={false}
      />
    );
  }

  return (
    <img
      src="/logo-bliss.png"
      alt="Bliss Place"
      style={{ height: size, width: "auto", objectFit: "contain" }}
      draggable={false}
    />
  );
}
