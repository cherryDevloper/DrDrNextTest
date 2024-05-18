import React from "react";
import { Button } from "./ui/button";
import { removeAllDataFromLocalStorage } from "@/utils/localstorageHelper";

function RemoveButton() {
  return (
    <Button onClick={() => removeAllDataFromLocalStorage("cart")}>
      حذف همه{" "}
    </Button>
  );
}

export default RemoveButton;
