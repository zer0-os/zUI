import React, { FC } from "react";

import * as Dialog from "@radix-ui/react-dialog";
import { styled } from "@stitches/react";

// @TODO: use color variables

const Overlay = styled(Dialog.Overlay, {
  background: "rgba(0 0 0 / 0.9)",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: "grid",
  placeItems: "center",
  overflowY: "auto",
  zIndex: 10000,
});

const Content = styled(Dialog.Content, {
  minWidth: 300,
  background: "#0a0a0a",
  padding: 30,
  borderRadius: 16,
  border: "1px solid #3b3b3b",
});

interface ModalProps extends Dialog.DialogProps {
  className?: string;
  triggerText: string;
}

const Modal: FC<ModalProps> = ({ className, children, triggerText, ...rest }) => {
  return (
    <Dialog.Root {...rest}>
      <Dialog.Trigger>{triggerText}</Dialog.Trigger>
      <Dialog.Portal>
        <Overlay>
          <Content className={className}>{children}</Content>
        </Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
