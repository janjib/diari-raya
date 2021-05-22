import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from './Components/NavigationBar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import PostPage from './Components/PostPage';
import WriteQuote from './Components/WriteQuote';
import Homepage from './Components/Homepage';
import {AppContextProvider} from './context/AppContext'
import PrivateRoute from './Components/PrivateRoute'

import AlbumPage from './Components/AlbumPage';
import ViewAlbumPage from './Components/ViewAlbumPage';


function App() {
  return (
    <AppContextProvider>
    <div className="App">
      <Router>
     <NavigationBar />
    


<Switch>

<Route path='/'   exact component={Homepage}></Route> 
<PrivateRoute exact path='/post-quote' component={PostPage} />
<PrivateRoute exact path='/write-quote'   component={WriteQuote} /> 
<PrivateRoute exact path='/album-page'   component={AlbumPage} /> 
<PrivateRoute exact path='/view-album-page'   component={ViewAlbumPage} /> 




</Switch>

</Router>
     
    </div>
    </AppContextProvider>
  );
}

export default App;
