import * as React from 'react';
import { FilterPanel, FormField, Label, SearchBox, TitleBar } from 'uxp/components';

interface IProps {

}

const TitleBarExample: React.FunctionComponent<IProps> = (props) => {

    return (<div className="section">
        <h3>Title Bar</h3>

        <div className="showcase-section" style={{width: "50%"}}>
            <h4>Title Bar</h4>
            <div className="example" >

                <TitleBar title="Sample Title bar" >
                    <div>
                        <FilterPanel>
                            <FormField>
                                <Label>Search</Label>

                                <SearchBox value="" onChange={() => {}} />
                            </FormField>
                        </FilterPanel>
                    </div>
                </TitleBar>
            </div>

            <div className="code">
            </div>
        </div>


    </div>)
}

export default TitleBarExample