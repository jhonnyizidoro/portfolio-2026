import { SVGProps } from "react";

export function SphereIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 166 166"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="83" cy="83" r="83" fill="url(#paint0_radial_8_316)" />
      <defs>
        <radialGradient
          id="paint0_radial_8_316"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(57.5 35.5) rotate(78.9436) scale(132.968)"
        >
          <stop stop-color="#2F3033" />
          <stop offset="1" stop-color="#18191B" />
        </radialGradient>
      </defs>
    </svg>
  );
}
