import { User } from './user';

export const USER_DATA : User[] = [{
  firstName: "Bill",
  lastName: "Gates",
  dob: new Date("Dec 2, 1965"),
  company: "Microsoft",
  isWorking: true,
  income: 50000,
  image: "assets/images/bill.jpg",
  vote: 120
},{
  firstName: "Steve",
  lastName: "jobs",
  dob: new Date("Jan 1, 1965"),
  company: "Apple",
  isWorking: false,
  income: 0,
  image: "assets/images/steve.png",
  vote: 100
},{
  firstName: "Tim B.",
  lastName: "Lee",
  dob: new Date("Aug 5, 1965"),
  company: "World Wide Web",
  isWorking: true,
  income: 30000,
  image: "assets/images/tim.jpg",
  vote: 180
}]
