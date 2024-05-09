import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/drugs/1",
      permanent: false,
    },
  };
};

export default function Index() {
  return null; //  redirect to /drugs/1
}
