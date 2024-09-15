import { useEventAttendees } from "@/src/hooks/useEventAttendees";
import { Calendar, MapPin, User, UsersRound } from "lucide-react";
import EventAttendees from "./EventAttendees";
import { 
    Avatar,
    AvatarImage
 } from "@/src/components/ui/avatar";

import { useState } from "react";

const STEPS = {
    SIGNUP: 0,
    SELECTION: 1,
    BUDDY: 2,
    CONFIRMATION: 3
}   

export default function EventSignup({ event }) {
    const { data: attendees } = useEventAttendees(event.id)
    const [step, setStep] = useState(STEPS.SIGNUP)
    const [buddy, setBuddy] = useState(true)
    const dateFormatted = new Date(event?.start_date).toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour12: true,
        hour: 'numeric',
        minute: 'numeric'
    });

    const timeFormatted = new Date(event?.start_date).toLocaleTimeString('en-US', {
        hour12: true,
        hour: 'numeric',
        minute: 'numeric'
    });

    const title = step === STEPS.SIGNUP ? "Sign up now" : "Would you like a buddy to go with?"

    const handleNextStep = () => {
        setStep(step + 1)
    }

    return (
        <div className="w-[360px] bg-white rounded-md shadow-md flex flex-col content-around justify-around px-4 py-4">
            {step < 2 && <div className="text-xl font-bold border-b border-gray-300 pb-4">{title}</div>}

            {step === STEPS.SIGNUP && (
                <>
                    <div className="flex flex-row space-x-3 py-3">
                        <div><Calendar /></div>
                        <div className="flex flex-col">
                            <span className="text-md font-bold">{dateFormatted}</span>
                            <span className="text-xs text-gray-500">{timeFormatted}</span>
                        </div>
                    </div>
                    <div className="flex flex-row space-x-3 py-3">
                        <div><MapPin /></div>
                        <div className="flex flex-col">
                            <span className="text-md font-bold">{event?.venue_name}</span>
                            <span className="text-xs text-gray-500">{event?.venue_address}</span>
                        </div>
                    </div>
                    <EventAttendees attendees={attendees} />
                    <button className="bg-[#6200EE] text-white px-4 py-2 rounded-md" onClick={handleNextStep}>Apply</button>
                </>
            )}

            {step === STEPS.SELECTION && (
                <>
                    <div className="flex flex-row space-x-3 my-3">
                        <button className="bg-white hover:bg-[#6200EE] w-full text-black border border-gray-300 hover:text-white px-4 py-2 rounded-md data-[selected=true]:bg-[#6200EE] data-[selected=true]:text-white flex flex-row items-center justify-center" data-selected={buddy} onClick={() => setBuddy(true)}><UsersRound />Yes</button>
                        <button className="bg-white hover:bg-[#6200EE] w-full text-black border border-gray-300 hover:text-white px-4 py-2 rounded-md data-[selected=true]:bg-[#6200EE] data-[selected=true]:text-white flex flex-row items-center justify-center" data-selected={!buddy} onClick={() => setBuddy(false)}><User />No</button>
                    </div>
                    <button className="bg-[#6200EE] text-white px-4 py-2 rounded-md" onClick={handleNextStep}>Next</button>
                </>
            )}

            {step === STEPS.BUDDY && (
                <> 
                    <div className="flex flex-col items-center justify-center py-3">
                        <Avatar className="border-4 border-white">
                            <AvatarImage src="https://i.pravatar.cc/300?u=fak_323@pravatar.com" />
                        </Avatar>
                        <span className="text-md font-bold text-center mx-4"><span className="text-[#6200EE]">Amanda</span> is your assigned buddy!</span>   
                        <p className="text-sm text-gray-500 underline text-center">See buddy&apos;s details</p>
                    </div>
                    <button className="bg-[#6200EE] text-white px-4 py-2 rounded-md" onClick={handleNextStep}>Confirm</button>
                </>
            )}

            {step === STEPS.CONFIRMATION && (
                <>
                    <div className="flex flex-col items-center justify-center py-3">
                        <span className="text-md font-bold text-center mx-4">Confirmed!</span>
                        <p className="text-sm text-gray-500 text-center">Thank you for signing up! <br/>
                        A confirmation email will be send to you shortly.</p>
                    </div>
                </>
            )}

            
        </div>
    )
}