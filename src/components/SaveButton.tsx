import React from "react";
import { Button } from "./ui/button";
import { saveDataToLocalStorage } from "@/utils/localstorageHelper";

interface SaveButtonProps {
  item: any;
  storageKey: string;
  onClick?: () => void;
}

const SaveButton: React.FC<SaveButtonProps> = ({
  item,
  storageKey,
  onClick,
}) => {
  return (
    <Button
      variant={"outline"}
      onClick={() => {
        saveDataToLocalStorage(storageKey, { ...item, quantity: 1 });
        if (onClick) onClick();
      }}
    >
      {"افزودن"}
    </Button>
  );
};

export default SaveButton;
