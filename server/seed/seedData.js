
import Flight from "./models/Flight.js";
import User from "./models/User.js";
import Booking from "./models/Booking.js";
import bcrypt from "bcryptjs";

export const sampleUsers = [
  {
    name: "Admin User",
    email: "admin@flightfinder.com",
    password: bcrypt.hashSync("admin123", 10),
    isAdmin: true
  },
  {
    name: "John Doe",
    email: "john@example.com",
    password: bcrypt.hashSync("password", 10)
  },
  {
    name: "Jane Smith",
    email: "jane@example.com",
    password: bcrypt.hashSync("password123", 10)
  }
];

export const sampleFlights = [
  {
    airline: "Vistara",
    from: "Ahmedabad",
    to: "Mumbai",
    departureTime: "22:36",
    arrivalTime: "01:12",
    price: 11375,
    date: "2025-06-26"
  },
  {
    airline: "SpiceJet",
    from: "Goa",
    to: "Kolkata",
    departureTime: "03:25",
    arrivalTime: "03:29",
    price: 10635,
    date: "2025-07-10"
  },
  {
    airline: "Emirates",
    from: "Chennai",
    to: "Bangalore",
    departureTime: "13:08",
    arrivalTime: "17:51",
    price: 6668,
    date: "2025-06-28"
  },
  {
    airline: "British Airways",
    from: "Delhi",
    to: "Pune",
    departureTime: "05:09",
    arrivalTime: "20:29",
    price: 12353,
    date: "2025-07-05"
  },
  {
    airline: "Emirates",
    from: "Delhi",
    to: "Hyderabad",
    departureTime: "05:21",
    arrivalTime: "19:05",
    price: 11439,
    date: "2025-06-30"
  },
  {
    airline: "British Airways",
    from: "Bangalore",
    to: "Chennai",
    departureTime: "06:13",
    arrivalTime: "08:53",
    price: 8676,
    date: "2025-07-09"
  },
  {
    airline: "SpiceJet",
    from: "Jaipur",
    to: "Pune",
    departureTime: "15:33",
    arrivalTime: "06:25",
    price: 13989,
    date: "2025-07-11"
  },
  {
    airline: "British Airways",
    from: "Hyderabad",
    to: "Ahmedabad",
    departureTime: "10:04",
    arrivalTime: "18:41",
    price: 14597,
    date: "2025-06-30"
  },
  {
    airline: "Singapore Airlines",
    from: "Ahmedabad",
    to: "Bangalore",
    departureTime: "00:11",
    arrivalTime: "14:18",
    price: 7310,
    date: "2025-07-08"
  },
  {
    airline: "Emirates",
    from: "Goa",
    to: "Kolkata",
    departureTime: "09:29",
    arrivalTime: "02:05",
    price: 8218,
    date: "2025-07-08"
  },
  {
    airline: "SpiceJet",
    from: "Kolkata",
    to: "Delhi",
    departureTime: "11:54",
    arrivalTime: "03:20",
    price: 6577,
    date: "2025-06-29"
  },
  {
    airline: "Air India",
    from: "Hyderabad",
    to: "Delhi",
    departureTime: "08:54",
    arrivalTime: "00:58",
    price: 10184,
    date: "2025-07-02"
  },
  {
    airline: "British Airways",
    from: "Goa",
    to: "Pune",
    departureTime: "04:14",
    arrivalTime: "21:40",
    price: 10038,
    date: "2025-07-12"
  },
  {
    airline: "Emirates",
    from: "Ahmedabad",
    to: "Delhi",
    departureTime: "16:24",
    arrivalTime: "16:14",
    price: 2845,
    date: "2025-07-07"
  },
  {
    airline: "Air India",
    from: "Ahmedabad",
    to: "Kolkata",
    departureTime: "23:47",
    arrivalTime: "07:26",
    price: 2827,
    date: "2025-07-09"
  },
  {
    airline: "Vistara",
    from: "Jaipur",
    to: "Hyderabad",
    departureTime: "13:14",
    arrivalTime: "04:27",
    price: 9917,
    date: "2025-06-30"
  },
  {
    airline: "Air India",
    from: "Hyderabad",
    to: "Chennai",
    departureTime: "13:01",
    arrivalTime: "21:17",
    price: 4190,
    date: "2025-07-01"
  },
  {
    airline: "Qatar Airways",
    from: "Kolkata",
    to: "Mumbai",
    departureTime: "00:03",
    arrivalTime: "19:09",
    price: 12566,
    date: "2025-07-13"
  },
  {
    airline: "Qatar Airways",
    from: "Kolkata",
    to: "Hyderabad",
    departureTime: "00:29",
    arrivalTime: "14:09",
    price: 14932,
    date: "2025-06-27"
  },
  {
    airline: "Lufthansa",
    from: "Goa",
    to: "Hyderabad",
    departureTime: "01:45",
    arrivalTime: "22:56",
    price: 12292,
    date: "2025-06-26"
  },
  {
    airline: "Vistara",
    from: "Delhi",
    to: "Bangalore",
    departureTime: "01:10",
    arrivalTime: "13:26",
    price: 13914,
    date: "2025-07-11"
  },
  {
    airline: "Air India",
    from: "Chennai",
    to: "Kolkata",
    departureTime: "16:56",
    arrivalTime: "17:55",
    price: 9531,
    date: "2025-06-26"
  },
  {
    airline: "Emirates",
    from: "Mumbai",
    to: "Pune",
    departureTime: "16:54",
    arrivalTime: "15:02",
    price: 3332,
    date: "2025-07-02"
  },
  {
    airline: "GoAir",
    from: "Jaipur",
    to: "Kolkata",
    departureTime: "18:32",
    arrivalTime: "06:44",
    price: 5838,
    date: "2025-07-06"
  },
  {
    airline: "Lufthansa",
    from: "Bangalore",
    to: "Kolkata",
    departureTime: "01:23",
    arrivalTime: "09:44",
    price: 4652,
    date: "2025-07-01"
  },
  {
    airline: "SpiceJet",
    from: "Hyderabad",
    to: "Jaipur",
    departureTime: "02:37",
    arrivalTime: "04:33",
    price: 5234,
    date: "2025-06-29"
  },
  {
    airline: "SpiceJet",
    from: "Bangalore",
    to: "Ahmedabad",
    departureTime: "19:08",
    arrivalTime: "00:24",
    price: 10685,
    date: "2025-06-26"
  },
  {
    airline: "Air India",
    from: "Pune",
    to: "Bangalore",
    departureTime: "11:50",
    arrivalTime: "20:45",
    price: 5676,
    date: "2025-06-25"
  },
  {
    airline: "GoAir",
    from: "Mumbai",
    to: "Bangalore",
    departureTime: "15:53",
    arrivalTime: "16:44",
    price: 12006,
    date: "2025-06-26"
  },
  {
    airline: "Singapore Airlines",
    from: "Delhi",
    to: "Bangalore",
    departureTime: "08:38",
    arrivalTime: "09:28",
    price: 11397,
    date: "2025-07-13"
  },
  {
    airline: "SpiceJet",
    from: "Hyderabad",
    to: "Goa",
    departureTime: "05:54",
    arrivalTime: "01:55",
    price: 3560,
    date: "2025-07-10"
  },
  {
    airline: "Emirates",
    from: "Kolkata",
    to: "Delhi",
    departureTime: "11:43",
    arrivalTime: "12:48",
    price: 9939,
    date: "2025-07-06"
  },
  {
    airline: "Qatar Airways",
    from: "Chennai",
    to: "Jaipur",
    departureTime: "04:19",
    arrivalTime: "04:53",
    price: 5399,
    date: "2025-07-10"
  },
  {
    airline: "IndiGo",
    from: "Kolkata",
    to: "Ahmedabad",
    departureTime: "16:19",
    arrivalTime: "08:13",
    price: 12252,
    date: "2025-07-12"
  },
  {
    airline: "SpiceJet",
    from: "Goa",
    to: "Bangalore",
    departureTime: "22:37",
    arrivalTime: "01:00",
    price: 3806,
    date: "2025-06-27"
  },
  {
    airline: "Air India",
    from: "Hyderabad",
    to: "Mumbai",
    departureTime: "13:12",
    arrivalTime: "22:08",
    price: 10135,
    date: "2025-07-14"
  },
  {
    airline: "Air India",
    from: "Pune",
    to: "Jaipur",
    departureTime: "23:01",
    arrivalTime: "19:26",
    price: 13427,
    date: "2025-07-13"
  },
  {
    airline: "Lufthansa",
    from: "Mumbai",
    to: "Chennai",
    departureTime: "23:41",
    arrivalTime: "14:10",
    price: 8169,
    date: "2025-07-01"
  },
  {
    airline: "Air India",
    from: "Hyderabad",
    to: "Bangalore",
    departureTime: "16:37",
    arrivalTime: "13:45",
    price: 12461,
    date: "2025-07-06"
  },
  {
    airline: "Emirates",
    from: "Kolkata",
    to: "Delhi",
    departureTime: "14:57",
    arrivalTime: "08:04",
    price: 5032,
    date: "2025-07-02"
  },
  {
    airline: "Air India",
    from: "Chennai",
    to: "Kolkata",
    departureTime: "23:02",
    arrivalTime: "14:00",
    price: 6242,
    date: "2025-06-25"
  },
  {
    airline: "SpiceJet",
    from: "Pune",
    to: "Jaipur",
    departureTime: "07:53",
    arrivalTime: "13:48",
    price: 2669,
    date: "2025-06-26"
  },
  {
    airline: "Air India",
    from: "Pune",
    to: "Jaipur",
    departureTime: "11:38",
    arrivalTime: "09:37",
    price: 2627,
    date: "2025-07-14"
  },
  {
    airline: "IndiGo",
    from: "Hyderabad",
    to: "Goa",
    departureTime: "10:54",
    arrivalTime: "12:14",
    price: 7461,
    date: "2025-07-05"
  },
  {
    airline: "British Airways",
    from: "Pune",
    to: "Jaipur",
    departureTime: "23:24",
    arrivalTime: "21:24",
    price: 3103,
    date: "2025-06-30"
  },
  {
    airline: "Lufthansa",
    from: "Kolkata",
    to: "Goa",
    departureTime: "05:53",
    arrivalTime: "08:03",
    price: 8512,
    date: "2025-07-08"
  },
  {
    airline: "SpiceJet",
    from: "Mumbai",
    to: "Bangalore",
    departureTime: "06:28",
    arrivalTime: "18:53",
    price: 14718,
    date: "2025-06-26"
  },
  {
    airline: "SpiceJet",
    from: "Bangalore",
    to: "Chennai",
    departureTime: "05:23",
    arrivalTime: "20:14",
    price: 6823,
    date: "2025-07-01"
  },
  {
    airline: "SpiceJet",
    from: "Pune",
    to: "Chennai",
    departureTime: "06:20",
    arrivalTime: "06:58",
    price: 14246,
    date: "2025-06-29"
  },
  {
    airline: "SpiceJet",
    from: "Kolkata",
    to: "Hyderabad",
    departureTime: "00:34",
    arrivalTime: "04:17",
    price: 9736,
    date: "2025-07-15"
  },
  {
    airline: "IndiGo",
    from: "Goa",
    to: "Kolkata",
    departureTime: "05:54",
    arrivalTime: "08:58",
    price: 5128,
    date: "2025-07-14"
  },
  {
    airline: "Vistara",
    from: "Mumbai",
    to: "Hyderabad",
    departureTime: "07:42",
    arrivalTime: "05:21",
    price: 13721,
    date: "2025-07-15"
  },
  {
    airline: "Vistara",
    from: "Delhi",
    to: "Jaipur",
    departureTime: "07:33",
    arrivalTime: "12:20",
    price: 7237,
    date: "2025-07-12"
  },
  {
    airline: "British Airways",
    from: "Kolkata",
    to: "Hyderabad",
    departureTime: "06:51",
    arrivalTime: "03:41",
    price: 14961,
    date: "2025-07-10"
  },
  {
    airline: "SpiceJet",
    from: "Pune",
    to: "Ahmedabad",
    departureTime: "07:47",
    arrivalTime: "01:29",
    price: 13780,
    date: "2025-07-01"
  },
  {
    airline: "Vistara",
    from: "Mumbai",
    to: "Goa",
    departureTime: "12:05",
    arrivalTime: "03:20",
    price: 8774,
    date: "2025-07-13"
  },
  {
    airline: "Emirates",
    from: "Hyderabad",
    to: "Kolkata",
    departureTime: "12:45",
    arrivalTime: "20:38",
    price: 5057,
    date: "2025-07-10"
  },
  {
    airline: "Qatar Airways",
    from: "Chennai",
    to: "Goa",
    departureTime: "02:24",
    arrivalTime: "02:27",
    price: 14778,
    date: "2025-07-02"
  },
  {
    airline: "GoAir",
    from: "Pune",
    to: "Ahmedabad",
    departureTime: "22:37",
    arrivalTime: "03:54",
    price: 6087,
    date: "2025-07-05"
  },
  {
    airline: "IndiGo",
    from: "Kolkata",
    to: "Bangalore",
    departureTime: "04:53",
    arrivalTime: "18:00",
    price: 7810,
    date: "2025-07-01"
  },
  {
    airline: "British Airways",
    from: "Jaipur",
    to: "Mumbai",
    departureTime: "13:13",
    arrivalTime: "00:22",
    price: 10600,
    date: "2025-07-12"
  },
  {
    airline: "IndiGo",
    from: "Kolkata",
    to: "Chennai",
    departureTime: "13:07",
    arrivalTime: "05:25",
    price: 11194,
    date: "2025-06-28"
  },
  {
    airline: "Singapore Airlines",
    from: "Mumbai",
    to: "Chennai",
    departureTime: "11:26",
    arrivalTime: "04:48",
    price: 9716,
    date: "2025-06-30"
  },
  {
    airline: "SpiceJet",
    from: "Pune",
    to: "Ahmedabad",
    departureTime: "14:08",
    arrivalTime: "16:15",
    price: 4492,
    date: "2025-07-10"
  },
  {
    airline: "GoAir",
    from: "Goa",
    to: "Kolkata",
    departureTime: "03:52",
    arrivalTime: "11:49",
    price: 6785,
    date: "2025-06-26"
  },
  {
    airline: "Emirates",
    from: "Hyderabad",
    to: "Pune",
    departureTime: "14:24",
    arrivalTime: "20:27",
    price: 10018,
    date: "2025-07-13"
  },
  {
    airline: "Vistara",
    from: "Kolkata",
    to: "Delhi",
    departureTime: "21:15",
    arrivalTime: "15:07",
    price: 10259,
    date: "2025-07-01"
  },
  {
    airline: "Singapore Airlines",
    from: "Jaipur",
    to: "Ahmedabad",
    departureTime: "16:50",
    arrivalTime: "02:20",
    price: 8173,
    date: "2025-07-12"
  },
  {
    airline: "Air India",
    from: "Chennai",
    to: "Hyderabad",
    departureTime: "21:10",
    arrivalTime: "20:11",
    price: 8615,
    date: "2025-07-15"
  },
  {
    airline: "SpiceJet",
    from: "Mumbai",
    to: "Pune",
    departureTime: "21:57",
    arrivalTime: "23:32",
    price: 6670,
    date: "2025-06-30"
  },
  {
    airline: "IndiGo",
    from: "Pune",
    to: "Delhi",
    departureTime: "09:33",
    arrivalTime: "05:14",
    price: 9813,
    date: "2025-07-03"
  },
  {
    airline: "GoAir",
    from: "Hyderabad",
    to: "Mumbai",
    departureTime: "17:45",
    arrivalTime: "15:03",
    price: 5117,
    date: "2025-06-27"
  },
  {
    airline: "GoAir",
    from: "Hyderabad",
    to: "Delhi",
    departureTime: "16:59",
    arrivalTime: "14:35",
    price: 4551,
    date: "2025-07-07"
  },
  {
    airline: "Lufthansa",
    from: "Delhi",
    to: "Jaipur",
    departureTime: "02:56",
    arrivalTime: "10:22",
    price: 12278,
    date: "2025-06-29"
  },
  {
    airline: "Vistara",
    from: "Jaipur",
    to: "Hyderabad",
    departureTime: "12:10",
    arrivalTime: "14:55",
    price: 14493,
    date: "2025-07-04"
  },
  {
    airline: "Qatar Airways",
    from: "Bangalore",
    to: "Goa",
    departureTime: "10:34",
    arrivalTime: "18:53",
    price: 5473,
    date: "2025-07-13"
  },
  {
    airline: "Singapore Airlines",
    from: "Pune",
    to: "Kolkata",
    departureTime: "02:20",
    arrivalTime: "03:08",
    price: 14669,
    date: "2025-07-02"
  },
  {
    airline: "Air India",
    from: "Chennai",
    to: "Kolkata",
    departureTime: "14:38",
    arrivalTime: "07:28",
    price: 4344,
    date: "2025-07-02"
  },
  {
    airline: "British Airways",
    from: "Bangalore",
    to: "Goa",
    departureTime: "09:27",
    arrivalTime: "03:49",
    price: 7523,
    date: "2025-06-27"
  },
  {
    airline: "SpiceJet",
    from: "Goa",
    to: "Chennai",
    departureTime: "08:32",
    arrivalTime: "04:55",
    price: 3069,
    date: "2025-07-09"
  },
  {
    airline: "IndiGo",
    from: "Delhi",
    to: "Pune",
    departureTime: "12:39",
    arrivalTime: "05:02",
    price: 14531,
    date: "2025-06-26"
  },
  {
    airline: "Qatar Airways",
    from: "Delhi",
    to: "Hyderabad",
    departureTime: "18:10",
    arrivalTime: "14:30",
    price: 6609,
    date: "2025-06-26"
  },
  {
    airline: "Air India",
    from: "Ahmedabad",
    to: "Chennai",
    departureTime: "05:59",
    arrivalTime: "23:40",
    price: 8150,
    date: "2025-07-13"
  },
  {
    airline: "Singapore Airlines",
    from: "Hyderabad",
    to: "Delhi",
    departureTime: "19:26",
    arrivalTime: "14:32",
    price: 11304,
    date: "2025-06-29"
  },
  {
    airline: "Vistara",
    from: "Delhi",
    to: "Goa",
    departureTime: "18:09",
    arrivalTime: "14:43",
    price: 4339,
    date: "2025-07-04"
  },
  {
    airline: "Air India",
    from: "Goa",
    to: "Bangalore",
    departureTime: "13:01",
    arrivalTime: "09:42",
    price: 7363,
    date: "2025-07-09"
  },
  {
    airline: "Vistara",
    from: "Ahmedabad",
    to: "Mumbai",
    departureTime: "10:36",
    arrivalTime: "16:06",
    price: 5478,
    date: "2025-07-01"
  },
  {
    airline: "IndiGo",
    from: "Ahmedabad",
    to: "Bangalore",
    departureTime: "22:59",
    arrivalTime: "01:12",
    price: 2826,
    date: "2025-07-05"
  },
  {
    airline: "Emirates",
    from: "Goa",
    to: "Kolkata",
    departureTime: "09:19",
    arrivalTime: "19:41",
    price: 8827,
    date: "2025-06-30"
  },
  {
    airline: "SpiceJet",
    from: "Chennai",
    to: "Bangalore",
    departureTime: "03:05",
    arrivalTime: "11:56",
    price: 4153,
    date: "2025-07-06"
  },
  {
    airline: "GoAir",
    from: "Kolkata",
    to: "Delhi",
    departureTime: "11:16",
    arrivalTime: "08:09",
    price: 4299,
    date: "2025-06-25"
  },
  {
    airline: "Lufthansa",
    from: "Hyderabad",
    to: "Kolkata",
    departureTime: "23:34",
    arrivalTime: "07:50",
    price: 4437,
    date: "2025-07-09"
  },
  {
    airline: "Qatar Airways",
    from: "Hyderabad",
    to: "Ahmedabad",
    departureTime: "22:02",
    arrivalTime: "22:32",
    price: 5352,
    date: "2025-06-27"
  },
  {
    airline: "British Airways",
    from: "Bangalore",
    to: "Goa",
    departureTime: "18:52",
    arrivalTime: "21:54",
    price: 14763,
    date: "2025-07-04"
  },
  {
    airline: "British Airways",
    from: "Pune",
    to: "Hyderabad",
    departureTime: "07:11",
    arrivalTime: "03:11",
    price: 8016,
    date: "2025-07-06"
  },
  {
    airline: "British Airways",
    from: "Hyderabad",
    to: "Ahmedabad",
    departureTime: "17:28",
    arrivalTime: "00:00",
    price: 3618,
    date: "2025-06-26"
  },
  {
    airline: "Singapore Airlines",
    from: "Chennai",
    to: "Bangalore",
    departureTime: "00:24",
    arrivalTime: "20:35",
    price: 11669,
    date: "2025-07-04"
  },
  {
    airline: "IndiGo",
    from: "Delhi",
    to: "Goa",
    departureTime: "13:00",
    arrivalTime: "05:10",
    price: 14720,
    date: "2025-06-25"
  },
  {
    airline: "Vistara",
    from: "Hyderabad",
    to: "Kolkata",
    departureTime: "07:18",
    arrivalTime: "08:27",
    price: 7688,
    date: "2025-07-02"
  },
  {
    airline: "Lufthansa",
    from: "Mumbai",
    to: "Bangalore",
    departureTime: '12:24',
    arrivalTime: "14:53",
    price: 6177,
    date: "2025-07-14"
  }
];

export const sampleBookings = (userIds, flightIds) => [
  {
    user: userIds[1],
    flight: flightIds[0],
    bookingDate: "2025-06-20",
    status: "confirmed"
  },
  {
    user: userIds[2],
    flight: flightIds[1],
    bookingDate: "2025-06-21",
    status: "cancelled"
  }
];
