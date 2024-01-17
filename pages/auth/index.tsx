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
import { ReactNode } from "react";

const TabsDemo = dynamic(() => import("../../components/Tabs"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default function Page() {
  return (
    <>
      <Gradient>
        <div className="w-full h-full flex items-center justify-center ">
          <TabsDemo>
            <TabsContent value="account">
              <Card>
                <CardHeader>
                  <CardTitle>Account</CardTitle>
                  <CardDescription>
                    Make changes to your account here. Click save when youre
                    done.
                  </CardDescription>
                </CardHeader>
                <form>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" defaultValue="Pedro Duarte" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="username">Username</Label>
                      <Input id="username" defaultValue="@peduarte" />
                    </div>
                    <CardFooter>
                      <Button>Save changes</Button>
                    </CardFooter>
                  </CardContent>
                </form>
              </Card>
            </TabsContent>
            <TabsContent value="password">
              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>
                    Change your password here. After saving, youll be logged
                    out.
                  </CardDescription>
                </CardHeader>
                <form>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <Label htmlFor="current">Current password</Label>
                      <Input id="current" type="password" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="new">New password</Label>
                      <Input id="new" type="password" />
                    </div>
                    <CardFooter>
                      <Button>Save password</Button>
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
