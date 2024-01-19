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

  const { data, error } = await supabase.auth.exchangeCodeForSession(
    "14696d01-476a-402e-b9d6-8838b160b672"
  );

  console.log(data);

  return {
    props: {
      data: code,
    },
  };
};
