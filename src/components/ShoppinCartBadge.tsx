import { getDataFromLocalStorage } from "@/utils/localstorageHelper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ShoppinCartBadge() {
  const carts = getDataFromLocalStorage("cart");

  const quantityLength = carts?.reduce((accumulator: any, item: any) => {
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
        {carts?.length !== 0 && (
          <div className="bg-red-400 text-sm absolute w-4 h-4 -bottom-2 left-4 flex items-center justify-center text-white rounded-full">
            {quantityLength}
          </div>
        )}
      </Link>
    </div>
  );
}

export default ShoppinCartBadge;
