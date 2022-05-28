import React from 'react';
import SaleCalculator from "../components/SaleCalculator";
import BotNav from "../components/BotNav";

class HomePage extends React.Component {
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
        return(
            <div>
                <BotNav title="Bảng Tính Tiền Vé"/>
                <div style={{marginTop: '10%'}}>
                    <SaleCalculator shift={this.state.saleShift}
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
                    />
                </div>
            </div>
        )
    }
}

export default HomePage;