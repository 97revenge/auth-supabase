import { PrismaClient } from "@prisma/client";

import { GetServerSideProps, GetServerSidePropsContext } from "next";

export default function Page({
  instance,
}: {
  instance: {
    id: number;
    clientGoogle: string;
    name: string;
    email: string;
    number: string;
    picture: string;
  };
}) {
  return (
    <>
      <div>
        {instance?.name}
        {instance?.email}
      </div>
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

  console.log(instance);

  return {
    props: {
      instance,
    },
  };
};
