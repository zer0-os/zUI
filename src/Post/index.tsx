import React, { FC } from "react";

import { AspectRatioBox, AspectRatioBoxBody } from "baseui/aspect-ratio-box";
import { Avatar } from "baseui/avatar";
import { Block } from "baseui/block";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import { ParagraphMedium, LabelLarge, LabelMedium } from "baseui/typography";

interface IPost {
  avatar: string;
  author: string;
  title?: string;
  zna?: string;
  image?: string;
  body: string;
}

const Post: FC<IPost> = ({ avatar, author, title, zna, body, image }) => {
  return (
    <Block
      overrides={{
        Block: {
          style: () => ({
            width: "100%",
            maxWidth: "736px",
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
          <Avatar name={author} size="scale1200" src={avatar} />
        </FlexGridItem>
        <FlexGridItem>
          <LabelLarge>{author}</LabelLarge>
          <Block
            overrides={{
              Block: {
                style: () => ({
                  margin: "8px 0",
                }),
              },
            }}
          >
            {title && <LabelMedium>{title}</LabelMedium>}
            {zna && <LabelMedium color="accent">{zna}</LabelMedium>}
          </Block>
          <ParagraphMedium>{body}</ParagraphMedium>
          {image && (
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
          )}
        </FlexGridItem>
      </FlexGrid>
    </Block>
  );
};

export default Post;
