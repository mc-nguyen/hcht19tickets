import './App.css';
import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Members from "./pages/Members";
import ChurchesConfig from "./pages/ChurchesConfig";
import Report from "./pages/Report";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<HomePage />}/>
                            <Route path="members" element={<Members />} />
                            <Route path="churches-config" element={<ChurchesConfig />} />
                            <Route path="report" element={<Report />} />
                        </Routes>
                    </BrowserRouter>
                </header>
            </div>
        );
    }
}

export default App;
