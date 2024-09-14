'use client'


'use client'

import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchEvents } from '../../../api/fetchEvents'
import { useParams } from 'next/navigation'

export default function ListEvents() {
const { id } = useParams();
  const { data: event, isLoading, error } = useQuery<any>({
    queryKey: ['event', id],
    queryFn: () => fetchEvents(id as string),
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

console.log(event)

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-3">
          <h2 className="text-xl font-bold">Description</h2>
          <p>{event?.description}</p>
        </div>
        <div className="col-span-2">
          <h2 className="text-xl font-bold">Event location</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec orci et orci efficitur pretium. Nam quis est ut sapien pellentesque cursus in eget ipsum. Duis ut erat dapibus, finibus felis et, ornare urna. Phasellus laoreet ultricies lacus a vestibulum. Mauris nec felis vel ex commodo commodo ut vitae velit. Mauris nec felis vitae elit convallis tristique. Donec faucibus elit in risus scelerisque commodo. Donec a volutpat nunc. Phasellus posuere nisi auctor, mollis tortor a, rhoncus augue. Cras elementum pharetra ultricies.</p>
        </div>
      </div>
    </div>
  )
}