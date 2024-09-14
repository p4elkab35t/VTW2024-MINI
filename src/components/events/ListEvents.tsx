'use client'

import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchEvents } from '../../api/fetchEvents'
import Link from 'next/link'
import EventCard from '@/src/components/event'

export default function ListEvents() {
  const { data: events, isLoading, error } = useQuery({
    queryKey: ['events'],
    queryFn: () => fetchEvents(),
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {events?.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  )
}