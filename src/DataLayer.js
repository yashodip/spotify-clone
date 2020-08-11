import React, {createContext,useContext,useReducer} from 'react'

export const DataLayerContext = createContext();

export const DataLayer=({initialState,reducer,children})=>
{
    //console.log("in DataLayer");
    return(
        <DataLayerContext.Provider value={useReducer(reducer,initialState)}>
            {children}
        </DataLayerContext.Provider>
    );
}


export const useDataLayerValue = ()=>{
  //  console.log("in DataLayer value");
    return (useContext(DataLayerContext))
};
