import * as React from "react";
import { IContextProvider, registerUI } from './uxp';
import { Label, SearchBox } from "uxp/components";

import { HashRouter as Router, Link, Route, Switch } from "react-router-dom";

import ToolTipExample from "./components/Portal/ToolTipExample";
import Welcome from "./components/Welcome";
import PopoverExample from "./components/Portal/PopoverExample";
import ModalExample from "./components/Portal/ModalExample";
import FilterPanelExample from "./components/Portal/FilterPanelExample";
import ToastExample from "./components/Toast/ToastExample";
import LabelExample from "./components/Form/LabelExample";


import './styles.scss';
import FormFieldExample from "./components/Form/FormFieldExample";
import FormFeedbackExample from "./components/Form/FormFeedbackExample";
import InputExample from "./components/Form/InputExample";
import SelectExample from "./components/Form/SelectExample";
import DynamicSelectExample from "./components/Form/DynamicSelectExample";

interface IUxp_showcaseProps {
    uxpContext?: IContextProvider
}

const UXPShowcase: React.FunctionComponent<IUxp_showcaseProps> = (props) => {

    let _sections: any[] = [
        { id: "portal", label: "Portal" },
        { id: "toast", label: "Toasts" },
        { id: "form", label: "Form Components" }
    ];
    let _sidebarContent: any[] = [
        // portal
        {
            label: "Tooltip",
            link: "/tooltip",
            section: "portal"
        },
        {
            label: "Popover",
            link: "/popover",
            section: "portal"
        },
        {
            label: "Modal",
            link: "/modal",
            section: "portal"
        },
        {
            label: "Filter Panel",
            link: "/filter-panel",
            section: "portal"
        },

        // toast
        {
            label: "Toast Notifications",
            link: "/toast",
            section: "toast"
        },

        // form
        {
            label: "Label",
            link: "/label",
            section: "form"
        },
        {
            label: "Form Field",
            link: "/form-field",
            section: "form"
        },
        {
            label: "Form Feedback",
            link: "/form-feedback",
            section: "form"
        },
        {
            label: "Input",
            link: "/input",
            section: "form"
        },
        {
            label: "Select",
            link: "/select",
            section: "form"
        },
        {
            label: "Dynamic Select",
            link: "/dynamic-select",
            section: "form"
        },
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
        return <ul className="sidebar_showcase">
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
                        <Route exact path="/modal" component={ModalExample} />
                        <Route exact path="/filter-panel" component={FilterPanelExample} />
                        <Route exact path="/toast" component={ToastExample} />

                        <Route exact path="/label" component={LabelExample} />
                        <Route exact path="/form-field" component={FormFieldExample} />
                        <Route exact path="/form-feedback" component={FormFeedbackExample} />
                        <Route exact path="/input" component={InputExample} />
                        <Route exact path="/select" component={SelectExample} />
                        <Route exact path="/dynamic-select" component={DynamicSelectExample} />
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