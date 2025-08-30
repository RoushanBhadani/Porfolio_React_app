import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "7484030370";
  const message = "Hello! I want to connect through your portfolio.";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const buttonStyle = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#25D366",
    color: "white",
    border: "none",
    borderRadius: "50%",
    padding: "14px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
    zIndex: 1000,
    transition: "background-color 0.3s ease",
  };

  const handleMouseOver = (e) => {
    e.currentTarget.style.backgroundColor = "#1ebe5d";
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.backgroundColor = "#25D366";
  };

  return (
    <button
      onClick={handleClick}
      style={buttonStyle}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <FaWhatsapp size={28} />
    </button>
  );
};

export default WhatsAppButton;
