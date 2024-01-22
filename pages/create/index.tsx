import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";

import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase/supabase";
import { PrismaClient } from "@prisma/client";
import { AvatarDemo } from "@/components/Avatar";
import Gradient from "@/components/Gradient";
import { useRouter } from "next/router";
import { DialogDemo } from "@/components/Dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CardWithForm } from "@/components/Card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CardFooter } from "@/components/ui/card";

export default function Page({
  instance,
  active,
}: {
  instance: InferGetServerSidePropsType<typeof getServerSideProps>;
  active: boolean;
}) {
  const route = useRouter();
  active === false && route.push({ pathname: `/feed?oauth=${instance?.id}` });
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
            <CardWithForm>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="title">Title</Label>
                    <Input id="title" placeholder="title of your content" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="Category">Category</Label>
                    <Select>
                      <SelectTrigger id="Category">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent position="item-aligned">
                        <SelectItem value="Technology">Technology</SelectItem>
                        <SelectItem value="Economy">Economy</SelectItem>
                        <SelectItem value="Philosophy">Philosophy</SelectItem>
                        <SelectItem value="Administration">
                          Administration
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Textarea placeholder="Type your message here." />
                </div>
                <CardFooter className="flex justify-between p-2">
                  <Button variant="outline">Cancel</Button>
                  <Button>Publish</Button>
                </CardFooter>
              </form>
            </CardWithForm>
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

  if (!oauth) {
    return {
      props: {
        active: false,
      },
    };
  } else {
    return {
      props: {
        instance,
      },
    };
  }
};
