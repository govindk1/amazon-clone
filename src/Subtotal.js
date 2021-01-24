import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import {useStateValue} from "./StateProvider.js"
import {useHistory} from "react-router-dom"


function Subtotal() {

    const history = useHistory();

    const [{basket}, dispatch] = useStateValue()
    let sum = 0
    const value1 = basket.map((item) => {
                  sum += item.price;
                  return item
                    })
    
    
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <React.Fragment>
                        <p>
                        Subtotal ({basket.length} items): <strong>{ "$"+sum}</strong>
                        </p>
                        <small className="subtotal__gift">
                        <input type="checkbox" /> This order contains a gift
                        </small>
                    </React.Fragment>
                )}
                decimalScale={2}
                value={sum}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
        
            <button onClick = {e => history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
