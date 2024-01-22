import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AvatarDemo({ source }: { source: string }) {
  return (
    <Avatar>
      <Image fill src={source} alt="avatar icon" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
