import React, { useState, useRef, useEffect } from "react";
import "./SuggestiveSelect.css";

const SuggestiveSelect = ({
  label,
  name,
  value,
  onChange,
  options,
  placeholder = "Select or type...",
  theme = "light", // default to light if not provided
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

  // Theme-based styles
  const isDark = theme === "dark";
  const themeStyles = {
    container: {
      backgroundColor: isDark ? "#202936" : "#FFFFFF",
      color: isDark ? "#7C8FAC" : "#000000",
    },
    input: {
      backgroundColor: isDark ? "#202936" : "#FFFFFF",
      color: isDark ? "#7C8FAC" : "#000000",
      borderColor: isDark ? "#404d60" : "#ccc",
    },
    list: {
      backgroundColor: isDark ? "#202936" : "#FFFFFF",
      color: isDark ? "#7C8FAC" : "#9A9CA8",
    },
    item: {
      color: isDark ? "#7C8FAC" : "#9A9CA8",
    },
  };

  return (
    <div className="dropdown-container" ref={wrapperRef} style={themeStyles.container}>
      <label className="dropdown-label" htmlFor={name} style={{ color: themeStyles.item.color }}>
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
        style={themeStyles.input}
      />
      {showDropdown && (
        <ul className="dropdown-list" style={themeStyles.list}>
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <li
                key={index}
                className="dropdown-item"
                onClick={() => handleSelect(option.value)}
                style={themeStyles.item}
              >
                {option.label}
              </li>
            ))
          ) : (
            <li className="dropdown-item no-match" style={themeStyles.item}>
              No matches found
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SuggestiveSelect;
