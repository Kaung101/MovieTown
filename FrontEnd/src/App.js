import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import MovieDetail from './components/MovieDetail';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MovieList from './components/MovieList';
import FileNotFound from './components/FileNotFound';
import UserProfile from './components/UserProfile';
import AdminHome from './components/AdminHome';
import AdminAdd from './components/AdminAdd';
import AdminUpdate from './components/AdminUpdate';
import AdminRegister from './components/AdminRegister';
import AdminLogin from './components/AdminLogin';
import NewRelease from './components/NewRelease';
import TopMovie from './components/TopMovie';
import AllMovie from './components/AllMovie';
function App() {
  return (
    <>
    <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/login">
              <Login/>
            </Route>
            <Route exact path="/register">
              <Register/>
            </Route>
            <Route exact path="/detail">
              <MovieDetail/>
            </Route>
            <Route exact path="/search">
              <MovieList/>
            </Route>
            <Route exact path="/profile">
              <UserProfile/>
            </Route>
            <Route exact path="/adminHome">
              <AdminHome/>
            </Route>
            <Route exact path="/adminAdd">
              <AdminAdd/>
            </Route>
            <Route exact path="/adminUpdate/:movieId">
              <AdminUpdate/>
            </Route>
            <Route exact path="/detail/:movieId">
              <MovieDetail/>
            </Route>
            <Route exact path="/adminRegister">
              <AdminRegister/>
            </Route>
            <Route exact path="/adminLogin">
              <AdminLogin/>
            </Route>
            <Route exact path="/newRelease">
              <NewRelease/>
            </Route>
            <Route exact path="/top">
              <TopMovie/>
            </Route>
            <Route exact path="/all">
              <AllMovie/>
            </Route>
            <Route path="*">
              <FileNotFound/>
            </Route>
            
          </Switch>
        </div>
    </Router>
    </>
    
  );
}

export default App;
