import React from "react";

const Calculator: React.FC = () => {
  const [value, setValue] = React.useState(" ");

  return (
    <div className="container">
      <div className="calculator">
        <form action="">
          <div className="display">
            <input
              className="border-black border-2"
              type="text"
              value={value}
            />
          </div>
          <div>
            <input
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border-blue-500 border-2 hover:cursor-pointer hover:bg-blue-700"
              type="button"
              value="AC"
              onClick={() => setValue(" ")}
            />
            <input
              className="hover:cursor-pointer hover:bg-blue-700"
              type="button"
              value="DE"
              onClick={() => setValue(value.slice(0, -1))}
            />
            <input
              className="hover:cursor-pointer hover:bg-blue-700"
              type="button"
              value="."
              onClick={(e) => setValue(e.target.value)}
            />
            <input
              className="hover:cursor-pointer hover:bg-blue-700"
              type="button"
              value="/"
              onClick={(e) => setValue(e.target.value)}
            />
          </div>
          <div>
            <input
              className="hover:cursor-pointer hover:bg-blue-700"
              type="button"
              value="7"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              className="hover:cursor-pointer hover:bg-blue-700"
              type="button"
              value="8"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              className="hover:cursor-pointer hover:bg-blue-700"
              type="button"
              value="9"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              className="hover:cursor-pointer hover:bg-blue-700"
              type="button"
              value="*"
              onClick={(e) => setValue(value + e.target.value)}
            />
          </div>
          <div>
            <input
              className="hover:cursor-pointer hover:bg-blue-700"
              type="button"
              value="4"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              className="hover:cursor-pointer hover:bg-blue-700"
              type="button"
              value="5"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              className="hover:cursor-pointer hover:bg-blue-700"
              type="button"
              value="6"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              className="hover:cursor-pointer hover:bg-blue-700"
              type="button"
              value="+"
              onClick={(e) =>
                setValue(value + (e.target as HTMLInputElement).value)
              }
            />
          </div>
          <div>
            <input
              className="hover:cursor-pointer hover:bg-blue-700"
              type="button"
              value="1"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              className="hover:cursor-pointer hover:bg-blue-700"
              type="button"
              value="2"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              className="hover:cursor-pointer hover:bg-blue-700"
              type="button"
              value="3"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              className="hover:cursor-pointer hover:bg-blue-700"
              type="button"
              value="-"
              onClick={(e) => setValue(value + e.target.value)}
            />
          </div>
          <div>
            <input
              className="hover:cursor-pointer hover:bg-blue-700"
              type="button"
              value="00"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              className="hover:cursor-pointer hover:bg-blue-700"
              type="button"
              value="0"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              className="hover:cursor-pointer hover:bg-blue-700"
              type="button"
              value="="
              //1   onClick={(e) => setValue(eval(value))}
              onClick={(e) =>
                setValue((value) => new Function(`return ${value}`)())
              }
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Calculator;
