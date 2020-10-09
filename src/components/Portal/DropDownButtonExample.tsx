import * as React from 'react';
import { Button, DropDownButton, Tooltip } from 'uxp/components';

const DropDownButtonExample: React.FunctionComponent<{}> = (props) => {

    let Content = <table cellPadding="5px" style={{ width: "100%" }}>
        <thead>
            <tr>
                <th style={{ textAlign: "left" }}>Date</th>
                <th style={{ textAlign: "left" }}>Count</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>20/10/2020</td>
                <td>23</td>
            </tr>
            <tr>
                <td>20/10/2020</td>
                <td>23</td>
            </tr>
            <tr>
                <td>20/10/2020</td>
                <td>23</td>
            </tr>
        </tbody>
    </table>
    return (<div className="section">
        <h3>Dropdown Button</h3>

        <div className="showcase-section inline bgWhite" id="modal">
            <h4>Dropdown Button (right, show on click)</h4>
            <div className="example">
                <DropDownButton
                    content={() => Content}
                >
                    <Button onClick={() => { }} title="Click me" />
                </DropDownButton>
            </div>

            <div className="code">
            </div>
        </div>

        <div className="showcase-section inline bgWhite" id="modal">
            <h4>Dropdown Button (left, show on click)</h4>
            <div className="example">
                <DropDownButton
                    content={() => Content}
                    position="left"
                >
                    <Button onClick={() => { }} title="Click me" />
                </DropDownButton>
            </div>

            <div className="code">
            </div>
        </div>

        <div className="showcase-section inline bgWhite" id="modal">
            <h4>Dropdown Button (left, show on mouse over)</h4>
            <div className="example">
                <DropDownButton
                    content={() => Content}
                    position="left"
                    showOnHover
                >
                    <Button onClick={() => { }} title="Hover me" />
                </DropDownButton>
            </div>

            <div className="code">
            </div>
        </div>
    </div>)
}

export default DropDownButtonExample