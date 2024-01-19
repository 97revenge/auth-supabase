import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/lib/supabase/supabase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    data: { url },
    error,
  } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "http://localhost:3000/api/session",
    },
  });

  url ? res.redirect(url) : res.json({ error });
}
