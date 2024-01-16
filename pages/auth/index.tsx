// @ts-nocheck

import { TabsDemo } from "@/components/Tabs";
import Gradient from "@/components/Gradient";

export default function Page() {
  return (
    <>
      <div>
        <Gradient>
          <div children>
            <div className="flex w-full h-full  justify-center py-32 ">
              <TabsDemo />
            </div>
          </div>
        </Gradient>
      </div>
    </>
  );
}
