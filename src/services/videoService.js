import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://jvcjooskhptrupjnwqlk.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2Y2pvb3NraHB0cnVwam53cWxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyODcxMDEsImV4cCI6MTk4Mzg2MzEwMX0.vs2tPqcZzxQg4eS6lhrnMvwNZgdZpv4VKeEJKEUWkmQ";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
        }
    }
}