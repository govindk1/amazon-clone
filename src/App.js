import React, {useEffect} from "react"
import Header from "./Header"
import Home from "./Home"
import "./App.css"
import Checkout from "./Checkout"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Login from "./Login"
import {auth} from "./firebase"
import {useStateValue} from "./StateProvider"
import Payment from "./Payment"


function App() {

  const [basket, dispatch] = useStateValue()

  useEffect(() => {
    //will only run once when the app component loads...

    //it will setup the listener so whenever we make some changes then
    //down code will be fired     
    auth.onAuthStateChanged(authUser => {
      //console.log('The  user is >>>> ', authUser)

      if(authUser){
        //the user just logged in / the user was logged in
        
        dispatch({
          type: 'SET_USER',
          user:authUser
        })
      }

      else{
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Switch>

        <Route exact path="/payment">
          <Header />
          <Payment />
        </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/">
            <Header />
            <Home />
          </Route>

          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>

          

        </Switch>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
