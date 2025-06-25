const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); // Put this key in .env

exports.createCheckoutSession = async (req, res) => {
  const { flight, formData , totalAmount} = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
     payment_method_types: ["card"]
,     mode: 'payment',
      line_items: [{
        price_data: {
          currency: 'inr',
          product_data: {
            name: `${flight.airline} - ${flight.from} to ${flight.to}`,
          },
          unit_amount:  totalAmount  * 100,
        },
        quantity: 1,
      }],
      
      success_url: "http://localhost:5173/payment?success=true", // ← frontend port
cancel_url: "http://localhost:5173/payment?success=false",

    });

    res.json({ id: session.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Stripe session creation failed." });
  }
};
