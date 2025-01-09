import React, { useEffect, useState } from 'react';

// Define the type for suggestions
interface AutocompleteProps {
  title?: string;
  placeholder?: string;
  suggestions: string[];
  name?: string;
  ref?: React.Ref<HTMLInputElement>
  onValueChange?: (value : string, index: number) => void;
  disabled?: boolean;
  defaultValue?: string;
}

const Autocomplete: React.FC<AutocompleteProps> = ({ title = "Search", defaultValue='', disabled, onValueChange, suggestions, ref, name, placeholder }) => {
  // State to manage user input and filtered suggestions
  const [inputValue, setInputValue] = useState<string>(defaultValue);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>(suggestions.slice(0, 10));
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setInputValue(query);

    if (query === '') {
      setIsDropdownVisible(false);
      return;
    }

    const filtered = suggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredSuggestions(filtered);
    setIsDropdownVisible(filtered.length > 0);
  };

  // Handle suggestion selection
  const handleSuggestionSelect = (suggestion: string, index : number) => {
    setInputValue(suggestion);
    setSelectedIndex(index);
    setIsDropdownVisible(false);  // Hide dropdown after selection
  };

  // on input change, call the onValueChange callback
  useEffect(() => {
    onValueChange?.(inputValue, selectedIndex);
  }, [inputValue, onValueChange, selectedIndex]);

  return (

    <div className="form-control">
      <label className="label">
        <span className="label-text">{title}</span>
      </label>
      <input 
        disabled={disabled}
        ref={ref}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        name={name}
        placeholder={placeholder ?? "Type here"}
        className="input input-bordered w-full dropdown"
        autoComplete='off'
        onFocus={()=> setIsDropdownVisible(true)}
        onBlur={()=> {
          setInputValue(suggestions[selectedIndex] ?? '')
        }}
      />
      {/* Dropdown for filtered suggestions */}
      {isDropdownVisible && (
        <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-full max-h-60 overflow-y-auto mt-1">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              className="px-2 py-2 hover:bg-primary/10 cursor-pointer"
              onClick={() => {
                const index = suggestions.indexOf(suggestion);
                handleSuggestionSelect(suggestion, index);
              }}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
