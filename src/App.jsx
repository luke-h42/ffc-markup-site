import React, { useState } from 'react';
import DOMPurify from 'dompurify';
import './App.css'
import {marked} from 'marked';

const App = () => {
  const [code, setCode] = useState(`  # H1 
  ## H2 
  [title](https://www.google.com) 
  \`code\` 
  \`\`\`
  {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
  }
  \`\`\`

  1. First item
  2. Second item
  3. Third item

  > blockquote

  ![alt text](image.jpg)
  
  **bold text**
  `);
  
  marked.setOptions({
    breaks: true
  })
 
  const sanitizedData = () => ({
    __html: DOMPurify.sanitize(marked(code))
  })
  
  const handleChange = (e) => {
    setCode(e.target.value);
  };
  
  return (
    <div >
      <div class="editor-panel" >
        <div class="text-area-head">Add code here</div>
        <textarea id="editor" class="text-input"  value={code} onChange={handleChange}   />
      </div>
      
      <div class="preview-panel">
        <div class="text-area-head">See Code Here</div>
        <p id="preview" class="output-section" dangerouslySetInnerHTML={sanitizedData()}></p>
      </div>
    </div>
  );
};

export default App;
