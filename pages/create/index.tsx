import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";

import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { supabase } from "@/lib/supabase/supabase";
import { PrismaClient } from "@prisma/client";
import { AvatarDemo } from "@/components/Avatar";
import Gradient from "@/components/Gradient";
import { useRouter } from "next/router";
import { DialogDemo } from "@/components/Dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CardWithForm } from "@/components/Card";

export default function Page({
  instance,
}: {
  instance: InferGetServerSidePropsType<typeof getServerSideProps>;
}) {
  const route = useRouter();
  return (
    <>
      <Gradient>
        <div className="w-screen h-12 border-b-2 border-lime-500/10 flex  p-2  justify-between">
          <div className="flex align-baseline items-center gap-x-6">
            <Button
              className="bg-white text-black dark:text-white dark:bg-black"
              onClick={async () =>
                (await supabase.auth.signOut()) &&
                route.push({
                  pathname: "/auth",
                })
              }
            >
              Log out
            </Button>
          </div>

          <div className="flex flex-row gap-x-2 items-center">
            <DialogDemo>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" value={instance.name} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  email
                </Label>
                <Input
                  id="email"
                  value={instance.email}
                  className="col-span-3"
                />
              </div>
            </DialogDemo>

            <div className="flex flex-col align-baseline items-center gap-x-6">
              <AvatarDemo source={instance?.picture} />
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex items-center justify-center">
          <div className="py-12">
            {" "}
            <CardWithForm />
          </div>
        </div>
      </Gradient>{" "}
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
