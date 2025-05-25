const mongoose = require('mongoose');
const Designer = require('../models/Designer');
require('dotenv').config();

const designers = [
  {
    name: "Epic Designs",
    description: "Passionate team of 4 designers working out of Bangalore with an experience of 4 years.",
    years: 8,
    projects: 57,
    price: 924,
    phoneNumbers: ["+91-9845328853", "+91-9845328854"],
    rating: 4.5,
    teamSize: 4,
    location: "Bangalore",
    image: ""
  },
  {
    name: "Studio - D3",
    description: "Passionate team of 4 designers working out of Bangalore with an experience of 4 years.",
    years: 6,
    projects: 43,
    price: 1258,
    phoneNumbers: ["+91-9845328853", "+91-9845328854"],
    rating: 4.5,
    teamSize: 4,
    location: "Bangalore",
    image: ""
  },
   {
    "name": "Urban Nest Interiors",
    "description": "Innovative interior design firm blending modern aesthetics with practical spaces.",
    "years": 10,
    "projects": 72,
    "price": 1100,
    "phoneNumbers": ["+91-9876543210", "+91-9876543211"],
    "rating": 3.7,
    "teamSize": 6,
    "location": "Mumbai",
    "image": ""
  },
  {
    "name": "Aesthetica Studio",
    "description": "Boutique design firm known for luxury and elegance in every project.",
    "years": 5,
    "projects": 35,
    "price": 1450,
    "phoneNumbers": ["+91-9811122233","+91-9822034457"],
    "rating": 2.3,
    "teamSize": 3,
    "location": "Delhi",
    "image": ""
  },
  {
    "name": "DesignCrafters",
    "description": "Experienced team of 7 designers focusing on sustainable and eco-friendly interiors.",
    "years": 9,
    "projects": 60,
    "price": 980,
    "phoneNumbers": ["+91-9822034456", "+91-9822034457"],
    "rating": 4.6,
    "teamSize": 7,
    "location": "Pune",
    "image": ""
  },
  {
    "name": "The Space Lab",
    "description": "Dynamic team with a futuristic approach to commercial and residential design.",
    "years": 4,
    "projects": 28,
    "price": 875,
    "phoneNumbers": ["+91-9789034456","+91-9822034457"],
    "rating": 4.2,
    "teamSize": 5,
    "location": "Hyderabad",
    "image": ""
  },
  {
    "name": "Design Hive",
    "description": "Collaborative studio of passionate designers delivering personalized interiors.",
    "years": 7,
    "projects": 48,
    "price": 1025,
    "phoneNumbers": ["+91-9950011223", "+91-9950011224"],
    "rating": 4.4,
    "teamSize": 4,
    "location": "Chennai",
    "image": ""
  }
];
MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/emptycup";
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    await Designer.deleteMany({});
    await Designer.insertMany(designers);
    console.log("Database seeded!");
    mongoose.disconnect();
  })
  .catch(err => console.error(err)); 