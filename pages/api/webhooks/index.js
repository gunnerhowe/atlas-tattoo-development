import Stripe from 'stripe';
import { buffer } from 'micro';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const config = {
  api: {
    bodyParser: false,
  },
};

const loadIt = async (file) => {

    var toAdd = {
      created: file.created,
      email: file.email,
      name: file.name,
      payment_id: file.payment_id,
      credits: file.credits,
    };

    const newData = await fetch(`/api/storeCredits?created=${toAdd.created}&email=${toAdd.email}&name=${toAdd.name}&payment_id=${toAdd.payment_id}`);
    const res = await newData.json();
    console.log(res);
    };

export default async function handler(req, res) {

  if (req.method === 'POST') {
    let event;

    try {
      // 1. Retrieve the event by verifying the signature using the raw body and secret
      const rawBody = await buffer(req);
      const signature = req.headers['stripe-signature'];

      event = stripe.webhooks.constructEvent(
        rawBody.toString(),
        signature,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.log(`❌ Error message: ${err.message}`);
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    // Successfully constructed event
    console.log('✅ Success:', event.id);

    // 2. Handle event type (add business logic here)
    if (event.type === 'checkout.session.completed') {
      console.log(`💰  Payment received!`);

      if (event.data.object.amount_total = 500) {
        //$5 = 1 Credit
        var file = {
          created: event.created,
          email: event.data.object.email,
          name: event.data.object.name,
          payment_id: event.id,
          credits: 1,
        };
        loadIt(file);

      } if (event.data.object.amoun_total = 2400) {
        //$24 = 5 Credits
        var file = {
          created: event.created,
          email: event.data.object.email,
          name: event.data.object.name,
          payment_id: event.id,
          credits: 5,
        };
        loadIt(file);

      } if (event.data.object.amount_total = 4500) {
        //$45 = 10 Credits
        var file = {
          created: event.created,
          email: event.data.object.email,
          name: event.data.object.name,
          payment_id: event.id,
          credits: 10,
        };
        loadIt(file);

      } if (event.data.object.amount_total = 7500) {
      //$75 = 25 Credits
      var file = {
        created: event.created,
        email: event.data.object.email,
        name: event.data.object.name,
        payment_id: event.id,
        credits: 25,
      };
      loadIt(file);

      } if (event.data.object.amount_total = 20000) {
        //$200 = 50 Credits
        var file = {
          created: event.created,
          email: event.data.object.email,
          name: event.data.object.name,
          payment_id: event.id,
          credits: 50,
        };
        loadIt(file);

      } if (event.data.object.amount_total = 30000) {
        //$300 = 100 Credits
        var file = {
          created: event.created,
          email: event.data.object.email,
          name: event.data.object.name,
          payment_id: event.id,
          credits: 100,
        };
        loadIt(file);
      }
    } else {
      console.warn(`🤷‍♀️ Unhandled event type: ${event.type}`);
    }

    // 3. Return a response to acknowledge receipt of the event.
    res.json({ received: true });
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}