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
import BotNav from "./components/BotNav";

class App extends React.Component {
    nlink = {
        '/': 'Bảng Tính Tiền Vé',
        '/members': 'Điểm Danh',
        '/churches-config': 'Danh Sách Nhà Thờ',
        '/report': 'Kiểm Kê',
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <BotNav title={this.nlink[window.location.pathname]}/>
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
