import axios from "axios";

const API_KEY = "97eba645f2ce17f2ce95574c0ee00f54-us13";
const SERVER_PREFIX = "us13";
const AUDIENCE_ID = "9bbc161d86";

export const subscribeToMailchimp = async (firstName,email) => {
  try {
    const response = await axios.post(
      `https://${SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
        },
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
