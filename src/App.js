import BookList from './components/book/BookList';
import BookDetail from './components/book/BookDetail';
import './App.css';
import { Switch, Route } from 'react-router-dom';

function App() {
  <Switch>
    <Route path="/books" component={BookList} />
    <Route path="/books/:id" component={BookDetail} />
  </Switch>;

  return (
    <main className="container">
      <h1>Library Catalog</h1>
      <BookList />
    </main>
  );
}

export default App;
