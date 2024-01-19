import { NextApiRequest, NextApiResponse } from "next";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import type { NextRequest } from "next/server";

import { supabase } from "@/lib/supabase/supabase";

export default async function handler(req: NextRequest, res: NextApiResponse) {
  const nextUrl = req.nextUrl.searchParams;

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const user = session?.user;

  res.json({ data: nextUrl });
}
