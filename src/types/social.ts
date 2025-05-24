type SocialId = "x"| "linkedIn"| "instagram"| "twitter"|"github";
type SocialName = "X"| "LinkedIn"| "Instagram"| "Twitter"|"Github";

export interface Social {
    id: SocialId;
    name: SocialName;
    url: string;
    label: string;
    image: {
        logo: any;
        width: number;
        height: number;
    }
}