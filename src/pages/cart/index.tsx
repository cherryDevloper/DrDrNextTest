import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { removeFromCart, clearCart } from "@/redux/slices/cartSlice";
import Layout from "@/components/Layout";
import GoBackButton from "@/components/GoBackButton";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";
const CartPage = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const { toast } = useToast();

  const handleRemoveFromCart = (id: number, name: string) => {
    dispatch(removeFromCart(id));
    toast({
      title: name,
      description: "با موفقیت از سبد خرید پاک شد ",
      variant: "destructive",
    });
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const totalPayment = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  return (
    <Layout header={<GoBackButton />}>
      <ul>
        {cart.map((item) => (
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
                onClick={() => handleRemoveFromCart(item.id, item.name)}
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
