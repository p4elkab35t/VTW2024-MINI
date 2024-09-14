import { supabase } from '../utils/supabase'

export async function fetchEvents() {
  const { data, error } = await supabase
    .from('events')
    .select('*')
  
  if (error) throw error
  return data
}