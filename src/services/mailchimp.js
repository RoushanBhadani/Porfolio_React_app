import axios from "axios";

const API_KEY = "5d87d6b205b72746539471168acc9ed1-us13";
const SERVER_PREFIX = "us13";
const AUDIENCE_ID = "9bbc161d86";

export const subscribeToMailchimp = async (email) => {
  try {
    const response = await axios.post(
      `https://${SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
      {
        email_address: email,
        status: "subscribed",
      },
      {
        headers: {
          Authorization: `apikey ${API_KEY}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Mailchimp error:", error.response?.data || error.message);
    throw error;
  }
};
