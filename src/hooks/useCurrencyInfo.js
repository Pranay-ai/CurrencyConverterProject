import { useEffect,useState } from "react";

export default function useCurrencyInfo(currency){
    const [data,setData] = useState({});
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`).then((response)=> response.json()).then((response)=>setData(response[currency]))

    },[currency])

    return data;


}


export default function Convert(amount,from,to,date){
    var myHeaders = new Headers();
    myHeaders.append("apikey", "7XXxESBrWXohQcFjAD0qUdNZSimtmiRR");

    var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
    };

    fetch(`https://api.apilayer.com/currency_data/convert?to=${to}&from=${from}&amount=${from}`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}