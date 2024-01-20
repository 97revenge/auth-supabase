import { PrismaClient } from "@prisma/client";

import {
  createPagesServerClient,
  createServerComponentClient,
  User,
} from "@supabase/auth-helpers-nextjs";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

import {
  createServerClient,
  type CookieOptions,
  serialize,
} from "@supabase/ssr";
import { supabase } from "@/lib/supabase/supabase";

export default function Page({ data }: { data: any }) {
  return <div>{JSON.stringify(data)} </div>;
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { code } = context.query;

  return {
    props: {
      data: code,
    },
  };
};
