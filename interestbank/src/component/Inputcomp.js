import React, { useState } from "react";

let initialSaving = {
  currentSaving: 10000,
  yearlySaving: 0,
  expectedInterest: 0,
  investmentDuration: 0
};
function Inputcomp({ calculatorMethod }) {
  const [formData, setFormData] = useState(initialSaving);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleReset = () => {
    setFormData(initialSaving);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    calculatorMethod(formData);
  };
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div>
        <label>Current Saving</label>
        <input className="form-input" type="number" name="currentSaving" value={formData.currentSaving} onChange={handleInputChange} />
      </div>
      <div>
        <label>Yearly Saving</label>
        <input className="form-input" type="number" name="yearlySaving" value={formData.yearlySaving} onChange={handleInputChange} />
      </div>
      <div>
        <label>Expected Interest (%)</label>
        <input className="form-input" type="number" name="expectedInterest" value={formData.expectedInterest} onChange={handleInputChange} />
      </div>
      <div>
        <label>Investment Duration (Year)</label>
        <input className="form-input" type="number" name="investmentDuration" value={formData.investmentDuration} onChange={handleInputChange} />
      </div>
      <div className="button-container">
        <button type="button" onClick={handleReset}>
          Reset
        </button>
        <button type="submit">Calculate</button>
      </div>
    </form>
  );
}

export default Inputcomp;
