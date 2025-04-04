import React, { useEffect, useRef } from "react";

const AdSense = ({ adSlot, format = "auto", responsive = true, style = {} }) => {
  const adRef = useRef(null);
  
  useEffect(() => {
    try {
      if (window) {
        const isLocalhost = 
          window.location.hostname === "localhost" || 
          window.location.hostname === "127.0.0.1";
        
        if (isLocalhost) {
          console.log("AdSense ads don't display on localhost. Will be visible on production.");
          return;
        }
        
        // Check if adsbygoogle is loaded
        if (!window.adsbygoogle) {
          console.error("AdSense not loaded - check for ad blockers or script loading issues");
          return;
        }
        
        // Debug info
        console.log(`Attempting to load ad in slot: ${adSlot}`);
        
        // Push the ad
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        
        // Monitor for potential ad loading issues
        setTimeout(() => {
          if (adRef.current && adRef.current.innerHTML.trim() === '') {
            console.log(`Ad slot ${adSlot} may not have loaded properly. Common reasons: account not approved, domain not verified, or ad blockers`);
          }
        }, 2000);
      }
    } catch (error) {
      console.error("AdSense error:", error);
    }
  }, [adSlot]);

  return (
    <div className="ad-container" style={{ overflow: "hidden", margin: "20px 0", position: "relative", ...style }}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{
          display: "block",
          overflow: "hidden",
          minHeight: "90px",
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