import { type CSSObject } from "@emotion/react";

export const exampleEffect = (color: string): CSSObject => {
  return {
    textDecoration: "none",
    color: "currentcolor",
    backgroundImage: `linear-gradient(90deg, rgba(${color}, 1) 0%, rgba(${color}, 1) 100%),linear-gradient(90deg, rgba(${color}, 0.2) 0%, rgba(${color}, 0.2) 100%)`,
    backgroundSize: "50px 1px, 100% 1px",
    backgroundPosition: "left bottom, left bottom",
    backgroundRepeat: "no-repeat, no-repeat",
    transition: "background-size 0.5s cubic-bezier(0.33, 1.31, 0.335, 1)",

    "&:hover": {
      transition: "background-size 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
      backgroundSize: "100% 1px, 100% 1px",
    },
  };
};
