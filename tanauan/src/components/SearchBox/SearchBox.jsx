import React, { useState, useRef } from "react";
import "./SearchBox.css";
import { X, Search } from "lucide-react";

const SearchBox = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  const handleExpand = () => {
    setIsExpanded(true);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const handleClose = () => {
    setQuery("");
    setIsExpanded(false);
  };

  return (
    <div className={`search-box ${isExpanded ? "expanded" : ""}`}>
      {isExpanded ? (
        <button className="close-icon" onClick={handleClose}>
          <X size={20} />
        </button>
      ) : (
        <button className="search-icon" onClick={handleExpand}>
          <Search size={20} />
        </button>
      )}
      <input
        ref={inputRef}
        type="text"
        className="search-input"
        placeholder="Type something here"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onBlur={() => !query && setIsExpanded(false)}
      />
    </div>
  );
};

export default SearchBox;
