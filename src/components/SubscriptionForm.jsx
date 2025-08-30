import { useState, useEffect } from "react";
import { subscribeToMailchimp } from "../services/mailchimp";

const SubscriptionForm = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [status, setStatus] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await subscribeToMailchimp(firstName, email);
      setStatus("success");
      setEmail("");
      setFirstName("");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <>
      <h5
        className="mb-6"
        style={{ fontSize: "1.5rem", fontWeight: "600" }}
      >
        Get the Latest Updates
      </h5>
      <div className="subscription-form mb-7">
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: "10px",
          }}
        >
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter first name"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <button type="submit">
            Subscribe
          </button>
        </form>

        {status === "success" && <p>Subscribed successfully!</p>}
        {status === "error" && <p>Something went wrong. Try again.</p>}
      </div>
    </>
  );
};

export default SubscriptionForm;
