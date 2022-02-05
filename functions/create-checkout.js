const express = require("express");
const serverless = require("serverless-http");
const app = express();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

app.use(express.json());
app.post("/.netlify/functions/create-checkout", async (req, res) => {
  const product = {
    price_data: {
      currency: "usd",
      product_data: {
        name: req.body.title,
        description: req.body.description,
        // images: [req.body.imgs[0]],
      },
      unit_amount: req.body.price,
    },
    // adjustable_quantity: {
    //   enabled: true,
    //   minimum: 1,
    //   maximum: 10,
    // },
    quantity: 1,
  };
  const session = await stripe.checkout.sessions.create({
    line_items: [product],
    mode: "payment",
    success_url: "http://localhost:8080/",
    cancel_url: "http://localhost:8080/",
  });

  res.status(200).send(session);
});

module.exports.handler = serverless(app);
