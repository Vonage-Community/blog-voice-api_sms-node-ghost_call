# Blog Tutorial: Ghost Call Trigger with Vonage Voice and SMS API

This project demonstrates how to set up a system using the Vonage Voice API to receive a "ghost call" by sending an SMS to a virtual number. Extract yourself from an awkward situation discreetly.

## Features

- **Receive SMS:** Listens for incoming SMS messages to a Vonage virtual number.
- **Trigger Call:** Automatically triggers an outbound call in response to the SMS.
- **Customizable Call Flow:** Supports both simple and dynamic call flows using NCCO (Nexmo Call Control Objects).

## Prerequisites

Before you begin, ensure you have:

- A Vonage API account. Sign up [here](https://dashboard.nexmo.com/sign-up) if you haven't already.
- Node.js and npm installed. [Download here](https://nodejs.org/en/download/).
- Ngrok for creating a secure tunnel to your localhost. [Download and set up instructions](https://ngrok.com/download).
- Basic knowledge of JavaScript and Node.js.

## Getting Started

### Setting Up the Environment

1. **Clone the Repository:**

2. **Install Dependencies:**

   ```sh
   npm install
   ```

3. **Configure Environment Variables:**

   Rename `.env.example` to `.env` and fill in your Vonage API credentials and other necessary details.

### Running the Application

1. **Start the Local Server:**

   ```sh
   node index.js
   ```

2. **Expose the Server using Ngrok:**

   In a new terminal, run:

   ```sh
   ngrok http 3000
   ```

3. **Update Webhook URLs:**

   Use the HTTPS URL provided by Ngrok to update your SMS webhook URL in the Vonage Dashboard.

4. **Send an SMS:**

   Send an SMS to your Vonage virtual number to trigger the ghost call.

## Usage

The application is designed to be straightforward:

- **Send an SMS to your Vonage number:** The content of the SMS can be anything.
- **Receive a Call:** The number you used to send the SMS will receive a call with either a predefined message or a dynamic response based on NCCO.

## Customization

You can customize the call response by editing the NCCO in the `index.js` file or by modifying the JSON file at the `ANSWER_URL`.

## Support

For any queries or issues, please open an issue on this repository, or reach out on the [Vonage Developer Community Slack](https://developer.vonage.com/en/community/slack).
