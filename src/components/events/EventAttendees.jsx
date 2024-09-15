import { 
    Avatar,
    AvatarImage
 } from "@/src/components/ui/avatar";
 
export default function EventAttendees({attendees}) {
    return (
        <div className="pt-2 flex flex-row -space-x-4 mb-2">
                {
                    attendees?.length > 0 ? attendees.map((attendee, index) => {
                        return (
                            <Avatar key={index}  alt={attendee?.users?.name} className="border-4 border-white">
                                <AvatarImage src={`https://i.pravatar.cc/150?u=${attendee?.users?.email}`} />    
                            </Avatar>
                        );
                    }) : 
                    <Avatar className="border-4 border-white">
                        <AvatarImage src="https://i.pravatar.cc/150?u=fake@pravatar.com" />
                    </Avatar>
                }
                
            </div>
    )
}