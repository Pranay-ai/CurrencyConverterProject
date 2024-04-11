
import Input from "./Components/Input"
import useCurrencyInfo from "./hooks/useCurrencyInfo.js"
import {useEffect,useState} from "react";


export default function App() {

  const result = useCurrencyInfo("usd");
  console.log(result);


return (
    <div className="App">
        <h1>Currency Converter</h1>
        <Input />
    </div>
)
}