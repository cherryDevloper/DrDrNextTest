import Link from "next/link";
import Layout from "@/components/Layout";
import GoBackButton from "@/components/GoBackButton";

const Custom404 = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-6xl font-bold">صفحه ی مورد نظر یافت نشد</h1>
        <p className="mt-4 text-lg">ببخششید 🥴</p>
        <GoBackButton />
      </div>
    </Layout>
  );
};

export default Custom404;
