import { RootState } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

function ShoppinCartBadge() {
  const cart = useSelector((state: RootState) => state.cart.items);
  const quantityLength = cart.reduce((accumulator, item) => {
    return accumulator + item.quantity;
  }, 0);
  return (
    <div className=" w-full">
      <Link href="/cart" className="relative ">
        <Image
          src="/icons/shopping-cart.png"
          alt="shopping-cart"
          width={"30"}
          className="ml-4 mt-2"
          height={"30"}
        />
        {cart.length !== 0 && (
          <div className="bg-red-400 text-sm absolute w-4 h-4 -bottom-2 left-4 flex items-center justify-center text-white rounded-full">
            {quantityLength}
          </div>
        )}
      </Link>
    </div>
  );
}

export default ShoppinCartBadge;
