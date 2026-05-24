import { SVGProps } from "react";

export function RectangleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 773 333"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <rect
        x="28.2693"
        y="-2.5957"
        width="785"
        height="100"
        rx="10"
        transform="rotate(17.9779 28.2693 -2.5957)"
        fill="url(#paint0_radial_8_499)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_8_499"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(245.479 58.8634) rotate(-1.34456) scale(457.65 468.691)"
        >
          <stop stop-color="#18191B" />
          <stop offset="1" stop-color="#222427" />
        </radialGradient>
      </defs>
    </svg>
  );
}
