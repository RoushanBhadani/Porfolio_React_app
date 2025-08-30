import { useState } from "react";
import { subscribeToMailchimp } from "../services/mailchimp";

const SubscriptionForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await subscribeToMailchimp(email);
      setStatus("success");
      setEmail("");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <>
    <h5 className="mb-6" style={{fontSize:"1.5rem", fontWeight:"600"}}>Get the Latest Updates</h5>
    <div className="subscription-form mb-7">
        
      <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"row"}}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button type="submit">Subscribe</button>
      </form>
      {status === "success" && <p>Subscribed successfully!</p>}
      {status === "error" && <p>Something went wrong. Try again.</p>}
    </div>
    </>
  );
};

export default SubscriptionForm;
