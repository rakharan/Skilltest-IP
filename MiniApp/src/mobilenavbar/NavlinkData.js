import {
    homeNav,
    tentangNav,
    faqNav,
    eventsNav,
    leaderboardNav,
    partnershipNav,
    tagsNav,
    forumNav,
    blogsNav,
    jobsNav,
    signupNav,
    loginNav
} from "../assets/img"
const navLinkData1 = [
    {
        key: 1,
        href: "/",
        icon: homeNav,
        title: "Home"
    },
    {
        key: 2,
        href: "/about",
        icon: tentangNav,
        title: "Tentang"
    },
    {
        key: 3,
        href: "/faq",
        icon: faqNav,
        title: "FAQ"
    },
    {
        key: 4,
        href: "/events",
        icon: eventsNav,
        title: "Events"
    },
    {
        key: 5,
        icon: leaderboardNav,
        title: "Leaderboad"
    },
    {
        key: 6,
        href: "/partnership",
        icon: partnershipNav,
        title: "Partnership"
    },
    {
        key: 7,
        href: "/tags",
        icon: tagsNav,
        title: "Tags"
    },
]

const navLinkData2 = [
    {
        key: 1,
        href: "/forum",
        icon: forumNav,
        title: "Forum Qna"
    },
    {
        key: 2,
        href: "/blogs",
        icon: blogsNav,
        title: "Blogs"
    },
    {
        key: 3,
        href: "/jobs",
        icon: jobsNav,
        title: "Jobs"
    },
]

const navLinkData3 = [
    {
        key: 1,
        href: "/login",
        icon: loginNav,
        title: "Login"
    },
    {
        key: 2,
        href: "/signup",
        icon: signupNav,
        title: "Sign Up"
    }
]

export { navLinkData1, navLinkData2, navLinkData3 };