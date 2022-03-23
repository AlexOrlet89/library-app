import BookList from './views/Books/BookList';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import BookDetail from './views/Books/BookDetail';

function App() {
  // TODO: Add routes to books & views
  return (
    <BrowserRouter>
      <main className="container">
        <h1>Library Catalog</h1>
        <Switch>
          <Route exact path="/booklist">
            <BookList />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/bookdetail">
            <BookDetail />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
