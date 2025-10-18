import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://vopfdzxjskbgezkbopmz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZvcGZkenhqc2tiZ2V6a2JvcG16Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA3MTc2MzMsImV4cCI6MjA3NjI5MzYzM30.u8X1sZmWjzseEYPgMXHmTwK0q-9eecDa1CYtNr5o2dY'

export const supabase = createClient(supabaseUrl, supabaseKey)