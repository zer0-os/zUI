import React, { FC } from "react";

import { ButtonProps, Button as BaseButton } from "baseui/button";

interface IButton extends ButtonProps {
  // add any additional props here
  kind: "primary" | "secondary";
}

/*
 Set some common patterns for use in Styletron
 */

const BORDER_THICKNESS = 2;
/** Common positioning to be applied to :before and :after */
const PSUEDO_POSITION = {
  content: "''",
  borderRadius: "inherit",
  position: "absolute",
  height: "100%",
  top: "0",
  left: "0",
};

const Button: FC<IButton> = ({ children, kind = "primary", ...props }) => {
  return (
    <BaseButton
      /*
        Style overrides
       */
      overrides={{
        BaseButton: {
          style: ({ $theme }) => ({
            position: "relative",
            color: $theme.colors.white,
            height: "32px",
            fontSize: "14px",
            paddingLeft: "23px",
            paddingRight: "23px",
            background: "none",

            /**
             * Handles the background gradient transition
             */
            ":after": {
              ...PSUEDO_POSITION,
              width: "100%",
              background: kind === "primary" ? $theme.gradientazure100 : "#F763B0",
              opacity: "0.25",
              transition: "opacity 0.2s ease",
            },

            /**
             * Handles borders - psuedoelement needed to handle
             * z-index elegantly
             */
            ":before": {
              ...PSUEDO_POSITION,
              width: `calc(100% - ${2 * BORDER_THICKNESS}px)`,
              borderLeft: `${BORDER_THICKNESS}px solid`,
              borderRight: `${BORDER_THICKNESS}px solid`,
              borderColor: kind === "primary" ? $theme.accentblue100 : "#F763B0",
              zIndex: "2",
            },

            /**
             * Hover states
             */
            ":hover": {
              background: "none",
              ":after": {
                opacity: "0.5",
              },
              ":before": {
                borderColor: $theme.colors.white,
              },
            },

            /**
             * Active states
             */
            ":active": {
              borderColor: $theme.accentblue100,
              background: "none",
              ":after": {
                opacity: "0.25",
              },
              ":before": {
                borderColor: $theme.colors.accentblue100,
              },
            },
          }),
        },
      }}
      /*
        Set props
       */
      shape={"pill"}
      {...props}
    >
      {children}
    </BaseButton>
  );
};

export default Button;
