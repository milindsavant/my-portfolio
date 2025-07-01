import React, { useState, useEffect } from "react";

const TextChange = () => {
  const prefix = "Hi, ";
  const dynamicTexts = ["I'm Milind", "I'm Developer"];
  const [displayText, setDisplayText] = useState(prefix);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    const currentText = dynamicTexts[textIndex];

    if (!isDeleting && subIndex === currentText.length) {
      setTimeout(() => setIsDeleting(true), 1000);
      return;
    }

    if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % dynamicTexts.length);
      return;
    }

    const timeout = setTimeout(() => {
      const updatedSubIndex = isDeleting ? subIndex - 1 : subIndex + 1;
      setSubIndex(updatedSubIndex);
      setDisplayText(prefix + currentText.substring(0, updatedSubIndex));
    }, speed);

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, textIndex]);

  return (
    <h1 className="text-5xl font-bold transition-all duration-300 ease-in-out">
      {displayText}
    </h1>
  );
};

export default TextChange;
