export  default function Input(){
    return (
        <div className="inputBox">
        <input type="Number" placeholder="Enter Amount" className="input" id="input" /> 
        <label htmlFor="currencyOptions">From</label>
        <select name="currencyOptions" id="currencyOptions" className="currencyOptions">
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="JPY">JPY</option>
            <option value="GBP">GBP</option>
            <option value="AUD">AUD</option>
            <option value="CAD">CAD</option>
            <option value="CHF">CHF</option>
            <option value="CNY">CNY</option>
            <option value="SEK">SEK</option>
            <option value="NZD">NZD</option>
            <option value="MXN">MXN</option>
        </select>
        </div>

    )
}