import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Inputcomp from "./component/Inputcomp";
import ResultTable from "./component/ResultTable";

function App() {
  const [state, setState] = useState(null);
  let calculatorMethod = (formData) => {
    let currentSaving = formData.currentSaving;
    const yearlySaving = formData.yearlySaving;
    const expectedInterest = formData.expectedInterest / 100;
    const investmentDuration = formData.investmentDuration;

    let arrayData = [];
    for (let i = 0; i < investmentDuration; i++) {
      let yearlyInterest = currentSaving * expectedInterest;
      currentSaving = currentSaving + yearlyInterest + yearlyInterest;

      arrayData.push({
        year: i + 1,
        savingEndOfYear: currentSaving,
        endOfYearInterest: yearlyInterest,
        expectedInterest: expectedInterest
      });
    }

    setState(arrayData);
  };
  return (
    <div className="App">
      <Header />
      <Inputcomp calculatorMethod={calculatorMethod} />
      {state && <ResultTable data={state} />}
    </div>
  );
}

export default App;
