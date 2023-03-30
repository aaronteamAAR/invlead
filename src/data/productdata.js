import { createClient } from '@supabase/supabase-js'


const Url = 'https://rkdntvxpccxurcfenxrm.supabase.co'
const anaon_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJrZG50dnhwY2N4dXJjZmVueHJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODAxMTk1NTIsImV4cCI6MTk5NTY5NTU1Mn0.Ix797R7R-wB9xTTWmtdL4YJMNhOxmINW78eh8QPZWwc'

export const supabase = createClient(Url, anaon_key)

