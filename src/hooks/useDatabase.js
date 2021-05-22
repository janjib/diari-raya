import  { useEffect, useState } from 'react'
import { myDatabase } from '../firebase/config';

const useDatabase = collectionName => {
    const [docs,setDocs] = useState([]);


    useEffect(()=>{
     const unsubscribe = myDatabase.collection(collectionName)
    .orderBy('createdAt','desc')
    .onSnapshot(snapshot => {
        let documents = []
        snapshot.forEach(shot => {
            documents.push({...shot.data(),id:shot.id})
        })
        setDocs(documents)
    })
    return ()=> unsubscribe()
    },[collectionName])
    
    return {docs}
}

export default useDatabase
