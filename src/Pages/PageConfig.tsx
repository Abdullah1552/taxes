import HnadHoldingPhone from "../components/assets/Hand-holding-phone.avif"
import AboutMain from "../components/assets/about-bg1.webp"
import Partners from "../components/assets/partners1.png"
import PersonalLoans from "../components/assets/PL1.avif"
interface PageConfig {
    head:string
    titleShort: string;
    titleLong: string;
    image: string[];
    text: string;
    icons: string[];
    overlay:boolean;
}
const pageConfigs: Record<string, PageConfig> = {
    "/": {
        head:"FINANCE LINK AUSTRALIA",
        titleShort: "Empowering Your",
        titleLong: "Financial Future with Ease",
        image: [HnadHoldingPhone],
        text: " We simplify your financial journey by connecting you with expert-backed solutions. At Finance Link Australia, we provide seamless, transparent, and tailored finance options to help you achieve your goals.",
        icons: ["home-icon1.png", "home-icon2.png"],
        overlay:true
    },
    "/products": {
        head:"FINANCE SOLUTIONS FOR ANY SITUATION",
        titleShort: "Flexible And",
        titleLong: "Affordable Finance For All",
        image: [HnadHoldingPhone],
        text: "Our mission is to make your financial journey as smooth and stress-free as possible. That’s why we’ve designed a straightforward and efficient financing process that grants you access to a vast network of over 50 trusted lenders. Whether you’re looking for a personal loan, auto financing, or a business loan, we make it easy to explore your options, compare rates, and apply seamlessly. With our hassle-free approach, you can secure the right loan quickly, giving you more time to focus on what truly matters.",
        icons: ["product-icon1.png", "product-icon2.png"],
        overlay:true
    },
    "/about": {
        head:"Where Finance Meets Simplicity.",
        titleShort: "Big dreams?",
        titleLong: "We're here to help you achieve them.",
        image: [AboutMain],
        text: "We all have big dreams, but making them happen isn't always easy. At Finance Link, we're more than just loans—we’re people who care. Our team is here to support your goals and create a space where you truly belong.",
        icons: ["product-icon1.png", "product-icon2.png"],
        overlay:false
    },
    "/partners": {
        head:"Collaborate with Finance🔗Link.",
        titleShort: "Your Partnership",
        titleLong: "Our Priority",
        image: [Partners],
        text: "At Finance🔗Link, we're committed to delivering exceptional service by working hand-in-hand with trusted industry professionals. No hidden fees—just honest, straightforward loans for people who need real support. If your business shares our values and can bring added value to our clients, we’d be honored to partner with you.",
        icons: ["product-icon1.png", "product-icon2.png"],
        overlay:false
    },
    "/personal-loans": {
        head:"Affordable Personal Loans—Fast.",
        titleShort: "Getting Financed",
        titleLong: "Has Never Been This Easy",
        image: [PersonalLoans],
        text: "Need fuss-free funding? We’ve got you covered! At Finance🔗Link, we make the loan process simple, fast, and stress-free. Our friendly team is here to help you access affordable solutions tailored to your needs—without the hassle, hidden fees, or delays.",
        icons: ["product-icon1.png", "product-icon2.png"],
        overlay:false
    },
    "/personal-loans/car":{
        head:"",
        titleShort: "",
        titleLong: "",
        image: [],
        text: "",
        icons: [],
        overlay:false
    },
    "/personal-loans/bike":{
        head:"",
        titleShort: "",
        titleLong: "",
        image: [],
        text: "",
        icons: [],
        overlay:false
    },
    "/personal-loans/caravan":{
        head:"",
        titleShort: "",
        titleLong: "",
        image: [],
        text: "",
        icons: [],
        overlay:false
    },
    "/personal-loans/boat":{
        head:"",
        titleShort: "",
        titleLong: "",
        image: [],
        text: "",
        icons: [],
        overlay:false
    },
    "/personal-loans/jetski":{
        head:"",
        titleShort: "",
        titleLong: "",
        image: [],
        text: "",
        icons: [],
        overlay:false
    },
    "/personal-loans/wedding":{
        head:"",
        titleShort: "",
        titleLong: "",
        image: [],
        text: "",
        icons: [],
        overlay:false
    },
    "/personal-loans/holiday":{
        head:"",
        titleShort: "",
        titleLong: "",
        image: [],
        text: "",
        icons: [],
        overlay:false
    },

    "/business-loans": {
        head:"Affordable Personal Loans—Fast.",
        titleShort: "Getting Financed",
        titleLong: "Has Never Been This Easy",
        image: [PersonalLoans],
        text: "Need fuss-free funding? We’ve got you covered! At Finance🔗Link, we make the loan process simple, fast, and stress-free. Our friendly team is here to help you access affordable solutions tailored to your needs—without the hassle, hidden fees, or delays.",
        icons: ["product-icon1.png", "product-icon2.png"],
        overlay:false
    },
    "/business-loans/Truck-finance":{
        head:"",
        titleShort: "",
        titleLong: "",
        image: [],
        text: "",
        icons: [],
        overlay:false
    },
    "/business-loans/Trailer-finance":{
        head:"",
        titleShort: "",
        titleLong: "",
        image: [],
        text: "",
        icons: [],
        overlay:false
    },
    "/business-loans/Equipment-finance":{
        head:"",
        titleShort: "",
        titleLong: "",
        image: [],
        text: "",
        icons: [],
        overlay:false
    },
    "/business-loans/Commercial-Fitout":{
        head:"",
        titleShort: "",
        titleLong: "",
        image: [],
        text: "",
        icons: [],
        overlay:false
    },
    "/business-loans/Unsecured-loan":{
        head:"",
        titleShort: "",
        titleLong: "",
        image: [],
        text: "",
        icons: [],
        overlay:false
    },
    "/business-loans/Business-Overdraft":{
        head:"",
        titleShort: "",
        titleLong: "",
        image: [],
        text: "",
        icons: [],
        overlay:false
    },
    
};

export default pageConfigs;