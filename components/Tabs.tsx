import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TabsDemo({ ...auth }) {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="sign">sign</TabsTrigger>
        <TabsTrigger value="login">login</TabsTrigger>
      </TabsList>
      <div {...auth}></div>
    </Tabs>
  );
}
