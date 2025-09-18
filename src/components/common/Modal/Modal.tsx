import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ModalProps {
  buttonValue?: string; // required button text
  buttonIcon?: React.ReactNode; // optional icon for button
  title?: string;
  desc?: string;
  closeBtnValue?: string;
  children?: React.ReactNode; // content inside modal
}

const Modal: React.FC<ModalProps> = ({
  buttonValue,
  buttonIcon,
  title,
  desc,
  closeBtnValue,
  children,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex items-center gap-2 cursor-pointer">
          {buttonIcon && <span>{buttonIcon}</span>}
          <span className="font-medium text-sm">{buttonValue}</span>
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          {title && <DialogTitle>{title}</DialogTitle>}
          {desc && <DialogDescription>{desc}</DialogDescription>}
        </DialogHeader>

        <div className="flex flex-col gap-2">
          {children}
        </div>

        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <button type="button" className="cursor-pointer">{closeBtnValue || "Close"}</button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
