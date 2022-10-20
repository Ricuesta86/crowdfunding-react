import { product } from './type';
const api = {
  data: {
    data:{
      backed: 89914,
      totalBackers: 5007,
      totalBacked: 100000,
      dayLeft: 56,
  },
    list: ():product[] => [
      {
        title: "Bamboo Stand",
        pledge: 25,
        text: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.",
        amount: 101,
      },
      {
        title: "Black Edition Stand",
        pledge:75,
        text: "You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
        amount: 64,
      },
      {
        title: "Mahogany Special Edition",
        pledge: 200,
        text: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a        personal thank you. You'll be added to our Backer member list. Shipping is included.",
        amount: 0,
      },
    ],
    amount:{
      amount25:101,
      amount75:64,
      amount200:0,

    }
  },
};

export default api;
