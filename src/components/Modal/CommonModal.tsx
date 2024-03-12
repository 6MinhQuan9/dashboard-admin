'use client';
import { forwardRef, useImperativeHandle, useState } from "react"
import { CommonModalStyle } from "./modal.styles";

export interface CommonModalProps {
   title?: string
   onCancel?: Function
   onOk?: Function
   children?: React.ReactNode
}

export interface RefModal {
   openModal: boolean
   setOpenModal: (open: boolean) => void
}

function CommonModal(props: CommonModalProps, ref: any) {
   const { title, onCancel, onOk, children } = props
   const [openModal, setOpenModal] = useState<boolean>(false);

   useImperativeHandle(
      ref,
      () => ({
         openModal,
         setOpenModal
      }),
      [openModal]
   );

   return (
      <CommonModalStyle
         title={title}
         open={openModal}
         centered
         onOk={onOk?.()}
         onCancel={() => {
            onCancel?.();
            setOpenModal(false);
         }}
      >
         {children}
      </CommonModalStyle>
   )
}

export default forwardRef(CommonModal)