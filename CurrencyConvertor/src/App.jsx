import { useEffect, useState } from "react";
import Input from "./component/Input";
import useCurrencyinfo from "./hooks/useCurrencyinfo";

function App() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  // Custom Hook 
  const currencyInfo = useCurrencyinfo(from);

  // currencies for dropdown
  const options = Object.keys(currencyInfo || {});

  // Swap button logic
  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  // Conversion logic
  const convert = () => {
    if (amount > 0 && currencyInfo && currencyInfo[to]) {
      const result = amount * currencyInfo[to];
      setConvertedAmount(result);
    }
  };

  // 🧠 Auto-convert 
  useEffect(() => {
    convert();
  }, [amount, from, to, currencyInfo]);

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-old/16370/SM694009.jpg')",
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => e.preventDefault()} // Auto Convertor
          >
            {/* From Input */}
            <div className="w-full mb-1">
              <Input
                label="From"
                amount={amount}
                currencyOption={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amt) => setAmount(amt)}
                selectCurrency={from}
              />
            </div>

            {/* Swap Button */}
            <div className="relative w-full flex justify-center my-2">
              <button
                type="button"
                className="border-2 border-white rounded-md bg-blue-600 text-white px-3 py-1 transform -translate-y-1/2"
                onClick={swap}
              >
                Swap
              </button>
            </div>

            {/* To Input  */}
            <div className="w-full mt-1 mb-4">
              <Input
                label="To"
                amount={convertedAmount}
                currencyOption={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>

            {/* Convert Button (Optional now) */}
            <button
              type="button"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg"
              onClick={convert}
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
