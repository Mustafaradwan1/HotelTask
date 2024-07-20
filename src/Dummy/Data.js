import { FaMedal } from "react-icons/fa";
import { GiDiamondsSmile } from "react-icons/gi";
import { CiFries } from "react-icons/ci";
import { BsSafe2Fill } from "react-icons/bs";
import { DiApple } from "react-icons/di";
import { DiChrome } from "react-icons/di";
import { DiCoda } from "react-icons/di";
import { DiDatabase } from "react-icons/di";
import { DiCodepen } from "react-icons/di";
import { DiGhostSmall } from "react-icons/di";
import { FaArrowRightLong } from "react-icons/fa6";

import aos1 from "../assets/Aos.webp"
import aos2 from "../assets/aos2.webp"
import aos3 from "../assets/aos3.webp"
import aos4 from "../assets/aso4.jpg"
import aos5 from "../assets/aos5.webp"
import aos6 from "../assets/aos6.webp"
import offer from "../assets/offer.avif"
import offer1 from "../assets/offer1.avif"
import offer2 from "../assets/offer2.avif"
import rating from "../assets/rating.jpg"
import rating1 from "../assets/rating1.jpg"
import { IoIosStar } from "react-icons/io";


export const links = [
    {
        title:"Home",
    },
    {
        title:"About us",
    },
    {
        title:"Rooms",
        nested:[
            {
                head:"Superior room",
                p:"Just starting from $199"
            },
            {
                head:"Deluxe room",
                p:"Just starting from $249"
            },
            {
                head:"Signature room",
                p:"Just starting from $300"
            },
            {
                head:"Luxury suite room",
                p:"Just starting from $350"
            },
        ]
    },
    {
        title:"Amenities",
    },
    {
        title:"Bistro",
    },
    {
        title:"Contact",
    }
] 
export const sectionIcon = [
    {
        icon:<FaMedal className="z-10"/>,
        title:"Five stars luxury resort",
        p:"Experience a unique stay.",
    },
    {
        icon:<GiDiamondsSmile className="z-10"/>,
        title:"Well trained manpower",
        p:"Dedicated meal courses.",
    },
    {
        icon:<CiFries className="z-10"/>,
        title:"Fine dining restaurants",
        p:"Discover a medley of flavours.",
    },
    {
        icon:<BsSafe2Fill className="z-10"/>,
        title:"Large swimming pool",
        p:"Unwind and discover joy",
    }
] 
export const Awesome = [
    {
        icon: <DiApple />,
        title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, excepturi.",
        img:aos1,
        h2:"Urban fitness centre"
    },

    {
        icon: <DiChrome />,
        title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, excepturi.",
        img:aos2,
        h2:"Luxury spa massage"
    },
    {
        icon: <DiCoda />,
        title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, excepturi.",
        img:aos3,
        h2:"Secure private beach"
    },
    {
        icon: <DiDatabase />,
        title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, excepturi.",
        img:aos4,
        h2:"Large swimming pool"
    },
    {
        icon: <DiCodepen />,
        title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, excepturi.",
        img:aos5,
        h2:"Exclusive restaurants"
    },
    {
        icon: <DiGhostSmall />,
        title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, excepturi.",
        img:aos6,
        h2:"Deeply yoga classes"
    }
]
export const ExclusiveOffers = [
    {
        icon: <FaArrowRightLong />,
        title:"Honeymoon package",
        img:offer,
        h2:"EXCLUSIVE",
        offer:"GET 40% OFF"
    },
    {
        icon: <FaArrowRightLong />,
        title:"Cocktail package",
        img:offer1,
        h2:"UNBUNDLED",
        offer:"GET 30% OFF"
    },
    {
        icon: <FaArrowRightLong />,
        title:"Massage package",
        img:offer2,
        h2:"WELLNESS",
        offer:"GET 20% OFF"
    }
]
export const PremiumCottage = [
    {
         icon: <FaArrowRightLong />,
        num:"01",
        title:"Premium cottage"
    },
    {
         icon: <FaArrowRightLong />,
        num:"02",
        title:"Studios with terrace"
    },
    {
         icon: <FaArrowRightLong />,
        num:"03",
        title:"Premium pavilions"
    },
    {
         icon: <FaArrowRightLong />,
        num:"04",
        title:"The luxury villa"
    },
    {
         icon: <FaArrowRightLong />,
        num:"05",
        title:"Grand deluxe room"
    },
]
export const Ratings = [
    {
        icon: <IoIosStar />,
        title:"Herman Miller, ThemeZaa",
        p:"What a great experience! I have visited one of the resorts with my friends and we had a great time! Highly recommended",
        img:rating
    },
    {
         icon: <IoIosStar />,
         title:"Matthew Taylor, ThemeZaa",
        p:"We are happy to offer our guests truly fabulous experience of relaxing, balanced, and memorable vacation.",
        img:rating1
    }
]




