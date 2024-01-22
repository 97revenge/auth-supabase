import { createClient } from "@supabase/supabase-js";

import { createServerClient } from "@supabase/ssr";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export { supabase };
