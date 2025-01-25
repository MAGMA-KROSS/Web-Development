import React, { useState, useEffect } from "react";

function Task(props) {
  const [isVisible, setIsVisible] = useState(() => {
    return JSON.parse(localStorage.getItem(`task-${props.Sno}`)) || false;
  });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    localStorage.setItem(`task-${props.Sno}`, JSON.stringify(isVisible));
  }, [isVisible]);

  const getPriorityDot = (priority) => {
    let color = "";
    if (priority === "High") color = "red";
    else if (priority === "Medium") color = "yellow";
    else if (priority === "Low") color = "#008000";

    return (
      <svg width="20" height="20" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill={color} />
      </svg>
    );
  };

  return (
    <div className="Task bg-purple-100 text-gray-600 items-center flex gap-[12px] h-[42px]">
      <p className="w-[8%] text-center">{props.Sno}</p>
      <p className="w-[45%] text-center">{props.Task}</p>
      <p className="w-[20%] text-center">{props.CompletionDate}</p>

      <div className="w-[10%] text-center flex justify-center">
        {getPriorityDot(props.Priority)}
      </div>

      <p className="w-[15%] text-center">{props.Category}</p>

      <div className="w-[15%] text-center flex justify-center">
        <div
          style={{
            boxShadow: isHovered
              ? "0 0 10px 1px rgba(0, 191, 255, 0.5)"
              : "none",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="h-[24px] w-[24px] border-gray-600 border flex justify-center items-center"
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible && (
            <svg
              className="tick"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="green"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}

export default Task;
