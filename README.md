# Flight Booking Website Documentation

**Team ID:** LTVIP2025TMID58532  
**Project Title:** Flight finder: navigating your air travel options  
✈️ **Flight Booking Website**

## 📹 Demo Links
- **Demo Link:** [View Demo](https://drive.google.com/file/d/1ZmkUTuRu-FvLU7QLDUgFpDC8S7dyrfRe/view?usp=drive_link)
- **Documentation Link:** [View Documentation](https://drive.google.com/drive/folders/1d4kEASLJ-vRd400rNTUbIl0Xy9b3739W?usp=drive_link)

## 🔍 Overview
A full-stack flight booking platform where users can:
- Search and book one-way or round-trip flights
- Select seats per flight
- Make secure payments via Stripe
- Receive downloadable e-tickets (PDF)
- View bookings in their profile
- Admin can manage flights, users, and view statistics

## 🛠️ Tech Stack
- **Frontend:** React.js, React Router DOM
- **Styling:** CSS, Tailwind (optional), Icons
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Auth:** JWT, bcrypt
- **Payment:** Stripe
- **PDF:** pdfkit (Node.js library)

## 🌟 Features

### User Features
- Flight search by source, destination, date
- Round-trip support with seat selection
- Live seat availability tracking
- Stripe payment integration
- E-ticket PDF generation and download
- View past bookings

### Admin Features
- Admin login
- Flight CRUD operations
- View all bookings
- Admin dashboard with statistics

## 📁 Folder Structure (Simplified)
project-root/
├── client/                  # React frontend
│   ├── components/          # Reusable components
│   ├── pages/               # Route-level pages
│   ├── App.js
│   └── index.js
│
├── server/                  # Node backend
│   ├── controllers/         # Route logic
│   ├── models/              # MongoDB schemas
│   ├── routes/              # Express endpoints
│   ├── middleware/          # Auth & error handling
│   └── index.js             # Server entry
│
├── .env                     # Environment config

Copy

## 🎨 Frontend Details
- `Home.js` - Search UI for flights
- `BookingPage.js` - Booking form
- `SelectSeats.js` - Select seats for both flights
- `PaymentPage.js` - Stripe payment handler
- `MyBookings.js` - View & download booked tickets
- `AdminDashboard.js` - Admin stats and flight management

## 🔧 Backend Details
**Key Routes:**
- `/api/auth/login`, `/register`
- `/api/flights` (CRUD)
- `/api/bookings` (POST/GET)
- `/api/seats` (availability)
- `/api/admin/stats` (dashboard)

## 🗃️ Database Models

### User
```json
{
  "name": "String",
  "email": "String",
  "password": "String",
  "role": { "type": "String", "enum": ["user", "admin"], "default": "user" }
}
```
### Flight
```json
Copy
{
  "airline": "String",
  "from": "String",
  "to": "String",
  "departureTime": "Date",
  "arrivalTime": "Date",
  "travelClass": ["Economy", "Business"],
  "price": "Number",
  "seats": { "economy": "Number", "business": "Number" }
}
```
### Booking
```json
Copy
{
  "userId": "ObjectId",
  "flightId": "ObjectId",
  "seatNumbers": ["String"],
  "paymentStatus": "String",
  "roundTrip": "Boolean",
  "returnFlightId": "ObjectId",
  "ticketPdfUrl": "String"
}
```
### Middleware:
- authMiddleware - Verifies JWT
- errorMiddleware - Global error handler
### 🔐 Auth System
- JWT-based login with access control
- Passwords hashed with bcrypt
- Protected routes for admin access
### 💳 Payment Integration
- Stripe Checkout used for payment
- Once payment succeeds:
- Booking data is stored
- Ticket PDF is generated
### 📄 PDF Ticket Generation
On booking success, a PDF is generated using pdfkit
Contains:
- Flight info
- Passenger details
- Seat numbers
- Booking reference
- Available for download from "My Bookings"
### 🚀 Deployment
DB: MongoDB Atlas
.env Example:
```
MONGO_URI=<Your MongoDB URI>
JWT_SECRET=<Your JWT secret>
STRIPE_SECRET_KEY=<Stripe Key>
CLIENT_URL=http://localhost:3000
```
### 🎬 Demo Instructions
Set up environment variables

Create a .env file in /server and /client (if needed)
Install dependencies
```
Copy
cd server && npm install
cd ../client && npm install
Run locally
```
```
Copy
cd server && npm run dev
cd ../client && npm start
```
### 🔮 Future Improvements
- Flight filters (duration, airline, stops)
- Email ticket confirmations
- Mobile responsive redesign
- Admin notifications
- Chat support
### 👨‍💼 Contributors
- Koduru Satheesh Gnani Jaswanth
- Macha Raja Nandini
- Koneti Harshini
- Kummetha Teja Sree
- Sneha Agarwal
