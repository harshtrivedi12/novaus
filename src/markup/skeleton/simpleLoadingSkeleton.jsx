import React from "react";

function SimpleLoadingSkeleton() {
  const style = {
    pulse: {
      animation: "pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      display: "flex",
      flexDirection: "column",
      gap: "7px",
      alignItems: "center",
    },
    barLarge: {
      height: "10px",
      width: "400px",
      backgroundColor: "#d1d5db",
      borderRadius: "9999px",
      maxWidth: "640px",
      marginBottom: "10px",
      margin: "0 auto",
    },
    barMedium: {
      width: "300px",

      height: "10px",
      backgroundColor: "#d1d5db",
      borderRadius: "9999px",
      maxWidth: "540px",
      margin: "0 auto",
    },
    iconContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "16px",
    },
    icon: {
      width: "32px",
      height: "32px",
      color: "#e5e7eb",
      marginRight: "16px",
    },
    smallBar: {
      width: "80px",
      height: "10px",
      backgroundColor: "#e5e7eb",
      borderRadius: "9999px",
      marginRight: "12px",
    },
    smallerBar: {
      width: "96px",
      height: "8px",
      backgroundColor: "#e5e7eb",
      borderRadius: "9999px",
    },
  };

  return (
    <div role="status" style={style.pulse}>
      <div style={style.barLarge}></div>
      <div style={style.barMedium}></div>
      <div style={style.iconContainer}>
        <svg
          style={style.icon}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
        </svg>
        <div style={style.smallBar}></div>
        <div style={style.smallerBar}></div>
      </div>
    </div>
  );
}

export default SimpleLoadingSkeleton;
