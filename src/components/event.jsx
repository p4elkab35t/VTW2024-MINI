import Image from "next/image";
import { 
    CardContent,
    CardDescription,
    CardHeader, 
    Card 
} from "@/src/components/ui/card";

import { 
    Avatar,
    AvatarImage
 } from "@/src/components/ui/avatar";

const EventCard = ({ event }) => {
    console.log(event);

    const dateForamtted = new Date(event.start_date).toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour12: true,
        hour: 'numeric',
        minute: 'numeric'
    });
  return (
    <div className="flex-1 min-w-[250px] max-w-[350px]">
    <Card className="p-2 flex-1 flex flex-col content-around justify-around border-0 shadow-xl">
        <CardContent className="relative aspect-square overflow-hidden p-0">
            <Image layout="fill" className="rounded-lg" objectPosition="center top" objectFit="cover" src="/images/sample_event.jpg" alt="Event Pic"/>
        </CardContent>
        <CardHeader className="text-left p-0 pt-4 font-[500]">
            <p className="event-card__date text-[#6200EE] text-base font-medium">{dateForamtted}</p>
            <h2 className="event-card__title font-bold text-lg">{event.name}</h2>
            <p className="event-card__description text-base text-[#7E7E7E]">{event.description}</p>
            <div className="pt-2 flex flex-row -space-x-4">
                {
                    event.attendees ? event.attendees.map((attendee, index) => {
                        return (
                            <Avatar key={index}  alt={attendee.avatar.alt} className="border-4 border-white">
                                <AvatarImage src={attendee.avatar.src} />    
                            </Avatar>
                        );
                    }) : 
                    <Avatar className="border-4 border-white">
                        <AvatarImage src="https://placehold.co/32x32" />
                    </Avatar>
                }
                
            </div>
        </CardHeader>

        {/* <div className="attendees">
           
            <div className="attendees__avatars flex space-x-2">
                <div className="attendees__avatar">
                    <Image className="rounded-full" src="/images/sample_avatar.jpg" alt="Sample Avatar" width={24} height={24} />
                </div>
                <div className="attendees__avatar">
                    <Image className="rounded-full" src="/images/sample_avatar.jpg" alt="Sample Avatar" width={24} height={24} />
                </div>
                <div className="attendees__avatar">
                    <Image className="rounded-full" src="/images/sample_avatar.jpg" alt="Sample Avatar" width={24} height={24} />
                </div>
            </div>
        </div> */}
    </Card>
    </div>
  );
}

export default EventCard;