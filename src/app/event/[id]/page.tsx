'use client'
import Image from "next/image";
import { Facebook,X, Instagram} from 'lucide-react';

import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchEvents } from '../../../api/fetchEvents'
import { useParams } from 'next/navigation'
import { Download } from 'lucide-react'
import Head from "next/head";

export default function ListEvents() {
const { id } = useParams();
  const { data: event, isLoading, error } = useQuery<any>({
    queryKey: ['event', id],
    queryFn: () => fetchEvents(id as string),
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

console.log(event)
const dateForamtted = new Date(event.start_date).toLocaleDateString('en-US', {
  weekday: 'short',
  month: 'short',
  day: 'numeric',
  hour12: true,
  hour: 'numeric',
  minute: 'numeric'
});

  return (
    <div className="container mx-auto p-6">
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />
      </Head>
    <div>
      {/* <p>Image</p> */}
    </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="col">
          <div className="">
            <h2 className="text-xl font-bold my-4">Description</h2>
            <p className="text-gray-500">{event?.description}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold my-4">Time</h2>
            <p className="text-gray-500">weekdays hours: <span className="text-purple-500 font-bold">{dateForamtted}</span></p>
          </div>
          <div>
            <h2 className="text-xl font-bold my-4">Organizer contact</h2>
            <p className="text-gray-500 inline-flex">Email to:{event?.organizer_contact}</p>
          </div>
        </div>
        <div className="col">
        <div>
          <h2 className="text-xl font-bold my-4">Event location</h2>
          <Image
              className="dark:invert"
              src="/images/maps.png"
              alt="Event logomark"
              width={600}
              height={20}
            />
            <div className="text-gray-500">
              <p className="my-2 text-2xl">{event?.venue_name}</p>
              <p className="text-sm" style={{ fontFamily:"Open Sans" }}>{event?.venue_address}</p>
              <p style={{ fontFamily:"Open Sans" }}>TICKETS WITH QR CODE ARE NEEDED FOR ENTRY</p>
            </div>
            <div className="my-4">
              <h2 className="font-bold">Share with friends</h2>
              <ul className="flex flex-row">
                <li className="mx-1"><a href="#"><Facebook className=""/></a></li>
                <li className="mx-1"><a href="#"><img src="/images/tiktok.png" alt="" width={22} height={22}/></a></li>
                <li className="mx-1"><a href="#"><Instagram/></a></li>
                <li className="mx-1"><a href="#"><X className=""/></a></li>
              </ul>
            </div>
            
          </div>
        </div>
          
      </div>
    </div>
  )
}