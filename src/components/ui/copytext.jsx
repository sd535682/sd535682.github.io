import { useState } from "react";

function CopyTextComponent() {
  const [copied, setCopied] = useState(false);
  const textToCopy = "sd535682@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div>
      <button onClick={handleCopy}>
        {copied ? (
          <i className="fa-solid fa-copy"></i>
        ) : (
          <i className="fa-regular fa-copy"></i>
        )}
      </button>
    </div>
  );
}

export default CopyTextComponent;
