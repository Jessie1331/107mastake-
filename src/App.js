
import './App.css';
import Footer from './componets/footer.jsx';
import Navbar from './componets/navbar.jsx';
import Catalog from './componets/pages/catalog';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Catalog/>
      <Footer/>
    </div>
  );
}

export default App;