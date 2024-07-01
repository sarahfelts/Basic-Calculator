import React, {useState} from "react";
import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

const App = () => {
  const [value, setValue] = useState('0');

  const handleClick = (btnValue) => {
    setValue((prev) => {
      if (btnValue === 'C') {
        return '0';
      }
      if (btnValue === '=') {
        try {
          return eval(prev).toString();
        } catch (e) {
          return 'Error';
        }
      }
      return prev === '0' ? btnValue : prev + btnValue;
    });
  };

  return (
    <Wrapper>
      <Screen value={value} />
      <ButtonBox>
        {
          btnValues.flat().map((btn, i) => {
            return (
              <Button
                key={i}
                className={btn === '=' ? 'equals' : ''}
                value={btn}
                onClick={() => handleClick(btn)}
              />
            );
          })
        }
      </ButtonBox>
    </Wrapper>
  );
};


export default App;
