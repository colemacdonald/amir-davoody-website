import './App.scss';
import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from './pages/Home';
import { About } from './pages/About';
import { TopNavBar } from './navigation/TopNavBar';

function App() {
    return (
        <HashRouter basename="/">
            <div className="App">
                <TopNavBar />
                <div className="main">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </div>
            </div>
        </HashRouter>
    );
}

export default App;
