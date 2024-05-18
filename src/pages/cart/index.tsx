import Layout from "@/components/Layout";
import GoBackButton from "@/components/GoBackButton";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import dynamic from "next/dynamic";
const RemoveAllData = dynamic(() => import("@/components/RemoveButton"), {
  ssr: false,
});
const CartItems = dynamic(() => import("@/components/CartItems"), {
  ssr: false,
});
const CartPage = () => {
  return (
    <Layout header={<GoBackButton />}>
      <CartItems />

      <div className="flex space-x-4 m-4 ">
        <RemoveAllData />
        <Button>
          <Link href={"/drugs"}>{"ادامه ی خرید "}</Link>
        </Button>
      </div>
    </Layout>
  );
};

export default CartPage;
