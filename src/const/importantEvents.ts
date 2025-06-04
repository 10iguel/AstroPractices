import type {ImportantEvents} from "../types/importantEvents.ts";
import FirstDate from "../assets/people.svg"

export const IMPORTANT_EVENTS: ImportantEvents[] = [
    {
        date: "FRIDAY, JUNE 7, 2019",
        image: {
            logo: FirstDate,
            width: 200,
            height: 200,
        },
        title: "First Date",
        time: "5:00 pm",
        datetime: "2019-06-07T21:00",
        location: "Fairmont San Francisco",
        address: "950 Mason Street, San Francisco, CA 94108",
        description: "There will be a few light bites in addition to cocktails. Can't wait to see you!"
    }
];