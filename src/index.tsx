import * as React from "react";
import { IContextProvider, registerUI } from './uxp';
import { HashRouter as Router, Link, Route, Switch } from "react-router-dom";

import './styles.scss';
import ToolTipExample from "./components/ToolTipExample";
import Welcome from "./components/Welcome";
import PopoverExample from "./components/PopoverExmple";
import { SearchBox } from "uxp/components";

interface IUxp_showcaseProps {
    uxpContext?: IContextProvider
}

const UXPShowcase: React.FunctionComponent<IUxp_showcaseProps> = (props) => {

    let _sections: any[] = [
        { id: "portal", label: "Portal" }
    ];
    let _sidebarContent: any[] = [
        {
            label: "Tooltip",
            link: "/tooltip",
            section: "portal"
        },
        {
            label: "Popover",
            link: "/popover",
            section: "portal"
        }
    ]

    // states
    let [sections, setSections] = React.useState<Array<any>>(_sections)
    let [sidebarContent, setSidebarContent] = React.useState<Array<any>>(_sidebarContent)
    let [searchText, setSearchText] = React.useState<string>("")

    React.useEffect(() => {
        // filter sidebar items 
        let regEx = new RegExp(searchText);
        let _filteredSections: any[] = [];
        let _filteredItems = _sidebarContent.filter((item: any) => {
        
            // TODO :: check keywords too
            let has = regEx.test(item.label.toLowerCase())

            if(has && _filteredSections.indexOf(item.section) == -1) {
                _filteredSections.push(item.section)
            }

            return has
        });

        setSections(_sections.filter((section:any) => (_filteredSections.indexOf(section.id) !== -1)))
        setSidebarContent(_filteredItems)

    }, [searchText])


    const renderSidebarItems = (section: string) => {
        let _links = sidebarContent.filter((sidebarItem: any) => sidebarItem.section == section)

        return <>
            {
                _links.map((link: any, key: number) => {
                    return <li key={key}> <Link to={link.link} >{link.label}</Link></li>
                })
            }
        </>
    }

    const renderSidebar = () => {
        return <ul className="sidebar">
            <li className="section">
                <SearchBox value={searchText} onChange={setSearchText} collapsed position="right" />
            </li>
            <li className="section"><Link to="/" >Introduction</Link></li>
            {
                sections.map((section: any, key: number) => {
                    return <>
                        <li className="section" key={key}> {section.label} </li>
                        {
                            renderSidebarItems(section.id)
                        }
                    </>
                })
            }
        </ul>
    }

    return (<div className="uxp-showcase-container">
        <Router>

            <div className="sidebar-container">
                {renderSidebar()}
            </div>

            <div className="content">
                <div className="uxp-showcase">
                    <Switch>
                        <Route exact path="/" component={Welcome} />
                        <Route exact path="/tooltip" component={ToolTipExample} />
                        <Route exact path="/popover" component={PopoverExample} />
                    </Switch>
                </div>
            </div>
        </Router>

    </div>)
};


registerUI({
    id: "uxp-showcase",
    component: UXPShowcase
})