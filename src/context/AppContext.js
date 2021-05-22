import React,{createContext, useEffect,useState} from 'react'


export const AppContext = createContext()

export const AppContextProvider = props => {

    const [currentUser,setCurrentUser] = useState(null)



 


    const value ={
        currentUser,
        setCurrentUser
    }

    useEffect(()=>{
        console.log('User Changed',currentUser)
        
    },[currentUser])

    return (
       <AppContext.Provider value={value}>

{props.children}
       </AppContext.Provider>
    )
}


