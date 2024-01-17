import Gradient from "@/components/Gradient";

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

const TabsDemo = dynamic(() => import("../../components/Tabs"), {
  loading: ({ error }) => (error ? <> Error </> : <> loading</>),
  ssr: false,
});

export default function Page() {
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
                        defaultValue="Pedro Duarte"
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
                  <Button className="flex items-center justify-center gap-x-2 align-baseline bg-gray-600">
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
