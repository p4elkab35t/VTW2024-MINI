import { supabase } from '../utils/supabase'

export const fetchEventAttendees = async (eventId: string) => {
    const { data, error } = await supabase
        .from('event_attendees')
        .select('*, users(*), events(*)')
        .eq('event_id', eventId);

    if (error) throw error

    return data
}
        