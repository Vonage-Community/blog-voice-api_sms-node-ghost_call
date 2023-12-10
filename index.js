// Import dependencies
require('dotenv').config();
const express = require('express');
const { Vonage } = require('@vonage/server-sdk');
const { NCCOBuilder, Talk, OutboundCallWithNCCO } = require('@vonage/voice');

// Create Express app
const app = express();

// Parse request body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Create Vonage API client
const vonage = new Vonage({
  apiKey: process.env.VONAGE_KEY,
  apiSecret: process.env.VONAGE_SECRET,
  applicationId: process.env.VONAGE_APPLICATION_ID,
  privateKey: './private.key'
});

// Handle inbound SMS
app.post('/inbound', (req, res) => {
  const { from, text } = req.body;
  console.log({ from, text });

  // Phone number of SMS sender 
  const requesterNumber = from;

  // Make outbound call without NCCO
  const ANSWER_URL = 'https://raw.githubusercontent.com/nexmo-community/ncco-examples/gh-pages/text-to-speech.json'

  vonage.voice.createOutboundCall({
    to: [{
      type: 'phone',
      number: requesterNumber
    }],
    from: {
      type: 'phone',
      number: process.env.FROM_IMPORTANT_FRIEND
    },
    answer_url: [ANSWER_URL]
  })
    .then(resp => console.log(resp))
    .catch(err => console.error(err));

  // Make outbound call with NCCO
  async function makeCall() {
    const builder = new NCCOBuilder();
    builder.addAction(new Talk('Hey! I am really sorry to bother but I need your help as soon as possible!'));

    const resp = await vonage.voice.createOutboundCall(
      new OutboundCallWithNCCO(
        builder.build(),
        { type: 'phone', number: requesterNumber },
        { type: 'phone', number: process.env.FROM_IMPORTANT_FRIEND }
      )
    );

    console.log({ resp });
  }

  makeCall();
});

// Listen on port
app.listen(3000, () => {
  console.log('App listening on port 3000');
});