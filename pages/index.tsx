// @ts-nocheck

import Gradient from "@/components/Gradient";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function Page({ data }: { data: string }) {
  return (
    <>
      {String(data)}
      <Gradient></Gradient>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const url = String(context.req.url);

  return {
    props: {
      data: url,
    },
  };
};
