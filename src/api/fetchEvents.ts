import { supabase } from '../utils/supabase'

export async function fetchEvents(id?: string) {
  const query = supabase
    .from('events')
    .select('*')

  if (id) {
    query.eq('id', id)
    .single()
  }

  const { data, error } = await query;

  if (error) throw error
  return data
}