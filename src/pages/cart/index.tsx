import { useDispatch } from "react-redux";
import { clearCart } from "@/redux/slices/cartSlice";
import Layout from "@/components/Layout";
import GoBackButton from "@/components/GoBackButton";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import dynamic from "next/dynamic";

const CartItems = dynamic(() => import("@/components/CartItems"), {
  ssr: false,
});
const CartPage = () => {
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <Layout header={<GoBackButton />}>
      <CartItems />

      <div className="flex space-x-4 m-4 ">
        <Button onClick={handleClearCart}>حذف همه </Button>
        <Button>
          <Link href={"/drugs"}>{"ادامه ی خرید "}</Link>
        </Button>
      </div>
    </Layout>
  );
};

export default CartPage;
