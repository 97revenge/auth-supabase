import { PrismaClient } from "@prisma/client";

import { NextApiRequest, NextApiResponse } from "next";

import { createPagesServerClient, User } from "@supabase/auth-helpers-nextjs";

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

  res.json({ id, name, email, phone, picture });
}
