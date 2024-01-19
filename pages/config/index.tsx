import {
  createPagesServerClient,
  createServerComponentClient,
  User,
} from "@supabase/auth-helpers-nextjs";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

export default function Page({ data }: { data: any }) {
  return <div>{data} </div>;
}

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  return {
    props: {
      data: "ok",
    },
  };
};
