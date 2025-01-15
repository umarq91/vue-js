import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(import.meta.env.VITE_VUE_CLIENT!, import.meta.env.VITE_VUE_SECRET!)