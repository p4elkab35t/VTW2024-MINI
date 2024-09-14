// create a hook that fetches the attendees for an event in supabase and react query

'use client'

import { useQuery } from "@tanstack/react-query";
import { fetchEventAttendees } from "../api/fetchEventAttendees";

// Usage: const { data: attendees, isLoading: isAttendeesLoading, error: attendeesError } = useEventAttendees(id as string)

export const useEventAttendees = (eventId: string) => {

    const { data, isLoading, error } = useQuery({
        queryKey: ['eventAttendees', eventId],
        queryFn: () => fetchEventAttendees(eventId),
        enabled: !!eventId,
    });

    return { data, isLoading, error };
};