import React, { useRef, useEffect } from "react";

function ImagePanel({ imgSrc, differences, onFind }) {
  const wrapperRef = useRef(null);

  const handleClick = (e) => {
    const rect = wrapperRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    differences.forEach((diff, index) => {

        const widthPercent = (diff.width / rect.width) * 100;
        const heightPercent = (diff.height / rect.height) * 100;

        const leftBoundary = diff.x - widthPercent / 2;
        const rightBoundary = diff.x + widthPercent / 2;
        const topBoundary = diff.y - heightPercent / 2;
        const bottomBoundary = diff.y + heightPercent / 2

        if (!diff.found &&
            x >= leftBoundary && x <= rightBoundary &&
            y >= topBoundary && y <= bottomBoundary) {
        onFind(index);
      }
    });
  };

  return (
    <div
      className="image-wrapper"
      ref={wrapperRef}
      onClick={handleClick}
    >
      <img src={imgSrc} alt="" className="game-img" />

      {differences.map((diff, idx) =>
        diff.found && (
          <div
            key={idx}
            className="highlight"
            style={{
                left: `calc(${diff.x}% - ${diff.width / 2}px)`,
                top: `calc(${diff.y}% - ${diff.height / 2}px)`,
                width: `${diff.width}px`,
                height: `${diff.height}px`
            }}
          ></div>
        )
      )}
    </div>
  );
}

export default ImagePanel;
