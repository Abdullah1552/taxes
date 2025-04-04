export const personalLoanOptions = [
    {
        id: "car",
        title: "Car Finance",
        icon: (
            <svg
                className="h-full w-full"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M80 65H20C18 65 16 63 16 61V50C16 48 18 46 20 46H80C82 46 84 48 84 50V61C84 63 82 65 80 65Z"
                    fill="white"
                />
                <path d="M30 46L35 30H65L70 46" fill="white" />
                <circle cx="30" cy="65" r="8" fill="white" />
                <circle cx="70" cy="65" r="8" fill="white" />
            </svg>
        ),
        description:
            "Get the car you love with tailored finance options. No matter your income or credit score, we help make car ownership possible with competitive and hassle-free loan solutions.",
    },
    {
        id: "bike",
        title: "Bike Finance",
        icon: (
            <svg
                className="h-full w-full"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="25" cy="65" r="15" stroke="white" strokeWidth="4" fill="none" />
                <circle cx="75" cy="65" r="15" stroke="white" strokeWidth="4" fill="none" />
                <path d="M25 45L50 65L75 45" stroke="white" strokeWidth="4" fill="none" />
                <path d="M50 65V40" stroke="white" strokeWidth="4" />
                <path d="M50 40L60 35L65 45" stroke="white" strokeWidth="4" fill="none" />
            </svg>
        ),
        description:
            "Ride without limits! Our flexible bike finance options make it easier to own the motorcycle you love—no matter your credit score or cash flow.",
    },
    {
        id: "caravan",
        title: "Caravan Finance",
        icon: (
            <svg
                className="h-full w-full"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect x="20" y="35" width="60" height="25" rx="3" fill="white" />
                <rect x="25" y="40" width="10" height="10" rx="1" fill="white" />
                <rect x="40" y="40" width="10" height="10" rx="1" fill="white" />
                <rect x="55" y="40" width="20" height="10" rx="1" fill="white" />
                <circle cx="30" cy="65" r="5" fill="white" />
                <circle cx="70" cy="65" r="5" fill="white" />
                <path d="M15 50H20" stroke="white" strokeWidth="2" />
                <path d="M80 60H90" stroke="white" strokeWidth="2" />
            </svg>
        ),
        description:
            "Whether you're looking to lease or own, our tailored caravan finance options make your dream road trip a reality—affordable, easy, and hassle-free.",
    },
    {
        id: "boat",
        title: "Boat Finance",
        icon: (
            <svg
                className="h-full w-full"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M20 60C35 70 65 70 80 60" stroke="white" strokeWidth="4" fill="none" />
                <path d="M30 60V40H70V60" stroke="white" strokeWidth="4" fill="none" />
                <path d="M40 40V30H60V40" stroke="white" strokeWidth="4" fill="none" />
                <path d="M35 50H65" stroke="white" strokeWidth="2" />
                <path d="M50 40V60" stroke="white" strokeWidth="2" />
            </svg>
        ),
        description:
            "Make waves with financing solutions designed for any budget. Get your dream boat with flexible options that fit your lifestyle.",
    },
    {
        id: "jetski",
        title: "Jet Ski Finance",
        icon: (
            <svg
                className="h-full w-full"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M20 60C30 65 70 65 80 60" stroke="white" strokeWidth="4" fill="none" />
                <path
                    d="M30 60C30 55 30 45 50 40C70 45 70 55 70 60"
                    stroke="white"
                    strokeWidth="4"
                    fill="none"
                />
                <path d="M45 45V35H55V45" stroke="white" strokeWidth="2" />
                <circle cx="50" cy="50" r="5" fill="white" />
            </svg>
        ),
        description:
            "Own the thrill of the water with fast and easy jet ski financing. No matter the type, size, or style, we’ve got you covered!",
    },
    {
        id: "wedding",
        title: "Wedding Finance",
        icon: (
            <svg
                className="icon-wobble h-full w-full"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M50 30C50 30 35 40 35 50C35 60 45 70 60 70C75 70 80 60 80 50C80 40 70 30 60 30C50 30 50 40 50 50"
                    stroke="white"
                    strokeWidth="4"
                    fill="none"
                />
                <circle cx="55" cy="45" r="15" fill="white" />
                <path d="M55 35V55" stroke="white" strokeWidth="2" />
                <path d="M45 45H65" stroke="white" strokeWidth="2" />
                <path d="M55 60L50 65" stroke="white" strokeWidth="2" />
                <path d="M55 65L60 70" stroke="white" strokeWidth="2" />
            </svg>
        ),
        description:
            "Make your dream wedding a reality with flexible finance options. From the venue to the dress, we help cover the costs so you can focus on celebrating your big day!",
    },
    {
        id: "holiday",
        title: "Holidays Finance",
        icon: (
            <svg
                className="icon-wobble h-full w-full"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M50 30C50 30 35 40 35 50C35 60 45 70 60 70C75 70 80 60 80 50C80 40 70 30 60 30C50 30 50 40 50 50"
                    stroke="white"
                    strokeWidth="4"
                    fill="none"
                />
                <circle cx="55" cy="45" r="15" fill="white" />
                <path d="M55 35V55" stroke="white" strokeWidth="2" />
                <path d="M45 45H65" stroke="white" strokeWidth="2" />
                <path d="M55 60L50 65" stroke="white" strokeWidth="2" />
                <path d="M55 65L60 70" stroke="white" strokeWidth="2" />
            </svg>
        ),
        description:
            "Turn your dream getaway into reality with flexible holiday finance options. Whether it’s a tropical escape or a family adventure, we make travel more affordable and hassle-free!",
    },
];

export const businessLoanOptions = [
    {
        id: "Truck-finance",
        title: "Truck finance",
        icon: (
            <svg
                className="h-full w-full"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect x="25" y="40" width="50" height="30" rx="2" fill="black" />
                <rect x="30" y="45" width="40" height="20" rx="1" fill="white" />
                <path d="M35 55H65" stroke="black" strokeWidth="2" />
                <path d="M35 60H55" stroke="black" strokeWidth="2" />
                <circle cx="60" cy="60" r="2" fill="black" />
            </svg>
        ),
        description:
            "Whether you need a new or used truck, we offer tailored financing solutions to help you get on the road with ease.",
    },
    {
        id: "Trailer-finance",
        title: "Trailer finance",
        icon: (
            <svg
                className="h-full w-full"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect x="20" y="30" width="60" height="40" fill="black" />
                <rect x="25" y="35" width="10" height="10" fill="white" />
                <rect x="45" y="35" width="10" height="10" fill="white" />
                <rect x="65" y="35" width="10" height="10" fill="white" />
                <rect x="25" y="50" width="10" height="10" fill="white" />
                <rect x="45" y="50" width="10" height="10" fill="white" />
                <rect x="45" y="60" width="10" height="10" fill="white" />
            </svg>
        ),
        description:
            "Get competitive financing for trailers that keep your business moving. Flexible terms designed to fit your budget and needs.",
    },
    {
        id: "Equipment-finance",
        title: "Equipment Finance",
        icon: (
            <svg
                className="h-full w-full"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="50" cy="50" r="25" stroke="black" strokeWidth="4" fill="none" />
                <path d="M50 35V65" stroke="white" strokeWidth="4" />
                <path d="M40 45H60" stroke="white" strokeWidth="4" />
                <path d="M40 55H60" stroke="white" strokeWidth="4" />
            </svg>
        ),
        description:
            "Upgrade or purchase essential equipment with financing that supports your business expansion—fast, simple, and affordable.",
    },
    {
        id: "Commercial-Fitout",
        title: "Commercial  Fit out",
        icon: (
            <svg
                className="h-full w-full"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect x="20" y="40" width="60" height="20" rx="5" fill="white" />
                <circle cx="30" cy="60" r="5" fill="white" />
                <circle cx="70" cy="60" r="5" fill="white" />
                <rect x="30" y="45" width="15" height="10" fill="white" />
                <rect x="55" y="45" width="15" height="10" fill="white" />
            </svg>
        ),
        description:
            "From office renovations to retail upgrades, we provide financing solutions to help you create the perfect business space.",
    },
    {
        id: "Unsecured-loan",
        title: "Unsecured loan",
        icon: (
            <svg
                className="h-full w-full"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect x="25" y="40" width="50" height="30" rx="2" fill="white" />
                <rect x="30" y="45" width="40" height="20" rx="1" fill="white" />
                <path d="M35 55H65" stroke="white" strokeWidth="2" />
                <path d="M35 60H55" stroke="white" strokeWidth="2" />
                <circle cx="60" cy="60" r="2" fill="white" />
            </svg>
        ),
        description:
            "Need funds for your startup or expansion? Our unsecured loans offer fast approvals, great rates, and flexible repayment options.",
    },
    {
        id: "Business-Overdraft",
        title: "Business Overdraft",
        icon: (
            <svg
                className="h-full w-full"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect x="20" y="40" width="60" height="20" rx="5" fill="white" />
                <circle cx="30" cy="60" r="5" fill="white" />
                <circle cx="70" cy="60" r="5" fill="white" />
                <rect x="30" y="45" width="15" height="10" fill="white" />
                <rect x="55" y="45" width="15" height="10" fill="white" />
            </svg>
        ),
        description:
            "Access funds when you need them to manage cash flow and seize business opportunities without financial strain.",
    },
];