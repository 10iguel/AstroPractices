import type {Social} from "../types/social.ts";
import Github from "../assets/github.svg"
import Instagram from "../assets/instagram.svg"


export const SOCIAL: Social[] = [
    {
        name: "Github",
        id: "github",
        url: "http://localhost:8080",
        label:"Visite Github",
        image: {
            logo: Github,
            width: 200,
            height: 200,
        }
    },
    {
        name:"Instagram",
        id:"instagram",
        url:"https://localhost:8080",
        label:"Visite instagram",
        image: {
            logo: Instagram,
            height: 200,
            width: 200,
        }
    },
]