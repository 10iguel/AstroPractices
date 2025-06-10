import type {ImportantEvents} from "../types/importantEvents.ts";
import FirstDate from "../assets/people.svg"
import Official from "../assets/official.svg"
import Ceremony from "../assets/ceremony.svg"
import Ring from "../assets/ring.svg"
import Temple from "../assets/temple.svg"
import Reception from "../assets/reception.svg"
import OpenHouse from "../assets/openhouse.svg"

export const IMPORTANT_EVENTS: ImportantEvents[] = [
    {
        date: "FRIDAY, APRIL 14, 2023",
        image: {
            logo: FirstDate,
            width: 200,
            height: 200,
        },
        title: "First Date",
        time: "5:00 pm",
        datetime: "2023-06-14T17:00",
        location: "Provo, Utah",
        address: "352 900 E, Provo, UT 84606",
        description: "Lamb of God in Spanish. We had indian food after the concert and then I went to play soccer"
    },
    {
        date: "FRIDAY, JULY 21, 2023",
        image:{
            logo: Official,
            height: 200,
            width: 200,
        },
        title: "Become Official",
        time: "5:00 pm",
        datetime: "2023-07-21T17:30",
        location: "Timpanogos Cave National Monument",
        address: "2038 E Alpine Lp Rd, American Fork, UT 84003",
        description: "Anxiously waiting for this day. We gave our first kiss and celebrated with Cafe Rio. Maybe not in that order"
    },
    {
        date: "MONDAY, APRIL 29, 2024",
        image:{
            logo: Ceremony,
            height: 200,
            width: 200,
        },
        title: "Yes to Marriage",
        time: "10:00 am",
        datetime: "2024-04-29T10:00",
        location: "Layton Utah Temple",
        address: "1400 Oak Hills Dr, Layton, UT 84040",
        description: "After dating for almost a year, we visited the temple to talk about marriage. Celeste took 3 hours to answer but at the end, she accepted my proposal to get married. We celebrated with Cafe rio again."
    },
    {
        date: "THURSDAY, MAY 01, 2024",
        image:{
            logo: Ring,
            height: 200,
            width: 200,
        },
        title: "Engagement",
        time: "5:00 pm",
        datetime: "2023-07-21T17:30",
        location: "Timpanogos Cave National Monument",
        address: "2038 E Alpine Lp Rd, American Fork, UT 84003",
        description: "Our duck activity that lead to one of the most important questions with the most beautiful YES"
    },
    {
        date: "FRIDAY, JULY 25, 2024",
        image:{
            logo: Temple,
            height: 200,
            width: 200,
        },
        title: "Sealing and Marriage",
        time: "10:00 am",
        datetime: "2023-07-21T17:30",
        location: "Layton Utah Temple",
        address: "1400 Oak Hills Dr, Layton, UT 84040",
        description: "The most beautiful day in my life was looking at you as my wife and making a covenant before God that I will be with you forever"
    },
    {
        date: "FRIDAY, JULY 25, 2024",
        image:{
            logo: Reception,
            height: 200,
            width: 200,
        },
        title: "Reception",
        time: "6:30 pm",
        datetime: "2023-07-21T17:30",
        location: "Big Willow Bar",
        address: "535 N State St, Lindon, UT 84042",
        description: "Beautiful decoration, delicious food, lots of friends and family together.  "
    },
    {
        date: "SATURDAY, AUGUST 03, 2024",
        image:{
            logo: OpenHouse,
            height: 200,
            width: 200,
        },
        title: "Open House",
        time: "6:00 pm",
        datetime: "2023-07-21T17:30",
        location: "La Molina Stake",
        address: "Av. Melgarejo 161, La Molina 15026, Peru",
        description: "After a good nap after our trip to Cuzco. We danced, eat and enjoyed time with my peruvian family and friends"
    },
];