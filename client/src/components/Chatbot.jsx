import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
    const [message, setMessage] = useState("");
    const [response, setResponse] = useState("");

    const handleSendMessage = async () => {
        if (!message.trim()) return;
        try {
            const res = await axios.post("http://localhost:8080/api/chatbot/", { message });
            setResponse(res.data.reply);
        } catch (error) {
            console.error("Chatbot error", error);
            setResponse("Oops! Something went wrong.");
        }
    };

    return (
        <div style={{
            padding: "20px",
            maxWidth: "400px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            backgroundColor: "#f9f9f9",
            textAlign: "center",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
        }}>
            <h2>Fitness Bot</h2>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask something..."
                style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />
            <button 
                onClick={handleSendMessage} 
                style={{ padding: "10px 15px", cursor: "pointer", background: "#007bff", color: "#fff", border: "none", borderRadius: "5px" }}>
                Send
            </button>
            {response && <p style={{ marginTop: "10px" }}>Bot: {response}</p>}
        </div>
    );
};

export default Chatbot;
