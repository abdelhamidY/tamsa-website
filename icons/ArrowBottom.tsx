import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowBottom = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={9}
    height={12}
    fill="none"
    {...props}
  >
    <path
      stroke="#29292E"
      strokeWidth={0.889}
      d="M4.438 10.724V.858a.056.056 0 1 1 .111 0v9.866l.76-.759L7.954 7.32l.005-.006a.056.056 0 1 1 .079.079l-.006.005-3.5 3.5zm0 0-.758-.759m.758.759-.758-.759m0 0L1.037 7.323A.056.056 0 0 0 .96 7.4m2.72 2.564L.96 7.401m0 0 3.496 3.496zm3.535 3.512a.06.06 0 0 0 .04-.016h-.08q.017.015.04.016Z"
    />
  </svg>
);
export default SvgArrowBottom;
