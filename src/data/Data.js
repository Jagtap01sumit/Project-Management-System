import {
  UilClipboardAlt,
  UilUsdSquare,
  UilMoneyWithdrawal,
} from "@iconscout/react-unicons";

export const cardsData = [
  {
    title: "Sales",
    color: {
      backGround: "linear-gradient(#271d83 0%, #4a9fd8 100%)",
      boxShadow: " rgb(46 48 97) 0px 10px 20px",
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      // expansion card
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      backGround: "linear-gradient(#271d83 0%, #4a9fd8 100%)",
      boxShadow: " rgb(46 48 97) 0px 10px 20px",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Expenses",
    color: {
      backGround: "linear-gradient(#271d83 0%, #4a9fd8 100%)",
      boxShadow: " rgb(46 48 97) 0px 10px 20px",
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];
export const UpdatesData = [
  {
    img: "/images/img1.png",
    name: "Andrew Thomas",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  {
    img: "/images/img2.png",
    name: "James Bond",
    noti: "has received Samsung gadget for charging battery.",
    time: "30 minutes ago",
  },
  {
    img: "/images/img3.png",
    name: "Iron Man",
    noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "2 hours ago",
  },
];
