type LogoProps = {
  variant?: "stacked" | "horizontal";
  textColor?: string;
  size?: number;
};

/**
 * Bliss Place logo recreated as inline SVG.
 * Symbol: gold circle with 4 entwined ovals forming a 4-petal flower.
 */
export function BlissLogo({ variant = "stacked", textColor = "#1C2B4A", size = 120 }: LogoProps) {
  const Symbol = (
    <svg
      viewBox="0 0 100 100"
      width={variant === "stacked" ? size : size * 0.32}
      height={variant === "stacked" ? size : size * 0.32}
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="46" fill="none" stroke="#C4963C" strokeWidth="2" />
      {/* 4 ellipses rotated 0/45/90/135 forming the flower */}
      <g fill="none" stroke="#C4963C" strokeWidth="2">
        <ellipse cx="50" cy="50" rx="30" ry="14" />
        <ellipse cx="50" cy="50" rx="30" ry="14" transform="rotate(45 50 50)" />
        <ellipse cx="50" cy="50" rx="30" ry="14" transform="rotate(90 50 50)" />
        <ellipse cx="50" cy="50" rx="30" ry="14" transform="rotate(135 50 50)" />
      </g>
      {/* tiny center accent */}
      <ellipse cx="50" cy="50" rx="5" ry="3" fill="none" stroke="#C4963C" strokeWidth="1.5" />
    </svg>
  );

  if (variant === "horizontal") {
    return (
      <div className="flex items-center gap-3">
        {Symbol}
        <div className="flex items-baseline gap-2 leading-none">
          <span
            style={{
              fontFamily: "Georgia, serif",
              color: textColor,
              letterSpacing: "0.15em",
              fontWeight: 700,
              fontSize: "1.25rem",
            }}
          >
            BLISS
          </span>
          <span
            style={{
              fontFamily: "Georgia, serif",
              color: "#C4963C",
              fontStyle: "italic",
              fontSize: "0.9rem",
            }}
          >
            Place
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-2">
      {Symbol}
      <div className="flex flex-col items-center leading-none">
        <span
          style={{
            fontFamily: "Georgia, serif",
            color: textColor,
            letterSpacing: "0.15em",
            fontWeight: 700,
            fontSize: `${size * 0.35}px`,
          }}
        >
          BLISS
        </span>
        <span
          style={{
            fontFamily: "Georgia, serif",
            color: "#C4963C",
            fontStyle: "italic",
            fontSize: `${size * 0.14}px`,
            marginTop: "0.25em",
          }}
        >
          Place
        </span>
      </div>
    </div>
  );
}
