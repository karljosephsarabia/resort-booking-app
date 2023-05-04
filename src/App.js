import Header from "./components/Header";
import Main from "./components/Main";
import background from './fotos/background.jpg';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0.1)), url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: "100vh"
      }} className="d-flex flex-column justify-content-evenly">
        <Header />
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
