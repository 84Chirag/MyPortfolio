import React, { useEffect } from "react";

const AdSense = ({ adSlot, format = "auto", responsive = true, style = {} }) => {
  useEffect(() => {
    try {
      // Only add the ad if window and adsbygoogle are defined
      if (window) {
        // For testing in development environment
        const isLocalhost = 
          window.location.hostname === "localhost" || 
          window.location.hostname === "127.0.0.1";
        
        if (isLocalhost) {
          console.log("AdSense ads don't display on localhost. Will be visible on production.");
        }
        
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error("AdSense error:", error);
    }
  }, []);

  return (
    <div className="ad-container" style={{ overflow: "hidden", margin: "20px 0", ...style }}>
      <ins
        className="adsbygoogle"
        style={{
          display: "block",
          overflow: "hidden",
          minHeight: "90px", // Add minimal height so the layout doesn't jump
          background: window?.location.hostname === "localhost" ? "#f0f0f0" : "transparent",
        }}
        data-ad-client="ca-pub-8256012280399885"
        data-ad-slot={adSlot}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      ></ins>
      {window?.location.hostname === "localhost" && (
        <div style={{ 
          position: "absolute", 
          top: "50%", 
          left: "50%", 
          transform: "translate(-50%, -50%)",
          fontSize: "12px",
          color: "#666"
        }}>
          AdSense placeholder (visible on production)
        </div>
      )}
    </div>
  );
};

export default AdSense; 