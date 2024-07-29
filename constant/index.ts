import { airbnb, amazon, billing, calanders, customer, facebook, google, grab, netflix } from "@/public";

export const navbarItem = [
    {
        id: 1,
        title: "Home",
        href: "/"
    },
    {
        id: 2,
        title: "Careers",
        href: "/careers"
    },
    {
        id: 3,
        title: "Blogs",
        href: "/blog"
    },
    {
        id: 4,
        title: "About Us",
        href: "/about-us"
    },
];

export const partnersItem = [
    {
        id: 1,
        src: google,
    },
    {
        id: 2,
        src: netflix,
    },
    {
        id: 3,
        src: airbnb,
    },
    {
        id: 4,
        src: amazon,
    },
    {
        id: 4,
        src: facebook,
    },
    {
        id: 4,
        src: grab,
    },
];

export const featuresItem = [
    {
        id: 1,
        title: "Online Billing, Invoicing, & Contracts",
        para: "Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts",
        src: billing
    },
    {
        id: 2,
        title: "Easy Scheduling & Attendance Tracking",
        para: "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance",
        src: calanders
    },
    {
        id: 3,
        title: "Customer Tracking",
        para: "Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization",
        src: customer
    },
];
