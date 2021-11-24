import * as React from "react";
import { IContextProvider, registerUI } from './uxp';
import { SearchBox } from "uxp/components";

import { HashRouter as Router, Link, Route, Switch } from "react-router-dom";

import './styles.scss';

import ToolTipExample from "./components/Portal/ToolTipExample";
import Welcome from "./components/Welcome";
import PopoverExample from "./components/Portal/PopoverExample";
import ModalExample from "./components/Portal/ModalExample";
import FilterPanelExample from "./components/Portal/FilterPanelExample";
import ToastExample from "./components/Toast/ToastExample";
import LabelExample from "./components/Form/LabelExample";
import FormFieldExample from "./components/Form/FormFieldExample";
import FormFeedbackExample from "./components/Form/FormFeedbackExample";
import InputExample from "./components/Form/InputExample";
import SelectExample from "./components/Form/SelectExample";
import DynamicSelectExample from "./components/Form/DynamicSelectExample";
import CheckboxExample from "./components/Form/CheckboxExample";
import ToggleFilterExample from "./components/Form/ToggleFilterExample";
import DatePickerExample from "./components/Form/DatePickerExample";
import DateRangePickerExample from "./components/Form/DateRangePickerExample";
import WidgetWrapperExample from "./components/Widgets/WidgetWrapperExample";
import TimePickerExample from "./components/Form/TimePickerExample";
import TimeRagePickerExample from "./components/Form/TimeRagePickerExample";
import DateTimePickerExample from "./components/Form/DateTimePickerExample";
import SearchboxExample from "./components/Form/SearchboxExample";
import LinkWidgetContainerExample from "./components/Widgets/LinkWidgetContainerExample";
import TitleBarExample from "./components/Widgets/TitleBarExample";
import LoadingBlockExample from "./components/Widgets/LoadingBlockExample";
import NotificationBlockExample from "./components/Widgets/NotificationBlockExample";
import ProfileImageExample from "./components/Widgets/ProfileImageExample";
import ItemCardExample from "./components/Widgets/ItemCardExample";
import ButtonsExample from "./components/Widgets/ButtonsExample";
import DataListExample from "./components/Lists/DataListExample";
import DataGridExample from "./components/Lists/DataGridExample";
import ItemListCardExample from "./components/Lists/ItemListCardExample";
import PieChartExample from "./components/Charts/PieChartExample";
import TrendChartExample from "./components/Charts/TrendChartExample";
import MapComponentExample from "./components/Maps/MapComponentExample";
import MapComponentEditExample from "./components/Maps/MapComponentEditExample";
import DataTableExample from "./components/Lists/DataTableExample";
import DropDownButtonExample from "./components/Portal/DropDownButtonExample";
import RadialGaugeExample from "./components/Charts/RadialGaugeExample";
import PreLoadersExample from "./components/Widgets/PreLoadersExample";

interface IUxp_showcaseProps {
    uxpContext?: IContextProvider
}

const UXPShowcase: React.FunctionComponent<IUxp_showcaseProps> = (props) => {

    let _sections: any[] = [
        { id: "portal", label: "Portal" },
        { id: "toast", label: "Toasts" },
        { id: "form", label: "Form Components" },
        { id: "widgets", label: "Widget Components" },
        { id: "lists", label: "Lists" },
        { id: "charts", label: "Charts" },
        { id: "maps", label: "Maps" }

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
            label: "Dropdown Button",
            link: "/dropdown-button",
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
        {
            label: "Checkbox",
            link: "/checkbox",
            section: "form"
        },
        {
            label: "Toggle Filter",
            link: "/toggle-filter",
            section: "form"
        },
        {
            label: "Date Picker",
            link: "/date-picker",
            section: "form"
        },
        {
            label: "Date Range Picker",
            link: "/date-range-picker",
            section: "form"
        },
        {
            label: "Time picker",
            link: "/time-picker",
            section: "form"
        },
        {
            label: "Time Rne Picker",
            link: "/time-range-picker",
            section: "form"
        },
        {
            label: "Date Time Picker",
            link: "/date-time-picker",
            section: "form"
        },
        {
            label: "Search Box",
            link: "/search-box",
            section: "form"
        },

        // widgets
        {
            label: "Widget Wrapper",
            link: "/widget-wrapper",
            section: "widgets"
        },
        {
            label: "Link Widget Container",
            link: "/link-widget-container",
            section: "widgets"
        },
        {
            label: "Title Bar",
            link: "/title-bar",
            section: "widgets"
        },
        {
            label: "Loading Block",
            link: "/loading-block",
            section: "widgets"
        },
        {
            label: "Pre Loaders",
            link: "/pre-loaders",
            section: "widgets"
        },
        {
            label: "Notification Block",
            link: "/notification-block",
            section: "widgets"
        },
        {
            label: "Profile Image",
            link: "/profile-image",
            section: "widgets"
        },
        {
            label: "Item Card",
            link: "/item-card",
            section: "widgets"
        },
        {
            label: "Buttons",
            link: "/buttons",
            section: "widgets"
        },

        // lists 
        {
            label: "Data List",
            link: "/data-list",
            section: "lists"
        },
        {
            label: "Data Table",
            link: "/data-table",
            section: "lists"
        },
        {
            label: "Data Grid",
            link: "/data-grid",
            section: "lists"
        },
        {
            label: "Item List Card",
            link: "/item-list-card",
            section: "lists"
        },

        // charts
        {
            label: "Pie Chart",
            link: "/pie-chart",
            section: "charts"
        },
        {
            label: "Trend Chart",
            link: "/Trend-chart",
            section: "charts"
        },
        {
            label: "Radial Gauge",
            link: "/radial-gauge",
            section: "charts"
        },

        // maps 
        {
            label: "Map Component",
            link: "/map-component",
            section: "maps"
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

            if (has && _filteredSections.indexOf(item.section) == -1) {
                _filteredSections.push(item.section)
            }

            return has
        });

        setSections(_sections.filter((section: any) => (_filteredSections.indexOf(section.id) !== -1)))
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
                <SearchBox className="showcase" value={searchText} onChange={setSearchText} collapsed position="right" />
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
            <li>
                <a href="renderUI.html?id=map-edit">Edit Map</a>
            </li>
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
                        {/* portal */}
                        <Route exact path="/" component={Welcome} />
                        <Route exact path="/tooltip" component={ToolTipExample} />
                        <Route exact path="/popover" component={PopoverExample} />
                        <Route exact path="/dropdown-button" component={DropDownButtonExample} />
                        <Route exact path="/modal" component={ModalExample} />
                        <Route exact path="/filter-panel" component={FilterPanelExample} />

                        {/* Toast */}
                        <Route exact path="/toast" component={ToastExample} />

                        {/* form */}
                        <Route exact path="/label" component={LabelExample} />
                        <Route exact path="/form-field" component={FormFieldExample} />
                        <Route exact path="/form-feedback" component={FormFeedbackExample} />
                        <Route exact path="/input" component={InputExample} />
                        <Route exact path="/select" component={SelectExample} />
                        <Route exact path="/dynamic-select" component={DynamicSelectExample} />
                        <Route exact path="/checkbox" component={CheckboxExample} />
                        <Route exact path="/toggle-filter" component={ToggleFilterExample} />
                        <Route exact path="/date-picker" component={DatePickerExample} />
                        <Route exact path="/date-range-picker" component={DateRangePickerExample} />
                        <Route exact path="/time-picker" component={TimePickerExample} />
                        <Route exact path="/time-range-picker" component={TimeRagePickerExample} />
                        <Route exact path="/date-time-picker" component={DateTimePickerExample} />
                        <Route exact path="/search-box" component={SearchboxExample} />

                        {/* widgets */}
                        <Route exact path="/widget-wrapper" component={WidgetWrapperExample} />
                        <Route exact path="/link-widget-container" component={LinkWidgetContainerExample} />
                        <Route exact path="/title-bar" component={TitleBarExample} />
                        <Route exact path="/loading-block" component={LoadingBlockExample} />
                        <Route exact path="/pre-loaders" component={PreLoadersExample} />
                        <Route exact path="/notification-block" component={NotificationBlockExample} />
                        <Route exact path="/profile-image" component={ProfileImageExample} />
                        <Route exact path="/item-card" component={ItemCardExample} />
                        <Route exact path="/buttons" component={ButtonsExample} />

                        {/* lists */}
                        <Route exact path="/data-list" component={DataListExample} />
                        <Route exact path="/data-table" component={DataTableExample} />
                        <Route exact path="/data-grid" component={DataGridExample} />
                        <Route exact path="/item-list-card" component={ItemListCardExample} />

                        {/* charts */}
                        <Route exact path="/pie-chart" component={PieChartExample} />
                        <Route exact path="/trend-chart" component={TrendChartExample} />
                        <Route exact path="/radial-gauge" component={RadialGaugeExample} />

                        {/* map */}
                        <Route exact path="/map-component" component={MapComponentExample} />
                    </Switch>
                </div>
            </div>
        </Router>

    </div>)
};


registerUI({
    id: "uxp-showcase",
    label: "Showcase",
    component: UXPShowcase
})

registerUI({
    id: "map-edit",
    label: "Map Edit",
    component: MapComponentEditExample
})