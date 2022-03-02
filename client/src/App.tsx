import './App.scss';
import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from './pages/Home';
import { About } from './pages/About';
import { TopNavBar } from './navigation/TopNavBar';
import background from './resources/vancouver.jpg';

function App() {
    return (
        <HashRouter basename="/">
            <div className="App" 
            // style={{ backgroundImage: `url(${background})`}}
            >
                <TopNavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </HashRouter>
    );
}

export default App;
