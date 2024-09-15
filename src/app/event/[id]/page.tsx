'use client'
import Image from "next/image";
import { Facebook,X, Instagram,CalendarCheck, Locate,ArrowUpRight } from 'lucide-react';

import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchEvents } from '../../../api/fetchEvents'
import { useParams } from 'next/navigation'
import { Download } from 'lucide-react'
import Head from "next/head";
import EventSignup from "@/src/components/events/EventSignup";

export default function ListEvents() {
const { id } = useParams();
  const { data: event, isLoading, error } = useQuery<any>({
    queryKey: ['event', id],
    queryFn: () => fetchEvents(id as string),
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

const formateDate = (date) => new Date(date).toLocaleDateString('en-US', {
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
    <div className="relative">     
      <div className="grid grid-cols-2 gap-4 w-full h-[400px] bg-cover bg-center" style={{ backgroundImage: `url(${event.image_url})` }}>      
        <div className="my-5 font-bold text-white mx-5">
          <button className="gap-16 mx-3 bg-purple-500 p-[5px] rounded" onClick={()=>{window.history.go(-1); return false;}}>Go Back</button>
          <h1 style={{ fontSize: '3rem' }}>{event?.name}</h1>
          <p>{event?.venue_name}</p>
          </div>  
        <div className="absolute top-10 right-10">
            <EventSignup event={event} />
        </div>
      </div> 
    </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="col">
          <div className="">
            <h2 className="text-xl font-bold my-4">Description</h2>
            <p className="text-gray-500">{event?.description}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold my-4">Time</h2>
            <p className="text-gray-500">Start time: <span className="text-purple-500 font-bold">{formateDate(event?.start_date)}</span></p>
            <p className="text-gray-500">End time: <span className="text-purple-500 font-bold">{formateDate(event?.end_date)}</span></p>
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