import { GetStaticPaths, GetStaticProps } from "next";
import {
  Pagination,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Drug, DrugsPageProps } from "@/types";
import Image from "next/image";
import dynamic from "next/dynamic";
const SaveButton = dynamic(() => import("../../components/SaveButton"), {
  ssr: false,
});
const ShoppinCartBadge = dynamic(
  () => import("@/components/ShoppinCartBadge"),
  {
    ssr: false,
  }
);
const DrugsPage = ({ drugs, currentPage, totalPages }: DrugsPageProps) => {
  const { toast } = useToast();
  const handleAddToCart = (drug: Drug) => {
    toast({
      title: drug.name,
      description: "با موفقیت به سبد خرید اضافه شد ",
    });
  };
  const pageNumbers = Array.from({ length: totalPages }, (v, k) => k + 1);
  return (
    <Layout header={<ShoppinCartBadge />}>
      <h1> (صفحه {currentPage})</h1>
      <ul className="w-full ">
        {drugs?.data?.map((drug: Drug) => (
          <li
            key={drug.id}
            className="flex items-center w-full p-4 space-x-2 space-y-4 justify-between border flex-row-reverse border-blue-400 mb-4 rounded-2xl "
          >
            <div className="border border-blue-500 rounded-xl mx-4">
              {drug.image && (
                <Image alt="" src={drug.image} width={100} height={50} />
              )}
            </div>
            <div className="h-full   flex items-end justify-between w-full flex-col">
              <span className="text-sm font-bold mb-2 mr-2">{drug.name}</span>
              <span className="text-gray-500 text-sm">
                {drug.price + " " + "تومان"}
              </span>
            </div>
            <SaveButton
              item={drug}
              storageKey="cart"
              onClick={() => handleAddToCart(drug)}
            />
          </li>
        ))}
      </ul>

      <div>
        <Pagination>
          <PaginationPrevious
            href={currentPage > 1 ? `/drugs/${currentPage - 1}` : "#"}
          />
          {pageNumbers.map((page) => (
            <PaginationLink
              key={page}
              href={`/drugs/${page}`}
              isActive={currentPage === page}
            >
              {page}
            </PaginationLink>
          ))}

          <PaginationNext
            href={
              currentPage < totalPages
                ? `/drugs/${currentPage + 1}`
                : `/drugs/${totalPages}`
            }
          />
        </Pagination>
      </div>
      <Button className="mt-8">
        <Link href="/cart">رفتن به سبد خرید</Link>
      </Button>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const totalPages = 4;
  const paths = Array.from({ length: totalPages }, (_, index) => ({
    params: { page: (index + 1).toString() },
  }));

  return {
    paths,
    fallback: "blocking", // ISR with fallback behavior
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { page } = context.params || {};
  const currentPage = parseInt(page as string, 10);
  const pageSize = 5;

  const { data } = await axios.get(
    `http://localhost:4000/drugs?_page=${currentPage}&_per_page=${pageSize}`
  );
  const totalRecords = 20;
  const totalPages = Math.ceil(totalRecords / pageSize);
  return {
    props: {
      drugs: data,
      currentPage,
      totalPages,
    },
    revalidate: 60, // Revalidate every 60 seconds
  };
};

export default DrugsPage;
