import React from "react";

function NextButton({ dispatch, answer, index, numQuestions }) {
  // hide button until user selects an answer
  if (answer === null) return null;

  // last question → show Finish
  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );

  // all other questions → show Next
  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      Next
    </button>
  );
}

export default NextButton;
