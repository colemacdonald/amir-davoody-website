import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from './pages/Home';
import { About } from './pages/About';
import { TopNavBar } from './navigation/TopNavBar';


function App() {
    return (
        <HashRouter basename="/">
            <div className="App">
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
