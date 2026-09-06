import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://gxtvcblpgwkczqudbvfk.supabase.co"
const supabaseAnonKey = "sb_publishable_-RUx4bc0pfPzn5yXKLY0nw_r5_X-e84"

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase URL or Anon Key is missing. Check your .env file.')
}

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '')
