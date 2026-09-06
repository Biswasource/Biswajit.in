import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://gxtvcblpgwkczqudbvfk.supabase.co"
const supabaseAnonKey = "sb_publishable_-RUx4bc0pfPzn5yXKLY0nw_r5_X-e84"

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function test() {
  console.log("Testing Supabase connection...");
  
  const { data: rpcData, error: rpcError } = await supabase.rpc("increment_page_view");
  console.log("RPC increment_page_view result:", { rpcData, rpcError });

  const { data, error } = await supabase
    .from("page_views")
    .select("*")
    .eq("id", 1);
    
  console.log("Select page_views result:", { data, error });
}

test();
