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
    data: { user },
    error,
  } = await supabase.auth.getUser();

  res.json(user);
}
