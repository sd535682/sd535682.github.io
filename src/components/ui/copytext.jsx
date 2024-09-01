import { useState } from "react";

// eslint-disable-next-line react/prop-types
function CopyTextComponent({ props }) {
  const [copied, setCopied] = useState(false);
  const textToCopy = props;

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
