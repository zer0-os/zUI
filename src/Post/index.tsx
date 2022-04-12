import React, { FC } from "react";

import { AspectRatioBox, AspectRatioBoxBody } from "baseui/aspect-ratio-box";
import { Avatar } from "baseui/avatar";
import { Block } from "baseui/block";
import { ButtonProps } from "baseui/button";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import { ParagraphMedium, LabelLarge, LabelMedium } from "baseui/typography";

interface IPost {
  size?: ButtonProps["size"];
  type?: ButtonProps["type"];
}

const Post: FC<IPost> = ({ children, size = "default", type = "button" }) => {
  return (
    <Block
      overrides={{
        Block: {
          style: () => ({
            width: "540px",
          }),
        },
      }}
    >
      <FlexGrid flexGridColumnCount={2} flexGridColumnGap="scale600" flexGridRowGap="scale600">
        <FlexGridItem
          overrides={{
            Block: {
              style: () => ({
                width: "scale1200",
                flexGrow: 0,
              }),
            },
          }}
        >
          <Avatar
            name="Frank Wilder"
            size="scale1200"
            src="https://res.cloudinary.com/fact0ry/image/upload/b_transparent,c_thumb,f_png,g_face:auto,h_230,r_max,w_230/qi6rxq5fzu3co1dffxa6.png"
          />
        </FlexGridItem>
        <FlexGridItem>
          <LabelLarge>Frank Wilder</LabelLarge>
          <Block
            overrides={{
              Block: {
                style: () => ({
                  margin: "8px 0",
                }),
              },
            }}
          >
            <LabelMedium>The DeFi Dinner</LabelMedium>
            <LabelMedium color="accent">0://wilder.frank.defidinner</LabelMedium>
          </Block>
          <ParagraphMedium>
            To understand where we are, we must honor what has come before us. With #NFTs catapulting Crypto into the
            mainstream, it shouldn't be forgotten that the DeFi...
          </ParagraphMedium>
          <AspectRatioBox aspectRatio={16 / 9}>
            <AspectRatioBoxBody
              display="flex"
              alignItems="center"
              justifyContent="center"
              overrides={{
                Block: {
                  style: {
                    borderLeftStyle: "solid",
                    borderRightStyle: "solid",
                    borderTopStyle: "solid",
                    borderBottomStyle: "solid",
                    borderLeftWidth: "2px",
                    borderTopWidth: "2px",
                    borderRightWidth: "2px",
                    borderBottomWidth: "2px",
                    borderLeftColor: `grey`,
                    borderTopColor: `grey`,
                    borderRightColor: `grey`,
                    borderBottomColor: `grey`,
                    borderRadius: "8px",
                  },
                },
              }}
            >
              <ParagraphMedium>Fixed Ratio</ParagraphMedium>
            </AspectRatioBoxBody>
          </AspectRatioBox>
        </FlexGridItem>
      </FlexGrid>
    </Block>
  );
};

export default Post;
