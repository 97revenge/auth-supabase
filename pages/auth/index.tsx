import Gradient from "@/components/Gradient";

import { supabase } from "@/lib/supabase/supabase";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TabsContent } from "@/components/ui/tabs";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/router";

const TabsDemo = dynamic(() => import("../../components/Tabs"), {
  loading: ({ error }) =>
    error ? (
      <> Error </>
    ) : (
      <>
        <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-slate-700 h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-700 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </>
    ),
  ssr: false,
});

export default function Page() {
  const route = useRouter();
  return (
    <>
      <Gradient>
        <div className="w-full h-full flex items-center justify-center ">
          <TabsDemo>
            <TabsContent value="sign">
              <Card>
                <CardHeader>
                  <CardTitle>sign</CardTitle>
                  <CardDescription>
                    Make changes to your sign here. Click save when youre done.
                  </CardDescription>
                </CardHeader>
                <form>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        defaultValue=""
                        placeholder="Digite seu nome "
                      />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="email">email</Label>
                      <Input
                        id="email"
                        defaultValue=""
                        placeholder="Digite seu email"
                      />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="number">number</Label>
                      <Input
                        id="tel"
                        defaultValue=""
                        placeholder="digite seu number"
                      />
                    </div>
                    <CardFooter>
                      <Button>Save changes</Button>
                    </CardFooter>
                  </CardContent>
                </form>
              </Card>
            </TabsContent>
            <TabsContent value="login">
              <Card>
                <CardHeader>
                  <CardTitle>login</CardTitle>
                  <CardDescription className="pb-5">
                    Change your login here. After saving, youll be logged out.
                  </CardDescription>
                  <Button
                    onClick={() =>
                      route.push({
                        pathname: "/api/auth",
                      })
                    }
                    className="flex items-center justify-center gap-x-2 align-baseline bg-gray-600"
                  >
                    Login with
                    <Image
                      width={50}
                      height={50}
                      alt="google icon"
                      src="https://api.iconify.design/logos:google.svg"
                      className="align-baseline pt-1"
                    />
                  </Button>
                </CardHeader>
                <form>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        defaultValue=""
                        placeholder="Digite seu nome "
                      />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="email">email</Label>
                      <Input
                        id="email"
                        defaultValue=""
                        placeholder="Digite seu email"
                      />
                    </div>
                    <CardFooter>
                      <Button>Save login</Button>
                    </CardFooter>
                  </CardContent>
                </form>
              </Card>
            </TabsContent>
          </TabsDemo>
        </div>
      </Gradient>
    </>
  );
}
