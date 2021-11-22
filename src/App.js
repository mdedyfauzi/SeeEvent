import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Detail from './pages/Detail';
import Home from './pages/Home/Home';
import DefaultLayout from './components/DefaultLayout/DefaultLayout'
import SignUp from './pages/SignUp';
import Search from './pages/Search';
// import EventDetail from './components/EventDetail/EventDetail';
// import CardSearch from './components/CardSearch/CardSearch'

function App() {
  return (
    <Router>
          <Switch>
              
              <Route exact path='/' component={Home}/>
              <DefaultLayout> 
                <Route  path='/signin' component={SignIn} />
                <Route  path='/signup' component={SignUp} />
                <Route  path='/detail' component={Detail}/>
                <Route path='/search' component={Search}/> 
                               
              </DefaultLayout>
          </Switch>
    </Router> 
  ); 
}

export default App;
