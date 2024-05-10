import React, { ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Lalezar } from "next/font/google";

interface Props {
  children: ReactNode;
  header?: ReactNode;
}
const lalezar = Lalezar({
  weight: "400",
  subsets: ["latin"],
});

function Layout({ children, header }: Props) {
  return (
    <main className={` h-screen ${lalezar.className} m-0`}>
      <section className="flex flex-col items-center justify-center  my-5 p-2 w-full">
        <header>{header}</header>
        <div className="max-w-[650px]"> {children}</div>
      </section>
      <Toaster />
    </main>
  );
}

export default Layout;
