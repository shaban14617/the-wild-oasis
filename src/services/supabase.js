import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://mkdcbjvawehdaamvxnis.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1rZGNianZhd2VoZGFhbXZ4bmlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIwODMyNDQsImV4cCI6MjAxNzY1OTI0NH0.iR9M3ZIhOmxQBf7Dqxv4ZlLtfum3gtZl5Ilg4iOHE2I";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
