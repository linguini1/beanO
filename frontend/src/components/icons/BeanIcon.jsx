import React from "react";

export default function BeanIcon({ colour, width, height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 79.783 101.892"
    >
      <path
        id="Path_1"
        data-name="Path 1"
        d="M46.262,7.831C61.024,7.671,78.294-9.946,88.411,9.62S71.961,46.99,46.262,46.99-9.1,30.253,2.646,9.62,31.5,7.991,46.262,7.831Z"
        transform="matrix(0.407, -0.914, 0.914, 0.407, 0, 82.78)"
        fill={`#${colour}`}
      />
    </svg>
  );
}
