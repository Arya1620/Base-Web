import React, { useState } from 'react';
import './DisplayTable.css';

const DisplayTable = () => {
  const initialTags = ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5'];
  const [selectedTags, setSelectedTags] = useState(Array(5).fill([])); 

  const handleAddTag = (siNo, event) => {
    const tag = event.target.value;
    if (tag && !selectedTags[siNo].includes(tag)) {
      const newTags = [...selectedTags];
      newTags[siNo] = [...newTags[siNo], tag];
      setSelectedTags(newTags);
      event.target.value = ''; 
    }
  };

  const handleRemoveTag = (siNo, tagToRemove) => {
    const newTags = [...selectedTags];
    newTags[siNo] = newTags[siNo].filter(tag => tag !== tagToRemove);
    setSelectedTags(newTags);
  };

  return (
    <div className="table-container">
      <div className="table-row header">
        <div>SI No.</div>
        <div>Links</div>
        <div>Prefix</div>
        <div>Add Tags</div>
        <div>Selected Tags</div>
      </div>
      {[...Array(5).keys()].map(siNo => (
        <div key={siNo} className="table-row">
          <div>{siNo + 1}</div>
          <div><a href="https://www.google.com" target="_blank" rel="noopener noreferrer">www.google.com</a></div>
          <div>PrefixSample</div>
          <div>
            <select onChange={(e) => handleAddTag(siNo, e)} className="tag-select">
              <option value="">Select Tag</option>
              {initialTags.map(tag => (
                <option key={tag} value={tag}>{tag}</option>
              ))}
            </select>
          </div>
          <div className="selected-tags">
            {selectedTags[siNo].map(tag => (
              <span key={tag} className="tag">
                {tag} <span className="remove-tag" onClick={() => handleRemoveTag(siNo, tag)}>✕</span>
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayTable;
