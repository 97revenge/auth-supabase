import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/lib/supabase/supabase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });

  data ? res.redirect("/feed") : res.json({ error });
}
