import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowBottomContain = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={33}
    height={33}
    fill="none"
    {...props}
  >
    <rect
      width={31}
      height={31}
      x={1}
      y={32.358}
      fill="#fff"
      rx={15.5}
      transform="rotate(-90 1 32.358)"
    />
    <rect
      width={31}
      height={31}
      x={1}
      y={32.358}
      stroke="#fff"
      rx={15.5}
      transform="rotate(-90 1 32.358)"
    />
    <path
      stroke="#29292E"
      strokeWidth={0.889}
      d="M16.438 21.724v-9.866a.056.056 0 0 1 .095-.04q.016.017.016.04v9.866l.76-.759 2.646-2.646.005-.006a.06.06 0 0 1 .04-.017.06.06 0 0 1 .04.017.056.056 0 0 1-.001.079l-.006.005-3.5 3.5zm0 0-.758-.759m.758.759-.758-.759m0 0-2.643-2.642a.056.056 0 0 0-.093.04q0 .023.015.038m2.72 2.564-2.72-2.564m0 0 3.496 3.496zm3.535 3.512a.06.06 0 0 0 .04-.016h-.08q.017.015.04.016Z"
    />
  </svg>
);
export default SvgArrowBottomContain;
