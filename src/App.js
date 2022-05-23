import './App.css';
import React from 'react';
import BotNav from "./components/BotNav";
import SaleCalculator from "./components/SaleCalculator";
import Attendance from "./components/Attendance";
import Report from "./components/Report";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenTab: 0,
            saleShift: {
                coordinator: '',
                location: '',
                date: '',
                time: ''
            },
            saleSummary: {
                soldTickets: 0,
                profit: 0,
                donation: 0
            },
            members: []
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    {(this.state.chosenTab === 0) ?
                        (<SaleCalculator shift={this.state.saleShift}
                                        editShift={(board, church, newDate, newTime) => {
                                            this.setState({saleShift: {
                                                    coordinator: board,
                                                    location: church,
                                                    date: newDate,
                                                    time: newTime
                                                }});
                                        }}
                                        summary={this.state.saleSummary}
                                        editSummary={(sold, profited, donated) => {
                                            this.setState({saleSummary: {
                                                    soldTickets: sold,
                                                    profit: profited,
                                                    donation: donated
                                                }});
                                        }}
                        />) :
                        (this.state.chosenTab === 1) ?
                            (<Attendance members={this.state.members}
                                         editMembers={(memberList) => {
                                             this.setState({members: memberList})
                                         }}
                            />) :
                            (<Report/>)
                    }
                    <BotNav value={this.state.chosenTab}
                            setValue={(newTab) => this.setState({chosenTab: newTab})}
                    />
                </header>
            </div>
        );
    }
}

export default App;
