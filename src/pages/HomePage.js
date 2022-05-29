import React from 'react';
import SaleCalculator from "../components/SaleCalculator";

class HomePage extends React.Component {
    render() {
        return(
            <div>
                <div style={{marginTop: '10%'}}>
                    <SaleCalculator />
                </div>
            </div>
        )
    }
}

export default HomePage;