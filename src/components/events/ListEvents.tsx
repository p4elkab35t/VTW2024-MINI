'use client'

import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchEvents } from '../../api/fetchEvents'
import Link from 'next/link'

export default function ListEvents() {
  const { data: events, isLoading, error } = useQuery({
    queryKey: ['events'],
    queryFn: () => fetchEvents(),
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <ul>
      {events?.map((event) => (
        <li key={event.id}><Link href={`/event/${event.id}`}>{event.name}</Link></li>
      ))}
    </ul>
  )
}