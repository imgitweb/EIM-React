import React from "react";

function Pitch12({ fundingRequest }) {
  
  return (
    <div style={{ backgroundColor: "#f0f0f0", width: "100%", height: "100%" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 841.89 473.68"
      >
        <g id="Layer_12">
          {/* Background Rectangles for 4 founders */}
          <path d="M60.08 112.79H229.1v263.78H60.08z" fill="#ddd" />
          <path d="M244.32 112.79h169.02v263.78H244.32z" fill="#ccc" />
          <path d="M428.55 112.79h169.02v263.78H428.55z" fill="#bbb" />
          <path d="M612.79 112.79h169.02v263.78H612.79z" fill="#aaa" />

          {/* Title */}
          <text
            fontSize="24"
            fontWeight="bold"
            x="300"
            y="66"
          >
            Meet the Founders
          </text>

          {/* Dynamic founder data */}
          {fundingRequest?.map((founder, index) => {
            const baseX = 90 + index * 184; // Adjust for spacing
            return (
              <g key={index}>
                <text x={baseX} y={395} fontSize="16" fill="#000">
                  {founder.name}
                </text>
                <text x={baseX} y={414} fontSize="14" fill="#333">
                  {founder.designation}
                </text>
                {founder.image && (
                  <image
                    href={founder.image}
                    x={baseX}
                    y={160}
                    width="100"
                    height="100"
                  />
                )}
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}

export default Pitch12;
