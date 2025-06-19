import React from "react";

function Pitch8({
  title = "Competition Analysis",
  subtitle = "Understanding our competitive landscape and market positioning...",
  ourRivals = "Competition analysis data will appear here",
  marketPosition = "Strategic positioning in the market",
  competitiveAdvantages = "Key differentiators and strengths",
  marketShare = "Current and projected market presence"
}) {
 
  console.log("Pitch8 Component Props:", {
    title,
    subtitle,
    ourRivals,
    marketPosition,
    competitiveAdvantages,
    marketShare
  });

  return (
    <div
      style={{
        backgroundColor: "#f0f0f0",
        width: "100%",
        height: "100%",
        padding: "20px",
        fontFamily: "Arial, sans-serif"
      }}>
      <div style={{
        maxWidth: "800px",
        margin: "0 auto",
        backgroundColor: "white",
        borderRadius: "10px",
        padding: "30px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
      }}>
        {/* Header */}
        <div style={{
          textAlign: "center",
          marginBottom: "30px"
        }}>
          <h1 style={{
            color: "#2E86AB",
            fontSize: "2.5rem",
            marginBottom: "10px",
            fontWeight: "bold"
          }}>
            {title}
          </h1>
          <p style={{
            color: "#666",
            fontSize: "1.1rem",
            fontStyle: "italic"
          }}>
            {subtitle}
          </p>
        </div>

        {/* Competition Analysis Content */}
        <div style={{
          backgroundColor: "#f8f9fa",
          padding: "25px",
          borderRadius: "8px",
          border: "2px solid #e9ecef",
          marginBottom: "30px"
        }}>
          <h3 style={{
            color: "#495057",
            marginBottom: "20px",
            fontSize: "1.5rem"
          }}>
            Competitive Landscape
          </h3>
          
          <div style={{
            lineHeight: "1.8",
            fontSize: "1rem",
            color: "#333"
          }}>
            {ourRivals ? (
              <div dangerouslySetInnerHTML={{ __html: ourRivals.replace(/\n/g, '<br/>') }} />
            ) : (
              <p>No competition analysis data available.</p>
            )}
          </div>
        </div>

        {/* Visual Elements */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "30px",
          flexWrap: "wrap"
        }}>
          <div style={{
            flex: "1",
            minWidth: "200px",
            margin: "10px",
            padding: "20px",
            backgroundColor: "#e3f2fd",
            borderRadius: "8px",
            textAlign: "center",
            border: "1px solid #bbdefb"
          }}>
            <h4 style={{ color: "#1976d2", marginBottom: "10px" }}>Market Position</h4>
            <p style={{ color: "#424242" }}>{marketPosition}</p>
          </div>
          
          <div style={{
            flex: "1",
            minWidth: "200px",
            margin: "10px",
            padding: "20px",
            backgroundColor: "#f3e5f5",
            borderRadius: "8px",
            textAlign: "center",
            border: "1px solid #e1bee7"
          }}>
            <h4 style={{ color: "#7b1fa2", marginBottom: "10px" }}>Competitive Advantages</h4>
            <p style={{ color: "#424242" }}>{competitiveAdvantages}</p>
          </div>
          
          <div style={{
            flex: "1",
            minWidth: "200px",
            margin: "10px",
            padding: "20px",
            backgroundColor: "#e8f5e8",
            borderRadius: "8px",
            textAlign: "center",
            border: "1px solid #c8e6c9"
          }}>
            <h4 style={{ color: "#388e3c", marginBottom: "10px" }}>Market Share</h4>
            <p style={{ color: "#424242" }}>{marketShare}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pitch8;
