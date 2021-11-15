import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Detail from './components/Detail';

function App() {
  return (
    <main>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/detail" element={<Detail />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
