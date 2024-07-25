import { Button, Card, Input, Layout, Space } from "antd";
import { useState } from "react";

function App() {
  const [inputString, setInputString] = useState("");
  const [inputDelimeter, setInputDelimeter] = useState("");
  const [resultString, setResultString] = useState("");

  const removeNextLines = () => {
    let str = inputString;
    let newStr = str.replace(/[\r\n]+/gm, inputDelimeter);
    return newStr;
  };
  const add = () => {
    let newString = removeNextLines();
    if (newString.length == 0) {
      setResultString("0");
    } else {
      let arrayOfNums = newString.split(inputDelimeter);
      if (!newString.includes(inputDelimeter)) {
        setResultString("Invalid Delimeter");
      } else {
        let Result = 0;
        let negativeNumbers = [];
        for (let nums of arrayOfNums) {
          if (Number(nums) < 0) {
            negativeNumbers.push(nums);
          }
          if (Number(nums)) {
            Result += Number(nums);
          }
        }
        if (negativeNumbers.length > 0) {
          setResultString(
            `Negative Numbers not allowed ${negativeNumbers.join(",")}`
          );
          return;
        }
        setResultString(Result.toString());
      }
    }
  };
  return (
    <Layout>
      <Card>
        <Space direction="vertical">
          <Input.TextArea
            placeholder="Input String of Numbers"
            value={inputString}
            onChange={(e) => {
              setInputString(e.target.value);
            }}
          />
          <Input
            placeholder="Input Delimeter"
            value={inputDelimeter}
            onChange={(e) => {
              setInputDelimeter(e.target.value);
            }}
          />
          <Button
            type="primary"
            onClick={() => {
              if (inputDelimeter.length === 0 && !Number(inputString)) {
                setResultString("Delimeter Missing");
                return;
              } else if (inputDelimeter.length === 0 && Number(inputString)) {
                setResultString(inputString);
              } else {
                add();
              }
              // debugger;
            }}
          >
            Calculate
          </Button>
          <h2>Result:- {resultString} </h2>
        </Space>
      </Card>
    </Layout>
  );
}

export default App;
