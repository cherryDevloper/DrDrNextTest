import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { TrashIcon } from "lucide-react";
import {
  getDataFromLocalStorage,
  removeDataFromLocalStorage,
} from "@/utils/localstorageHelper";
import { CartItem } from "@/types";
import { useToast } from "./ui/use-toast";

function CartItems() {
  const { toast } = useToast();
  const cart = getDataFromLocalStorage("cart");
  const totalPayment = cart?.reduce((total: any, item: CartItem) => {
    return total + item.price * item.quantity;
  }, 0);
  return (
    <>
      <ul>
        {cart?.map((item: CartItem) => (
          <li
            key={item.id}
            className="w-full p-4 border border-blue-500  rounded-xl font-light space-y-4 m-2"
          >
            <div className="w-full flex justify-end">
              <Image alt={item.name} src={item.image} width={50} height={100} />
            </div>
            <div className="flex items-center justify-between flex-row-reverse">
              <span>{"تعداد کالا"}</span>
              <span>{item.quantity}</span>
            </div>
            <div className="flex items-center justify-between flex-row-reverse">
              {" "}
              <span>{"نام محصول"}</span>
              <span>{item.name}</span>
            </div>
            <div className="flex items-center justify-between flex-row-reverse">
              <span>{"قیمت"}</span>
              <span>{item.price}</span>
            </div>
            <div className="">
              <Button
                size={"sm"}
                onClick={() => {
                  console.log("item.id :>> ", typeof item.id);
                  removeDataFromLocalStorage("cart", item.id.toString());
                  toast({
                    description: "با موفقیت از سبد خرید پاک شد ",
                    variant: "destructive",
                  });
                }}
                variant={"destructive"}
              >
                <TrashIcon />
                <span className="text-[0.5rem] font-light">
                  {"پاک کردن محصول "}
                </span>
              </Button>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between flex-row-reverse p-4">
        <span>{"جمع کل"}</span>
        <span>{totalPayment}</span>
      </div>
    </>
  );
}

export default CartItems;
