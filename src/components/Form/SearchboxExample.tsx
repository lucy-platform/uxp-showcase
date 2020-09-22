import * as React from 'react';
import { FormField, Label, SearchBox } from 'uxp/components';

const SearchboxExample: React.FunctionComponent<{}> = (props) => {

    // state
    let [query, setQuery] = React.useState("")

    return (<div className="section">
        <h3>Searchbox</h3>

        <div className="showcase-section bgWhite" id="modal">
            <h4>Searchbox </h4>
            <div className="example">
                <div className="flex-row">

                    <FormField className="showcase-input">
                        <Label>Searchbox (default)</Label>
                        <SearchBox
                            value={query}
                            onChange={setQuery}
                        />
                    </FormField>

                    <FormField className="showcase-input">
                        <Label>Searchbox (collapsed - open to right)</Label>
                        <SearchBox
                            value={query}
                            onChange={setQuery}
                            collapsed
                            position={"right"}
                        />
                    </FormField>

                    <FormField className="showcase-input">
                        <Label>Searchbox (collapsed - open to left)</Label>
                        <SearchBox
                            value={query}
                            onChange={setQuery}
                            collapsed
                            position={"left"}
                        />
                    </FormField>

                </div>
            </div>

            <div className="code">
            </div>
        </div>

    </div>)
}

export default SearchboxExample