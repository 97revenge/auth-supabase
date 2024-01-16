// @ts-nocheck

import Gradient from "@/components/Gradient";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function Page({ data }: { data: string }) {
  return (
    <>
      <Gradient>
        <div children className="w-full h-full flex py-5 justify-center">
          <span className="font-bold text-xl"> {JSON.stringify(data)}</span>
          <div post> </div>
        </div>
      </Gradient>
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
