import { useRef, useEffect, useState } from "react";

const TechMultiSelect = ({ options, selectedOptions, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleOption = (option) => {
    if (selectedOptions.includes(option)) {
      onChange(selectedOptions.filter((item) => item !== option));
    } else {
      onChange([...selectedOptions, option]);
    }
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button
        type="button"
        className="form-control d-flex justify-content-between align-items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOptions.length > 0
          ? selectedOptions.join(", ")
          : "Select Technologies"}
        <span className="ms-2">&#x25BC;</span>
      </button>

      {isOpen && (
        <div
          className="dropdown-menu show p-2"
          style={{
            position: "absolute",
            width: "100%",
            maxHeight: "200px",
            overflowY: "auto",
            zIndex: 9999,
            border: "1px solid #ccc",
            borderRadius: "6px",
            backgroundColor: "#fff",
          }}
        >
          {options.map((option, i) => (
            <div className="form-check" key={i}>
              <input
                className="form-check-input"
                type="checkbox"
                id={`tech-${i}`}
                checked={selectedOptions.includes(option)}
                onChange={() => toggleOption(option)}
              />
              <label className="form-check-label" htmlFor={`tech-${i}`}>
                {option}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TechMultiSelect;
