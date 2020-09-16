import * as React from 'react';
import { Button, Popover } from 'uxp/components';

const PopoverExample: React.FunctionComponent<{}> = (props) => {
    return (<div className="section">
        <h3>Popover</h3>

        <div className="showcase-section inline bgWhite" id="modal">
            <h4>Popover (top)</h4>
            <div className="example">
                <Popover title="popover" content="Popover on top">
                    <Button onClick={() => { }} title="Click me" />
                </Popover>
            </div>

            <div className="code">
            </div>
        </div>

        <div className="showcase-section inline bgWhite" id="modal">
            <h4>Popover (bottom)</h4>
            <div className="example">
                <Popover title="popover" content="Popover on bottom" position="bottom">
                    <Button onClick={() => { }} title="Click me" />
                </Popover>
            </div>
        </div>

        <div className="showcase-section inline bgWhite" id="modal">
            <h4>Popover (left)</h4>
            <div className="example">
                <Popover title="popover" content="Popover on left" position="left">
                    <Button onClick={() => { }} title="Click me" />
                </Popover>
            </div>
        </div>

        <div className="showcase-section inline bgWhite" id="modal">
            <h4>Popover (right)</h4>
            <div className="example">
                <Popover title="popover" content="Popover on right" position="right">
                    <Button onClick={() => { }} title="Click me" />
                </Popover>
            </div>
        </div>
    </div>)
}

export default PopoverExample