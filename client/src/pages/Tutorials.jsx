import React from "react";

const Tutorials = () => {
  const containerStyle = {
    textAlign: "center",
    padding: "20px",
    overflow: "auto",
  };

  const tutorialListStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
  };

  const tutorialItemStyle = {
    width: "60%",
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "left",
  };

  const titleStyle = {
    fontSize: "20px",
    marginBottom: "10px",
  };

  const textStyle = {
    fontSize: "16px",
    color: "#555",
    marginBottom: "10px",
  };

  const videoStyle = {
    width: "100%",
    borderRadius: "10px",
  };

  return (
    <div style={containerStyle}>
      <h1>📺 Fitness Tutorials</h1>
      <p>Watch fitness tutorials and exercise guides to improve your workouts.</p>

      <div style={tutorialListStyle}>
        <div style={tutorialItemStyle}>
          <h2 style={titleStyle}>🏋️‍♂️ Full-Body Workout for Beginners</h2>
          <p style={textStyle}>Learn simple exercises to strengthen your body.</p>
          <iframe 
            style={videoStyle} 
            height="250" 
            src="https://www.youtube.com/embed/gC_L9qAHVJ8" 
            title="Full-Body Workout"
            allowFullScreen
          ></iframe>
        </div>

        <div style={tutorialItemStyle}>
          <h2 style={titleStyle}>💪 Strength Training for Muscle Growth</h2>
          <p style={textStyle}>Follow this guide to build strength and endurance.</p>
          <iframe 
            style={videoStyle} 
            height="250" 
            src="https://www.youtube.com/embed/U0bhE67HuDY" 
            title="Strength Training"
            allowFullScreen
          ></iframe>
        </div>

        <div style={tutorialItemStyle}>
          <h2 style={titleStyle}>🧘 Yoga for Flexibility & Relaxation</h2>
          <p style={textStyle}>Improve flexibility and reduce stress with these yoga poses.</p>
          <iframe 
            style={videoStyle} 
            height="250" 
            src="https://www.youtube.com/embed/v7AYKMP6rOE" 
            title="Yoga for Beginners"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Tutorials;
