import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("Victor");
  const [lastName, setLastName] = useState("Wanjala");
  const [newsLetter, setNewsLetter] = useState(false)


  function handleNewsletterChange(event) {
    // .checked, not .value!
    setNewsLetter(event.target.checked);
  }  
  
function handleFirstNameChange(event){
  setFirstName(event.target.value)
}

function handleLastNameChange(event){
  setLastName(event.target.value)
}

  return (
    <form>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange ={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
      <input
        type="checkbox"
        id="newsLetter"
        onChange={handleNewsletterChange}
        checked={newsLetter}
      />
    </form>
  );
}

export default Form;
