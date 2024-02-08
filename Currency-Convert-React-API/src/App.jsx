import './App.css'
import Box from "./components/Box.jsx";
import useCurrencyInfo from "./hook/useCurrencyInfo.js";
import {useState} from "react";


function App() {

    // let currencyInfo = useCurrencyInfo("USD");
    // console.log(currencyInfo)

    let [from , setFrom] = useState("AED");
    let [to, setTo] = useState("INR");
    let [amount, setAmount] = useState(0);
    let [convertedAmount , setConvertedAmount] = useState(0)

    let currencyObject = useCurrencyInfo(from);

    let currencyOptions = Object.keys(currencyObject)

    // console.log(currencyObj)
    // console.log(currencyOptions)
    console.log(from)
    console.log(to)
    // console.log(amount)


    function Swap(){
        setFrom(to)
        setTo(from)
        setAmount(convertedAmount)
        setConvertedAmount(amount)
    }


    function currencyConvert() {
        convertedAmount = amount * Number(currencyObject[to])
        setConvertedAmount(convertedAmount);
    }

    return (

        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url(https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg)`,
            }}
        >

            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();

                        }}
                    >
                        <div className="w-full mb-1">
                            <Box
                                label="From"
                                amount={amount}
                                currencyArr={currencyOptions}
                                selectCurrency={from}
                                onCurrencyChange={(curr) => setFrom(curr)}
                                onAmountChange={(amt) => setAmount(amt)}
                                onAmountEnable={true}
                                onClicked={(amt) => setAmount(amt)}

                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-emerald-600 text-white px-2 py-0.5"
                                onClick={Swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <Box
                                label="To"
                                amount={convertedAmount}
                                currencyArr={currencyOptions}
                                selectCurrency={to}
                                onCurrencyChange={(curr) => setTo(curr)}
                                onAmountEnable={false}

                            />
                        </div>
                        <button onClick={currencyConvert} type="submit" className="w-full bg-emerald-600 text-white px-4 py-3 rounded-lg">
                            Convert
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default App
