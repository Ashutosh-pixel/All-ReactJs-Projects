import {useEffect , useState} from "react";


function useCurrencyInfo(currency){
    let [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/c58b58f05fbe38bfd0839fc6/latest/${currency}`)
            .then((response) => response.json())
            .then((response) => setData(response["conversion_rates"]))
            .then(() => console.log(data))
    }, [currency]);

    // console.log(data)
    return data;
}

export default useCurrencyInfo