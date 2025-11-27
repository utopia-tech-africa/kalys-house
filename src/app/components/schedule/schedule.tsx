import { ComponentLayout } from "@/components/component-layout";
import { Heading } from "@/components/texts";
import { ScheduleCard } from "./components/ScheduleCard";
import { scheduleCardImg } from "@/assets/img";

export const Schedule = () => {
  const events = [
    {
      time: "10:00 AM",
      name: "Opening Ceremony",
      image: scheduleCardImg,
    },
    {
      time: "12:00 PM",
      name: "Music Session",
      image: scheduleCardImg,
    },
    {
      time: "03:00 PM",
      name: "Live Challenge",
      image: scheduleCardImg,
    },
    {
      time: "05:00 PM",
      name: "Pool Party",
      image: scheduleCardImg,
    },
    {
      time: "03:00 PM",
      name: "Live Challenge",
      image: scheduleCardImg,
    },
    {
      time: "05:00 PM",
      name: "Pool Party",
      image: scheduleCardImg,
    },
    {
      time: "03:00 PM",
      name: "Live Challenge",
      image: scheduleCardImg,
    },
    {
      time: "05:00 PM",
      name: "Pool Party",
      image: scheduleCardImg,
    },
  ];

  return (
    <ComponentLayout>
      <Heading>Schedule</Heading>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {events.map((event, i) => (
          <ScheduleCard
            key={i}
            time={event.time}
            name={event.name}
            image={event.image}
          />
        ))}
      </div>
    </ComponentLayout>
  );
};
