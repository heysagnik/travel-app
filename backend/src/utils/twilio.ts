import twilio from "twilio";
import dotenv from "dotenv";
dotenv.config();

export const sendSMS = async (phone: string, message: string) => {
  try {
    // @ts-ignore
    const client = new twilio(process.env.ACC_SID, process.env.AUTH_TOKEN);

    const response = await client.messages.create({
      body: message,
      from: process.env.NUMBER,
      to: phone,
    });

    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

// sendSMS("+917003080062", "Hello from Twilio");
