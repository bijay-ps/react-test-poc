import React from 'react';
import {TestButton} from "./styledButton.styles";

const StyledButtonComponent = () => {
  const [testText, setTestText] = React.useState();

  const clickHandler = (e) => {
    e.preventDefault();
    setTestText('Lorem Ipsum')
    console.log('Button Clicked!');
  }

  return (
    <>
      <TestButton data-test="component-styled-button">
      Click Me!!
      </TestButton>
      <p data-test="text-tag">{testText}</p>
    </>
  );
};

export default StyledButtonComponent;