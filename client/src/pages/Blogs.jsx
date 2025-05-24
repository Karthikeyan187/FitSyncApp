import React from "react";

const Blogs = () => {
  const containerStyle = {
    textAlign: "center",
    padding: "20px",
  };

  const blogListStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
  };

  const blogItemStyle = {
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

  const linkStyle = {
    textDecoration: "none",
    color: "blue",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyle}>
      <h1>🏋️‍♂️ Fitness Blogs</h1>
      <p>Stay updated with the latest fitness trends, workout tips, and health advice.</p>

      <div style={blogListStyle}>
        <div style={blogItemStyle}>
          <h2 style={titleStyle}>🔥 10 Best Exercises for a Full-Body Workout</h2>
          <p style={textStyle}>Discover the top 10 exercises that can help you stay fit and build strength effectively.</p>
          <a 
            href="https://www.healthline.com/health/fitness-exercise/10-best-exercises-everyday" 
            style={linkStyle} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Read More
          </a>
        </div>

        <div style={blogItemStyle}>
          <h2 style={titleStyle}>🥗 Healthy Eating: A Guide to Nutrition</h2>
          <p style={textStyle}>Learn how to balance your diet with proteins, carbs, and fats for better fitness results.</p>
          <a 
            href="https://www.healthline.com/nutrition/how-to-eat-healthy-guide" 
            style={linkStyle} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Read More
          </a>
        </div>

        <div style={blogItemStyle}>
          <h2 style={titleStyle}>⏳ 30-Minute Workouts for Busy People</h2>
          <p style={textStyle}>Short on time? These quick workouts will keep you in shape without taking up your day.</p>
          <a 
            href="https://www.planetfitness.com/community/articles/30-minute-morning-workout-routine-you-can-squeeze-work" 
            style={linkStyle} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
