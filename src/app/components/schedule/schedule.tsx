import { ComponentLayout } from "@/components/component-layout";
import { Heading } from "@/components/texts";
import { ScheduleCard } from "./components/ScheduleCard";
import { fetchSchedule } from "@/lib/queries/scheduleQuery";

export const Schedule = async () => {
  const events = await fetchSchedule();

  return (
    <ComponentLayout>
      <Heading>Schedule</Heading>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {events.map((event) => (
          <ScheduleCard key={event._id} event={event} />
        ))}
      </div>
    </ComponentLayout>
  );
};
