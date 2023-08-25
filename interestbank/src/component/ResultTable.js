import React from "react";

function ResultTable(props) {
  return (
    <div>
      {props.data.map((arr) => (
        <div>
          <p>{arr.year}</p>
          <p>{arr.savingEndOfYear}</p>
          <p>{arr.endOfYearInterest}</p>
          <p>{arr.expectedInterest}</p>
        </div>
      ))}
    </div>
  );
}

export default ResultTable;
