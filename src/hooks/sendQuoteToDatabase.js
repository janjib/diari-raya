
import { myDatabase } from '../firebase/config'

const sendQuoteToDatabase = quotesData => {
    const quoteRef = myDatabase.collection('quotes')
    
    quoteRef.add(quotesData)
}

export default sendQuoteToDatabase
