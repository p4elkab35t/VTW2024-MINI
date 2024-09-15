'use client'
import Image from "next/image";
import { Facebook,X, Instagram,CalendarCheck, Locate,ArrowUpRight } from 'lucide-react';

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
      <div className="grid grid-cols-2 gap-4 w-full h-[400px] bg-cover bg-center" style={{ backgroundImage: "url('/images/sample_event.jpg')" }}>      
        <div className="my-5 font-bold text-white mx-5">
          <button className="gap-16 mx-3 bg-purple-500 p-[5px] rounded">Go Back</button>
          <h1 style={{ fontSize: '3rem' }}>AWS Community Day</h1>
          <p>Vancouver Cloud Events</p>
          </div>  
        <div style={{ border:"1px solid green" }}>
          <div className="card">
            <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
              {/* <img className="w-full h-48 object-cover" src="https://via.placeholder.com/400x300" alt="Card Image" /> */}
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">Sign up now</h2>
                <hr/>
                <div>
                  <div className="flex flex-row my-2">
                    <CalendarCheck className="mx-1" />
                    <div>
                      <p>Tuesday, September 17, 2024</p>
                      <p>2:00PM - 6:00PM PDT</p>
                    </div>                   
                  </div>
                  <div className="flex flex-row">
                      <Locate className="mx-1"/>
                      <div>
                        <h2 className="font-bold inline-flex">Vancouver Playhouse <span className="text-gray-500"><ArrowUpRight /></span></h2>
                        <p>Vancouver, British Columbia</p>
                      </div>                     
                  </div> 
                  <div></div>
                    <div className="my-5">
                      <button className="gap-16 mx-3 bg-purple-500 px-[105px] py-[10px] rounded text-white">Subscribe</button>
                      </div>
                </div>                
              </div>
          </div>

          </div>
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