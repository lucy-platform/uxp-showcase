import * as React from 'react';
import { ItemListCard } from 'uxp/components';

interface IProps {

}

const ItemListCardExample: React.FunctionComponent<IProps> = (props) => {



    return (<div className="section">
        <h3>Item List Card</h3>

        <div className="showcase-section bgWhite inline" >
            <h4>Item List Card</h4>
            <div className="example" >
                <ItemListCard
                    title="System"
                    item={{
                        "hvac": {
                            "value": 250,
                            "percentage": 15
                        },
                        "lighting": {
                            "value": 250,
                            "percentage": 15
                        },
                        "elevators": {
                            "value": 250,
                            "percentage": 15
                        },
                        "fire alarm": {
                            "value": 250,
                            "percentage": 15
                        }
                    }}
                    renderSubTitle={() => {
                        return (<div className="sample-subtitle">Savings (AED)</div>)
                    }}
                    fields={["hvac", "lighting", "elevators", "fire alarm"]}
                    renderField={(item, field, key) => {
                        return (<div className="sample-item-field" key={key}>
                            <div className="label">{field.toUpperCase()}</div>
                            <div className="value">
                                <div className="amount">{item[field].value}</div>
                                <div className="percentage">{item[field].percentage}%</div>
                            </div>
                        </div>)
                    }}
                    backgroundColor="rgb(209 148 250)"
                />
            </div>

            <div className="code">
            </div>
        </div>


    </div >)
}

export default ItemListCardExample