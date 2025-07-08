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
        description: "Celeste drove all the way up to Layton to pick me up and then we went to see the Lamb of God in Spanish. We had indian food after it, we had lots of leftovers and then I went to play soccer "
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
        description: "After dating for a while, Celeste accepted my proposal by text. We hiked Timpanogos Caves holding our hands the whole time. By the end, We ate Cafe Rio next to the river and We had our first kiss"
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
        description: "After almost a year of being official, We visited the Layton temple to talk about marriage. Celeste took 3 hours to answer. In front of the Temple, She ended up saying YES!!!. We celebrated with Cafe rio again obviously."
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
        description: "Miguel hid a secret message for a long time, Celeste had to go to the same place we had our first kiss. We did a duck activity that lead to one of the most important questions with the most beautiful YES"
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
        description: "The most beautiful day in my life was looking at Celeste as my wife and making covenants with her before God that I will be with Celeste forever"
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
        description: "Lots of memories, beautiful decoration, delicious food, the best cake ever, lots of friends and family together. We missed some things but it was a special day to celebrate. At the end of the reception, We locked ourselves out of to the house but we were able to go to the airport at the end"
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
        description: "Right after our honeymoon to Cuzco, we took a long nap. We were surprised by the decoration. We danced, eat and enjoyed time with my family and friends."
    },
];