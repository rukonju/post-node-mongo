import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import Posts from './pages/Posts/Posts';
import AddPost from './pages/AddPost/AddPost';
import Update from './pages/Update/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/posts'>
            <Posts></Posts>
          </Route>
          <Route path='/post/add'>
            <AddPost></AddPost>
          </Route>
          <Route path='/post/update/:id'>
            <Update></Update>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
