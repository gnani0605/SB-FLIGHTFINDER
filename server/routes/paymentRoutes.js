// routes/paymentRoutes.js
const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

router.post("/create-checkout-session", async (req, res) => {
const { flight, formData, totalAmount } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: [
        "card"
      ],
      line_items: [{
        price_data: {
          currency: "inr",
          product_data: {
            name: `Flight: ${flight.airline} (${flight.from} → ${flight.to})`,
          },
          unit_amount: totalAmount * 100, // amount in paisa
        },
        quantity: 1,
      }],
      mode: "payment",
      customer_email: formData.email, // optional but good to pre-fill
      success_url: `http://localhost:3000/payment?success=true&bookingId=${req.body.bookingId}`,
  cancel_url: "http://localhost:3000/payment?success=false",
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error("Stripe Checkout error:", error);
    res.status(500).json({ error: "Unable to create checkout session" });
  }
});

module.exports = router;
