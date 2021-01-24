import React, { createContext, useContext, useReducer } from "react";
import reducer, { initialState } from "./reducer";

// Prepares the dataLayer
export const StateContext = createContext();

// Wrap our app and provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);



//useReducer returns a pair of values i.e newState and dispatch
//so what is happening behing the scene

// 1)we are creating the context that is imp to let other component access to the data
// 2)in StateProvider we are taking as reducer, initialState and children i.e App component
//     we are using useReducer on (reducer, initialState) useReducer return two things one is
//     currentState and other is dispatch. dispatch will help you emit action and thus help
//     to manipulate data
// 3)we are using useContext to help other component to pull the data

//so workflow will be like this
// 1)initialize state 
// 2)make reducer function
// 3)make createContext
// 4)useReducer will take 1 and 2 and return currentState and dispatch 
// 5)dispatch will help us to update the state
// 5)useContext will help us to pull the data 