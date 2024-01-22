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
            <CardWithForm>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Name of your project" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="framework">Framework</Label>
                    <Select>
                      <SelectTrigger id="framework">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="next">Next.js</SelectItem>
                        <SelectItem value="sveltekit">SvelteKit</SelectItem>
                        <SelectItem value="astro">Astro</SelectItem>
                        <SelectItem value="nuxt">Nuxt.js</SelectItem>
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

  return {
    props: {
      instance,
    },
  };
};
