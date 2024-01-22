import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";

import { PrismaClient } from "@prisma/client";
import { AvatarDemo } from "@/components/Avatar";

export default function Page({
  instance,
}: {
  instance: InferGetServerSidePropsType<typeof getServerSideProps>;
}) {
  return (
    <>
      <AvatarDemo source={instance?.picture} />
      <div>{instance?.name}</div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const prisma = new PrismaClient();

  const { oauth } = ctx.query;

  const instance = await prisma.user.findUnique({
    where: {
      clientGoogle: oauth as string,
    },
  });

  return {
    props: {
      instance,
    },
  };
};
