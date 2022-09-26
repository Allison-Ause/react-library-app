import BookList from './components/book/BookList';
import BookDetail from './components/book/BookDetail';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <main className="container">
      <h1>Library Catalog</h1>
      <Link className="home-link" to="/books">
        Check Out These Books!
      </Link>
      <Switch>
        <Route path="/books/:id" component={BookDetail} />
        <Route path="/books" component={BookList} />
      </Switch>
    </main>
  );
}

export default App;
