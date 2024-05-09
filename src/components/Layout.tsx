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
    <main className={`w-screen h-screen ${lalezar.className} m-0`}>
      <header>{header}</header>
      <section className="flex flex-col items-center justify-center border my-5 p-2 w-full">
        {children}
      </section>
      <Toaster />
    </main>
  );
}

export default Layout;
