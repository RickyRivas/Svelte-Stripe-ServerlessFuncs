const express = require("express");
const serverless = require("serverless-http");
const app = express();
const stripe = require("stripe")(
  "sk_test_51KHf12AC31TQrdAWF4dtXXzd1DuI26OpkShLsQwCwENmYb4GB1PhX6utzbGb4dgFCNBj9oBQ4YxM4zr14rvTMN2700UBybxiqz"
);

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
