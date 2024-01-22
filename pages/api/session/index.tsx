import { PrismaClient } from "@prisma/client";

import { NextApiRequest, NextApiResponse } from "next";

import { createPagesServerClient } from "@supabase/auth-helpers-nextjs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { code } = req.query;

  const supabase = createPagesServerClient({ req, res });
  await supabase.auth.exchangeCodeForSession(String(code));

  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  const id = session?.user.id;
  const email = session?.user.email;
  const phone = session?.user.phone;
  const name = session?.user.user_metadata.name;
  const picture = session?.user.user_metadata.picture;

  const prisma = new PrismaClient();

  const instanceId = await prisma.user.findUnique({
    where: {
      clientGoogle: `${id}`,
    },
  });

  try {
    if (instanceId === null) {
      (await prisma.user.create({
        data: {
          name: `${name}`,
          email: email as string,
          number: `${phone}`,
          picture: `${picture}`,
        },
      })) && res.redirect(`/feed/oauth=${id}`);
    } else {
      res.redirect(`/config/oauth=${id}`);
    }
  } catch (error) {
    res.json(error);
  }
}
