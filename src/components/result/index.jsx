import React from "react";

function Result({ frequentWords }) {
  return (
    <section>
      <div className="shadow-lg result">
        <h4 className="mb-4">Here are some insights</h4>
        <ul>
          <li>
            <div className="d-flex align-items-baseline">
              <p className="result-text mr-2">Most frequent words</p>
              {Object.keys(frequentWords).map((d) => (
                <p key={d}>
                  {d}: {frequentWords[d]}
                </p>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Result;
