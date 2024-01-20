import { PrismaClient } from "@prisma/client";

import {
  createPagesBrowserClient,
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
  return <div> {JSON.stringify(data)} </div>;
}

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  // Create authenticated Supabase Client
  const supabase = createPagesServerClient(ctx);
  // Check if we have a session
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user)
    return {
      redirect: {
        destination: "/?res='voce nao tem um usuario'",
        permanent: false,
      },
    };

  // Run queries with RLS on the server
  const { data } = await supabase.from("users").select("*");

  return {
    props: {
      user,
      data: data ?? [],
    },
  };
};
