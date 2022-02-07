const loremIpsum = require("lorem-ipsum").loremIpsum;

const [logo1, logo2, logo3, logo4] = [
    "/images/mentor_shop/shopLogoBlue.png",
    "/images/mentor_shop/shopLogoBW.png",
    "/images/mentor_shop/shopLogoDark.png",
    "/images/mentor_shop/shopLogoWhite.png"
];
const shopLogos = [logo1, logo2, logo3, logo4];
const generateRandomLogo = () => {
    return shopLogos[Math.floor(Math.random() * shopLogos.length)];
};

const users = [
    {
        firstName: "Steve",
        lastName: "Jobs",
        password: "steve_pw",
        email: "steve@email.com",
        isMentor: true,
        profilePic:
            "https://stackingthebricks.com/assets/images/steve-jobs-headshot.png",
        bio:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        employer: "Apple Computers",
        jobTitle: "Founder and CEO",
        location: "Cupertino, California",
        industry: "Computer Technology",
        yearsInTech: 30,
        school: "Reed College",
        areaOfStudy: "Computer Science",
        endYear: 1972,
        intakeScore: 1
    },
    {
        firstName: "Grace",
        lastName: "Hopper",
        password: "grace_pw",
        email: "grace@email.com",
        isMentor: true,
        profilePic:
            "https://www.onthisday.com/images/people/grace-hopper-medium.jpg",
        bio:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        employer: "US Navy",
        jobTitle: "Rear Admiral",
        location: "Arlington, Virginia",
        industry: "Computer Technology",
        yearsInTech: 36,
        school: "Smith College",
        areaOfStudy: "Mathematics",
        endYear: 1944,
        intakeScore: 2
    },
    {
        firstName: "Ada",
        lastName: "Lovelace",
        password: "ada_pw",
        email: "ada@email.com",
        isMentor: true,
        profilePic:
            "https://wikiedu.org/wp-content/uploads/2018/10/ada_lovelace_2018_Featured_image.jpg",
        bio:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        employer: "Analytical Engine",
        jobTitle: "Programmer",
        location: "England",
        industry: "Computer Technology",
        yearsInTech: 14,
        school: "Tottenham Hale",
        areaOfStudy: "Mathematics",
        endYear: 1852,
        intakeScore: 3
    },
    {
        firstName: "Katherine",
        lastName: "Johnson",
        password: "katherine_pw",
        email: "katherine@email.com",
        isMentor: true,
        profilePic: "https://regmedia.co.uk/2020/02/24/katherine_johnson.jpg",
        bio:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        employer: "NASA",
        jobTitle: "Programmer",
        location: "Cape Canaveral, Florida",
        industry: "Aerospace",
        yearsInTech: 30,
        school: "West Virginia State College",
        areaOfStudy: "Mathematics",
        endYear: 1937,
        intakeScore: 4
    },
    {
        firstName: "Margaret",
        lastName: "Hamilton",
        password: "margaret_pw",
        email: "margaret@email.com",
        isMentor: true,
        profilePic:
            "https://www.vintageisthenewold.com/wp-content/uploads/2016/07/margaret_hamilton1.jpg",
        bio:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        employer: "MIT Instrumentation Laboratory",
        jobTitle: "Software Engineer",
        location: "Cambridge, Massachusetts",
        industry: "Abstract Mathematics",
        yearsInTech: 35,
        school: "Earlham College",
        areaOfStudy: "Mathematics",
        endYear: 1958,
        intakeScore: 1
    },
    {
        firstName: "Reshma",
        lastName: "Saujani",
        password: "reshma_pw",
        email: "reshma_pw@email.com",
        isMentor: true,
        profilePic:
            "https://globalny.biz/usr/person/big-person-15905325181.jpg",
        bio:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        employer: "Girls Who Code",
        jobTitle: "Founder",
        location: "New York, New York",
        industry: "Computer Programming",
        yearsInTech: 14,
        school: "Harvard University",
        areaOfStudy: "Public Policy",
        endYear: 1999,
        intakeScore: 2
    },

    {
        firstName: "Sheryl",
        lastName: "Sandbert",
        password: "sheryl_pw",
        email: "sheryl@email.com",
        isMentor: true,
        profilePic:
            "https://i2.wp.com/www.dailycal.org/assets/uploads/2016/03/Sheryl-Sandberg.jpg",
        bio:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        employer: "Facebook",
        jobTitle: "COO",
        location: "Menlo Park, California",
        industry: "Social Media",
        yearsInTech: 32,
        school: "Harvard College",
        areaOfStudy: "Economics",
        endYear: 1999,
        intakeScore: 3
    },

    {
        firstName: "Susan",
        lastName: "Wojcicki",
        password: "susan_pw",
        email: "susan@email.com",
        isMentor: true,
        profilePic:
            "https://jpreis.com/wp/wp-content/uploads/2018/03/susan-wojcicki-youtube-ceo.jpg",
        bio:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        employer: "YouTube",
        jobTitle: "CEO",
        location: "San Bruno, California",
        industry: "Social Media",
        yearsInTech: 33,
        school: "Harvard University",
        areaOfStudy: "Humanities",
        endYear: 1990,
        intakeScore: 4
    },
    {
        firstName: "Ellen",
        lastName: "Pao",
        password: "ellen_pw",
        email: "ellen@email.com",
        isMentor: true,
        profilePic: "https://static2.stuff.co.nz/1365983592/874/8551874.jpg",
        bio:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        employer: "Project Include",
        jobTitle: "CEO",
        location: "San Francisco, California",
        industry: "Consulting",
        yearsInTech: 34,
        school: "Princeton University",
        areaOfStudy: "International Affairs",
        endYear: 1991,
        intakeScore: 1
    },
    {
        firstName: "Danah",
        lastName: "Boyd",
        password: "danah_pw",
        email: "danah@email.com",
        isMentor: true,
        profilePic:
            "https://leblog.wcie.fr/bw-content/uploads/2010/11/danah-boyd.jpg",
        bio:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        employer: "Data & Society Research Institute",
        jobTitle: "Founder & President",
        location: "San Bruno, California",
        industry: "Social Media",
        yearsInTech: 24,
        school: "Brown University",
        areaOfStudy: "Cpmputer Science",
        endYear: 2004,
        intakeScore: 2
    },
    {
        firstName: "Kimberly",
        lastName: "Bryant",
        password: "kimberly_pw",
        email: "kimberly@email.com",
        isMentor: true,
        profilePic:
            "https://www.entrenuity.com/hubfs/Entrenuity_March2020/Image/Kimberly_Bryant_Profile.jpg",
        bio:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        employer: "Black Girls Who Code",
        jobTitle: "CEO",
        location: "San Francisco, California",
        industry: "Education",
        yearsInTech: 38,
        school: "Vanderbilt University",
        areaOfStudy: "Electrical Engineering",
        endYear: 1985,
        intakeScore: 3
    },
    {
        firstName: "Mark",
        lastName: "Zuckerberg",
        password: "mark_pw",
        email: "mark@email.com",
        isMentor: true,
        profilePic:
            "http://images.tmz.com/2014/10/26/mark-zuckerberg-200x250.jpg",
        bio:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        employer: "Facebook",
        jobTitle: "CEO",
        location: "Menlo Park, California",
        industry: "Social Media",
        yearsInTech: 23,
        school: "Harvard University",
        areaOfStudy: "Computer Science",
        endYear: 2005,
        intakeScore: 4
    },
    {
        firstName: "Bill",
        lastName: "Gates",
        password: "bill_pw",
        email: "bill@email.com",
        isMentor: true,
        profilePic:
            "https://livebiography.com/wp-content/uploads/2018/08/bill-gates-Profile.jpg",
        bio:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        employer: "Microsoft",
        jobTitle: "CEO",
        location: "Redmond, Washington",
        industry: "Computer Engineering",
        yearsInTech: 43,
        school: "Harvard University",
        areaOfStudy: "Computer Science",
        endYear: 1975,
        intakeScore: 1
    },
    {
        firstName: "Elon",
        lastName: "Musk",
        password: "elon_pw",
        email: "elon@email.com",
        isMentor: true,
        profilePic:
            "https://static.dezeen.com/uploads/2015/03/Elon-Musk-portrait-dezeen_sq01.jpg",
        bio:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        employer: "SpaceX",
        jobTitle: "CEO",
        location: "Hawthorne, California",
        industry: "Aerospace",
        yearsInTech: 23,
        school: "University of Pennsylvania",
        areaOfStudy: "Physics",
        endYear: 1995,
        intakeScore: 2
    },
    {
        firstName: "Tim",
        lastName: "Cook",
        password: "tim_pw",
        email: "tim@email.com",
        isMentor: true,
        profilePic: "https://articlebio.com/uploads/2014/T/Tim_Cook.jpg",
        bio:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        employer: "Apple",
        jobTitle: "CEO",
        location: "Cupertino, California",
        industry: "Computer Technology",
        yearsInTech: 23,
        school: "Auburn University",
        areaOfStudy: "Humanities",
        endYear: 1982,
        intakeScore: 3
    },
    {
        firstName: "Jack",
        lastName: "Dorsey",
        password: "jack_pw",
        email: "jack@email.com",
        isMentor: true,
        profilePic:
            "http://tmcf.org/wp-content/uploads/2016/06/jack-dorsey-239.jpg",
        bio:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        employer: "Twitter",
        jobTitle: "CEO",
        location: "San Francisco, California",
        industry: "Social Media",
        yearsInTech: 23,
        school: "New York University",
        areaOfStudy: "Computer Science",
        endYear: 1997,
        intakeScore: 4
    },
    {
        firstName: "Eleanor",
        lastName: "Shelstrop",
        password: "eleanor_pw",
        email: "eleanor@email.com",
        isMentor: false,
        profilePic:
            "http://static.tvmaze.com/uploads/images/medium_portrait/73/184007.jpg",
        bio:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        employer: "Twitter",
        jobTitle: "Intern",
        location: "San Francisco, California",
        industry: "Social Media",
        yearsInTech: 1,
        school: "New York University",
        areaOfStudy: "Computer Science",
        endYear: 2022,
        intakeScore: 1
    },
    {
        firstName: "Tahani",
        lastName: "Al-Jamil",
        password: "tahani_pw",
        email: "tahani@email.com",
        isMentor: false,
        profilePic:
            "https://i.pinimg.com/originals/f4/7b/a4/f47ba441b4d1cb419c0359e5c5fd4570.png",
        bio:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        employer: "Spotify",
        jobTitle: "Intern",
        location: "New York, New York",
        industry: "Social Media",
        yearsInTech: 1,
        school: "University of Pensylvania",
        areaOfStudy: "Computer Science",
        endYear: 2022,
        intakeScore: 2
    },
    {
        firstName: "Chidi",
        lastName: "Anagonye",
        password: "chidi_pw",
        email: "chidi@email.com",
        isMentor: false,
        profilePic:
            "https://yankeetv.com/wiki/wp-content/uploads/2019/01/WilliamJacksonHarper.jpg",
        bio:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        employer: "n/a",
        jobTitle: "n/a",
        location: "New York, New York",
        industry: "Software Engineering",
        yearsInTech: 0,
        school: "Fullstack Academy",
        areaOfStudy: "Software Engineering",
        endYear: 2022,
        intakeScore: 3
    },
    {
        firstName: "Jason",
        lastName: "Mendoza",
        password: "jason_pw",
        email: "jason@email.com",
        isMentor: false,
        profilePic:
            "https://i.pinimg.com/originals/1f/04/8f/1f048f0339092f1a8ec2b8615333405b.jpg",
        bio:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        employer: "Etsy",
        jobTitle: "Intern",
        location: "New York, New York",
        industry: "eCommerce",
        yearsInTech: 1,
        school: "New York University",
        areaOfStudy: "Computer Science",
        endYear: 2022,
        intakeScore: 4
    },

    {
        firstName: "Admin",
        lastName: "Admin",
        password: "admin_pw",
        email: "admin@email.com",
        isMentor: true,
        profilePic:
            "https://zultimate.com/wp-content/uploads/2019/12/default-profile.png",
        bio: "n/a",
        employer: "n/a",
        jobTitle: "n/a",
        location: "n/a",
        industry: "n/a",
        yearsInTech: 0,
        school: "n/a",
        areaOfStudy: "n/a",
        endYear: 2022,
        intakeScore: 0
    }
];

// const offerings = [
//   {
//     userId: 1,
//     chat: true,
//     advice: true,
//     liveQandA: true,
//   },
//   {
//     userId: 2,
//     chat: true,
//     advice: true,
//     liveQandA: false,
//   },
//   {
//     userId: 3,
//     chat: true,
//     advice: false,
//     liveQandA: true,
//   },
//   {
//     userId: 4,
//     chat: true,
//     advice: false,
//     liveQandA: true,
//   },
//   {
//     userId: 5,
//     chat: true,
//     advice: true,
//     liveQandA: true,
//   },
//   {
//     userId: 6,
//     chat: true,
//     advice: true,
//     liveQandA: false,
//   },
//   {
//     userId: 7,
//     chat: true,
//     advice: true,
//     liveQandA: true,
//   },
//   {
//     userId: 8,
//     chat: true,
//     advice: false,
//     liveQandA: false,
//   },
//   {
//     userId: 9,
//     chat: true,
//     advice: true,
//     liveQandA: true,
//   },
//   {
//     userId: 10,
//     chat: true,
//     advice: false,
//     liveQandA: false,
//   },
//   {
//     userId: 11,
//     chat: true,
//     advice: true,
//     liveQandA: true,
//   },
//   {
//     userId: 12,
//     chat: true,
//     advice: false,
//     liveQandA: false,
//   },
// ];

const offerings = [
    {
        title: "Chat",
        description:
            "Modernipsum dolor sit amet caravaggisti jugendstil action painting new media art divisionism, naturalism barbizon school ego-futurism dadaism neo-classicism russian futurism."
    },
    {
        title: "liveQandA",
        description:
            "Lyrical abstraction luminism action painting performance art neoclassicism pre-raphaelites stuckism, installation art nouveau realisme metaphysical art structuralism pointilism mannerism, postminimalism mannerism conceptual art baroque impressionism. "
    },
    {
        title: "advice",
        description:
            "Formalism cubo-futurism neo-impressionism luminism deformalism cubism neo-dada hudson river school, russian symbolism geometric abstraction art nouveau post-structuralism color field painting. "
    }
];

// Add M:M associatied join table row - users_offerings

const generateRandomUserOfferings = () => {
    let userOfferings = [];
    const map = new Map();
    let num = Math.floor(Math.random() * offerings.length + 1);
    while (num > userOfferings.length) {
        let idx = Math.floor(Math.random() * offerings.length);
        let userOffering = offerings[idx];
        for (userOffering of offerings) {
            if (!map.has(userOffering.name)) {
                map.set(userOffering.name, true);
                userOfferings.push(userOffering);
            } else {
                continue;
            }
        }
    }
    return userOfferings;
};

let mentorShops = [];
for (let i = 0; i < users.length; i++) {
    let user = users[i];
    // each mentor should have a single mentorShop
    if (user.isMentor) {
        let mentorShop = {
            name: `${user.firstName} ${user.lastName}'s Shop`,
            description: loremIpsum({ count: 1, units: "sentences" }),
            shopLogo: generateRandomLogo()
        };
        // magic methods 1:1
        mentorShop.ownerId = user.id;
        user.shopId = mentorShop.id;
        mentorShops.push(mentorShop);
    } else continue;
}

const review = {
    reviewMessage: loremIpsum({ count: 50, suffix: "\n", units: "words" })
};

let menteeReviews = [];
for (let i = 0; i < users.length; i++) {
    let user = users[i];
    if (!user.isMentor) {
        menteeReviews.push(review);
    }
}

// Append Randomized assortment of offerings to MentorShop

module.exports = {
    users,
    offerings,
    menteeReviews,
    generateRandomUserOfferings,
    mentorShops
};
