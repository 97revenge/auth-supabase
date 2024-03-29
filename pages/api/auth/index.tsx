import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

import { CookieOptions, createServerClient, serialize } from "@supabase/ssr";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return req.cookies[name];
        },
        set(name: string, value: string, options: CookieOptions) {
          res.appendHeader("Set-Cookie", serialize(name, value, options));
        },
        remove(name: string, options: CookieOptions) {
          res.appendHeader("Set-Cookie", serialize(name, "", options));
        },
      },
      auth: {
        flowType: "pkce",
      },
    }
  );

  const {
    data: { url },
    error,
  } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `http://localhost:3000/api/session`,
    },
  });

  url ? res.redirect(url) : res.json({ error });
}
