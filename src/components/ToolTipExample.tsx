import * as React from 'react';
import { Button, Tooltip } from 'uxp/components';

const ToolTipExample: React.FunctionComponent<{}> = (props) => {
    return (<div className="section">
        <h3>Tooltip</h3>

        <div className="showcase-section inline bgWhite" id="modal">
            <h4>Tooltip (top)</h4>
            <div className="example">
                <Tooltip content="Tooltip on top">
                    <Button onClick={() => {}} title="Hover me" />
                </Tooltip>
            </div>

            <div className="code">
            </div>
        </div>

        <div className="showcase-section inline bgWhite" id="modal">
            <h4>Tooltip (bottom)</h4>
            <div className="example">
                <Tooltip content="Tooltip on bottom" position="bottom">
                    <Button onClick={() => {}} title="Hover me" />
                </Tooltip>
            </div>
        </div>

        <div className="showcase-section inline bgWhite" id="modal">
            <h4>Tooltip (left)</h4>
            <div className="example">
                <Tooltip content="Tooltip on left" position="left">
                    <Button onClick={() => {}} title="Hover me" />
                </Tooltip>
            </div>
        </div>

        <div className="showcase-section inline bgWhite" id="modal">
            <h4>Tooltip (right)</h4>
            <div className="example">
                <Tooltip content="Tooltip on right" position="right">
                    <Button onClick={() => {}} title="Hover me" />
                </Tooltip>
            </div>
        </div>
    </div>)
}

export default ToolTipExample