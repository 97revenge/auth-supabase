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
  const res = context.query.res;

  if (res) {
    return {
      props: {
        data: res,
      },
    };
  }

  return {
    props: {
      data: "hello world",
    },
  };
};
