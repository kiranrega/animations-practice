import React, { useState } from "react";

export default function StarRating({ maxStars = 5, filledStars = 0 }: { maxStars?: number; filledStars?: number }) {
  const [selectedStars, setSelectedStars] = useState(filledStars);
  const [hoveredStars, setHoveredStars] = useState(0);

  const handleMouseEnter = (index:number) => {
    setHoveredStars(index);
  };

  const handleMouseLeave = () => {
    setHoveredStars(0);
  };

  const handleClick = (index:number) => {
    setSelectedStars(index);
  };

  return (
    <div
      style={{ display: "flex", cursor: "pointer", gap: "6px" }}
      onMouseLeave={handleMouseLeave}
    >
      {[...Array(maxStars)].map((_, index) => {
        const starNumber = index + 1;
        const isFilled =
          hoveredStars >= starNumber ||
          (!hoveredStars && selectedStars >= starNumber);
        return (
          <div
            key={starNumber}
            onMouseEnter={() => handleMouseEnter(starNumber)}
            onClick={() => handleClick(starNumber)}
          >
            {isFilled ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="star-icon star-icon-filled"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="star-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            )}
          </div>
        );
      })}
    </div>
  );
}
