// @ts-nocheck

import Gradient from "@/components/Gradient";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function Page({ data }: { data: string }) {
  return (
    <>
      {JSON.stringify(data)}
      <Gradient></Gradient>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      data: "hello",
    },
  };
};
