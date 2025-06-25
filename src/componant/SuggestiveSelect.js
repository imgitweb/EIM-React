import React, { useState, useRef, useEffect } from "react";
import "./SuggestiveSelect.css";

const SuggestiveSelect = ({
  label,
  name,
  value,
  id,
  onChange,
  options,
  placeholder = "Select or type...",
}) => {
  const [searchTerm, setSearchTerm] = useState(value || "");
  const [showDropdown, setShowDropdown] = useState(false);
  const wrapperRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (selectedValue) => {
    onChange({ target: { name, value: selectedValue } });
    setSearchTerm(selectedValue);
    setShowDropdown(false);
  };

  return (
    <div className="dropdown-container" ref={wrapperRef}>
      <label className="dropdown-label" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        type="text"
        className="dropdown-input"
        name={name}
        value={searchTerm}
        placeholder={placeholder}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setShowDropdown(true);
        }}
        onFocus={() => setShowDropdown(true)}
      />
      {showDropdown && (
        <ul className="dropdown-list">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <li
                key={index}
                className="dropdown-item"
                onClick={() => handleSelect(option.value)}>
                {option.label}
              </li>
            ))
          ) : (
            <li className="dropdown-item no-match">No matches found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SuggestiveSelect;
