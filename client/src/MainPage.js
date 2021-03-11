import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './pages/homepage/HomePage'
import Signup from './pages/signup/Signup'
import Signin from './pages/signin/SignIn'
import LanndingPage from './pages/landingPage/LandingPage'
import PageNotFound from './components/pageNotFound/PageNotFound'

const MainPage = () => {
    return ( 
        <Router>
            <Switch>
                <Route exact path='/'><HomePage /></Route>
                <Route path="/signup"><Signup /></Route>
                <Route path="/login"><Signin /></Route>
                <Route path="/welcome"><LanndingPage /></Route>
                <Route path="*"> <PageNotFound /> </Route>
            </Switch>
        </Router>
    )
}
export default MainPage