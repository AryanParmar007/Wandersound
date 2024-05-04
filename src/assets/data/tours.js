import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";
import tourImg08 from "../images/tour-img08.jpg";

const tours = [
  {
    id: "01",
    title: "Golden Temple",
    city: "Amritsar",
    distance: 500,
    address:'Somewhere',
    price: 99,
    maxGroupSize: 5,
    desc: "The Golden Temple, also known as Sri Harmandir Sahib, is a Gurdwara located in the city of Amritsar, Punjab, India.",
    reviews: [
      {
        name: "Guru Arjan Sahib ",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Charminar",
    city: "Hyderabad",
    distance: 400,
    address:'Somewhere',
    price: 99,
    maxGroupSize: 10,
    desc: "The Charminar is a monument and mosque in Hyderabad, Telangana, India.",
    reviews: [
      {
        name: "Mohammed Quli Qutb Shah",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Taj Mahal",
    city: "Agra",
    distance: 500,
    address:'Somewhere',
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "Mumtaj",
        rating: 4.6,
      },
      {
        name: "Akbar",
        rating: 5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Mysore Palace",
    city: "Mysore",
    distance: 500,
    address:'Somewhere',
    price: 99,
    maxGroupSize: 4,
    desc: "Mysore Palace is a historical palace and a royal residence at Mysore in the Indian State of Karnataka.",
    reviews: [
      {
        name: "Henry Irwin",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Gateway of India",
    city: "Mumbai",
    distance: 500,
    address:'Somewhere',
    price: 99,
    maxGroupSize: 7,
    desc: "The Gateway of India is an arch monument built during the 20th century in Mumbai, India.",
    reviews: [
      {
        name: "George Wittet",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Hawa Mahal",
    city: "Jaipur",
    distance: 500,
    address:'Somewhere',
    price: 99,
    maxGroupSize: 3,
    desc: "Hawa Mahal is a palace in Jaipur, India. It is constructed of red and pink sandstone.",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Red Fort",
    city: "Delhi",
    distance: 500,
    address:'Somewhere',
    price: 99,
    maxGroupSize: 8,
    desc: "The Red Fort is a historic fort in the city of Delhi in India.",
    reviews: [
      {
        name: "Shah Jahan",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Qutub Minar",
    city: "Delhi",
    distance: 500,
    address:'Somewhere',
    price: 99,
    maxGroupSize: 9,
    desc: "The Qutub Minar, also spelled as Qutab Minar, is a minaret that forms part of the Qutb complex, a UNESCO World Heritage Site in the Mehrauli area of Delhi, India.",
    reviews: [
      {
        name: "Qutb-ud-din Aibak",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg08,
    featured: false,
  },
];

export default tours;
