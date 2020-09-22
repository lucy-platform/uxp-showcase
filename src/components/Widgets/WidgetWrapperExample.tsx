import * as React from 'react';
import { WidgetWrapper } from 'uxp/components';

interface IWidgetWrapperExampleProps {

}

const WidgetWrapperExample: React.FunctionComponent<IWidgetWrapperExampleProps> = (props) => {

    return (<div className="section">
        <h3>Widget Wrapper</h3>

        <div className="showcase-section bgWhite">
            <h4>Widget Wrapper</h4>
            <div className="example">

                <WidgetWrapper className="sc-ww">
                    
                    <div style={{padding: "20px"}}>
                        This is a widget wrapper <br/>
                        This is just a wrapper component <br/>
                        <br/>
                        This has default style for a widget container
                    </div>
                    
                </WidgetWrapper>
            </div>

            <div className="code">
            </div>
        </div>

    
    </div>)
}

export default WidgetWrapperExample