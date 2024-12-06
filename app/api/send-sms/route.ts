import twilio from 'twilio';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Check if the request method is POST
  if (req.method === 'POST') {
    // Retrieve Twilio credentials from environment variables
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
    const ownerPhoneNumber = process.env.OWNER_PHONE_NUMBER;

    // Ensure credentials are set
    if (!accountSid || !authToken || !twilioPhoneNumber || !ownerPhoneNumber) {
      return res.status(500).json({ error: 'Twilio credentials are missing in the environment variables.' });
    }

    // Create a Twilio client
    const client = twilio(accountSid, authToken);

    try {
      // Prepare the message content
      const messageContent = `नया संदेश प्राप्त हुआ:
        नाम: ${req.body.message}
      `;

      // Send SMS using Twilio API
      const message = await client.messages.create({
        body: messageContent,       // Message content
        from: twilioPhoneNumber,    // Twilio phone number (sender)
        to: ownerPhoneNumber,       // Web app owner's phone number (receiver)
      });

      // Return success response with message SID
      res.status(200).json({ success: true, messageSid: message.sid });
    } catch (error:any) {
      console.error('Error sending SMS:', error);
      // Return detailed error response
      res.status(500).json({ error: 'Failed to send SMS', details: error.message });
    }
  } else {
    // Return Method Not Allowed error if the method is not POST
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
