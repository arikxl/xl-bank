export const headerNavLinks = [
    {
        id: 16,
        title: 'Dashboard',
        linkTo:'#about'
    },
    {
        id: 11,
        title: 'Crypto',
        linkTo:'/crypto'
    },
    {
        id: 12,
        title: 'C.Cards',
        linkTo:'#credit'
    },
    {
        id: 13,
        title: 'Loans',
        linkTo:'#loan'
    },
    {
        id: 14,
        title: 'The Team',
        linkTo:'#about'
    },
    {
        id: 15,
        title: 'Shop',
        linkTo:'#about'
    },

]

export const homeSectionsContent = [
    {
        id: 3001,
        img: '/assets/img/data.svg',
        title: 'Manage your Money',
        subTitle: 'Controlling your fortune is extremely easy',
        desc: 'User-friendly interface for smooth asset management. Track crypto investments and monitor account balances, empowering you to make decisions swiftly and efficiently.',
        btnText: "Let's start",
        linkTo: '/dashboard'

    },
    {
        id: 3002,
        img: '/assets/img/bit.svg',
        title: 'Crypto World',
        subTitle: 'Access the latest info and start your trading journey',
        desc: "Buy or sell bitcoin and other cryptocurrencies with confidence on the world's most secure crypto trade app. we are committed to your transactions protection.",
        btnText: 'Invest Today',
        linkTo: '/crypto'
    },
    {
        id: 3003,
        img: '/assets/img/card1.svg',
        title: 'Fashionable Finances',
        subTitle: 'Elevate your spending with stylish credit cards',
        desc: 'Make a statement with elegance designs for your wallet. Be imaginative & unique like a true artist. Like others cards and get ranked for your creative ideas.',
        btnText: 'Express Your Style',
        linkTo: '/credit'

    },
];

export const loans = [
    {
        id: 4001,
        title: 'TINY',
        years: 1,
        interest: 10,
        img: '/assets/img/coins.svg'
    },
    {
        id: 4002,
        title: 'MID',
        years: 5,
        interest: 6.33,
        img: '/assets/img/bills.svg'
    },
    {
        id: 4003,
        title: 'HUGE',
        years: 10,
        interest: 2.5,
        img: '/assets/img/gold.svg'
    },
]

export const team = [
    {
        id: 5001,
        name: 'Arik',
        position: 'Founder & CEO',
        img: 'https://res.cloudinary.com/arikxl/image/upload/v1691237820/Ella2023/qynmcguahbfziwgtcp47.jpg',
        email: 'arikxl@gmail.com',
        funFacts:'Father of two aliens. A failed stand-up comedian. A football manager legend.'
    },
    {
        id: 5002,
        name: 'Danielle',
        position: 'Marketing Magician',
        img: 'https://res.cloudinary.com/arikxl/image/upload/v1691239150/Ella2023/edozp5rgqgrknpekfqza.jpg',
        email: 'loola@xlbank.com',
        funFacts:"The animal whisperer. Cool guitarist. Made 100% of chocolate. Still don't know she's adopted."
    },
    {
        id: 5003,
        name: 'Yehonatan',
        position: 'Cybersecurity Wizard',
        img: 'https://res.cloudinary.com/arikxl/image/upload/v1691239172/Ella2023/vutb3gwrfyxbzxffvows.jpg',
        email: 'hacker@xlbank.com',
        funFacts:'Parkourist gamer. A lego master builder. Has a million dollar smile. Escaped from a madhouse.'
    },
    {
        id: 5004,
        name: 'Ogry',
        position: 'Guard Sorcerer',
        img: 'https://res.cloudinary.com/arikxl/image/upload/v1691239193/Ella2023/ah3h1xsavunhlodcsqbb.jpg',
        email: 'evil@xlbank.com',
        funFacts:'Sinister hamster, sweet eyes, wicked grin, sharp claws, malevolence wrapped in innocent fur. Beware its darkness.'
    },
]

export const responsiveCarousel = {
        0: {
            items: 2,
        },
        512: {
            items: 4,

        }

}