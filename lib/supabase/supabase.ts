import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  String(process.env.URL_PROJECT),
  String(process.env.ANON_KEY)
);

export { supabase };
