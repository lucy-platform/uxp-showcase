import * as React from "react";
import { IContextProvider, registerUI, } from './uxp';
import classNames from 'classnames';
import './styles.scss';
import { Modal, Button, Tooltip, Popover, FilterPanel, FormField, Label, Select, Input, ITrendSeries, ItemCard, useToast, Checkbox, FormFeedback, LinkWidgetContainer, ToggleFilter, Loading, NotificationBlock, PieChartComponent, TrendChartComponent, ProfileImage, TitleBar, DataList, DataGrid, WidgetWrapper, DatePicker, DateRangePicker, TimePicker, TimeRangePicker, DateTimePicker, ItemListCard, IconButton, SearchBox, AsyncButton, MapComponent, DynamicSelect } from "uxp/components";
import { addDays, endOfMonth } from 'date-fns';

interface IUxp_showcaseProps {
    uxpContext?: IContextProvider
}

interface IState { }

interface IRange {
    start: string | Date,
    end: string | Date
}

const UXPShowcase: React.FunctionComponent<IUxp_showcaseProps> = (props) => {

    //states
    let [showModal, setShowModal] = React.useState(false);
    let [showLinkWidget, setShowLinkWidget] = React.useState(false);
    let [autoClose, setAutoClose] = React.useState(true);
    let [closeAfter, setCloseAfter] = React.useState<number>(2000);
    let [inputValue, setInputValue] = React.useState<string | null>("sample text");
    let [toggleFilterValue, setToggleFilterValue] = React.useState<string>("month");
    let [selected, setSelected] = React.useState<any>(null);
    let [buttonLoading, setButtonLoading] = React.useState<boolean>(false)

    // checkbox state
    let [defCheckState, setDefCheckState] = React.useState<boolean>(false);
    let [checkedCheckState, setCheckedCheckState] = React.useState<boolean>(true);

    let [startDate, setStartDate] = React.useState<string | Date>(new Date());
    let [endDate, setEndDate] = React.useState<string | Date>(new Date());

    let [range, setRange] = React.useState<IRange>({ start: new Date(), end: null })
    let [date, setDate] = React.useState<Date>(new Date())

    let Toast = useToast();

    const onClickSidebar = (e: React.MouseEvent<HTMLElement>) => {
        let element = e.currentTarget;
        let dataValue = element.dataset.value;

        document.getElementById(dataValue).scrollIntoView({ "behavior": "smooth" })
    }

    const onChangeCheckbox = (checked: boolean) => {
        setCheckedCheckState(checked)
    }
    const onChangeCheckboxDef = (checked: boolean) => {
        setDefCheckState(checked);
    }

    // datalist
    const renderItem = (item: any, key: number) => {
        return (<div className="list-item">
            <div className="req">{item.request}</div>
            <div className="user">{item.user}</div>
            <div className="section">{item.section}</div>
            <div className="status">{item.status}</div>
            <div className="date">{item.date}</div>
        </div>)
    }

    const DATA = [
        {

            request: "AC Extension request #81",
            user: "Johnson & Johnson",
            section: "Zone 3",
            status: "pending",
            date: "23/0702020"
        },
        {
            request: "AC Extension request #80",
            user: "Johnson & Johnson",
            section: "Parking 1",
            status: "approved",
            date: "23/0702020"
        },
        {
            request: "AC Extension request #79",
            user: "Johnson & Johnson",
            section: "Parking 1",
            status: "approved",
            date: "23/0702020"
        },
        {
            request: "AC Extension request #78",
            user: "Johnson & Johnson",
            section: "Facility one",
            status: "rejected",
            date: "23/0702020"
        },
        {
            request: "AC Extension request #77",
            user: "Johnson & Johnson",
            section: "Zone 3",
            status: "pending",
            date: "23/0702020"
        },
        {
            request: "AC Extension request #76",
            user: "Johnson & Johnson",
            section: "Facility 12",
            status: "approved",
            date: "23/0702020"
        },
        {
            request: "AC Extension request #75",
            user: "Johnson & Johnson ",
            section: "Zone 3",
            status: "pending",
            date: "23/0702020"
        },
        {
            request: "AC Extension request #74",
            user: "Johnson & Johnson",
            section: "Parking 1",
            status: "approved",
            date: "23/0702020"
        },
        {
            request: "AC Extension request #73",
            user: "Johnson & Johnson",
            section: "Facility one",
            status: "rejected",
            date: "23/0702020"
        },
        {
            request: "AC Extension request#72",
            user: "Johnson & Johnson",
            section: "Zone 3",
            status: "approved",
            date: "23/0702020"
        },
        {
            request: "AC Extension request #71",
            user: "Johnson & Johnson ",
            section: "Facility 12",
            status: "rejected",
            date: "23/0702020"
        },
        {

            request: "AC Extension request #70",
            user: "Johnson & Johnson",
            section: "Zone 3",
            status: "pending",
            date: "23/0702020"
        },
        {
            request: "AC Extension request #69",
            user: "Johnson & Johnson",
            section: "Parking 1",
            status: "approved",
            date: "23/0702020"
        },
        {
            request: "AC Extension request #68",
            user: "Johnson & Johnson",
            section: "Parking 1",
            status: "approved",
            date: "23/0702020"
        },
        {
            request: "AC Extension request #67",
            user: "Johnson & Johnson",
            section: "Facility one",
            status: "rejected",
            date: "23/0702020"
        },
        {
            request: "AC Extension request #66",
            user: "Johnson & Johnson",
            section: "Zone 3",
            status: "pending",
            date: "23/0702020"
        },
        {

            request: "AC Extension request #65",
            user: "Johnson & Johnson",
            section: "Zone 3",
            status: "pending",
            date: "23/0702020"
        },
        {
            request: "AC Extension request #64",
            user: "Johnson & Johnson",
            section: "Parking 1",
            status: "approved",
            date: "23/0702020"
        },
        {
            request: "AC Extension request #63",
            user: "Johnson & Johnson",
            section: "Parking 1",
            status: "approved",
            date: "23/0702020"
        },
        {
            request: "AC Extension request #62",
            user: "Johnson & Johnson",
            section: "Facility one",
            status: "rejected",
            date: "23/0702020"
        },
        {
            request: "AC Extension request #61",
            user: "Johnson & Johnson",
            section: "Zone 3",
            status: "pending",
            date: "23/0702020"
        },
        {
            request: "AC Extension request #60",
            user: "Johnson & Johnson",
            section: "Facility 12",
            status: "approved",
            date: "23/0702020"
        },
        {
            request: "AC Extension request #59",
            user: "Johnson & Johnson ",
            section: "Zone 3",
            status: "pending",
            date: "23/0702020"
        },
        {
            request: "AC Extension request #58",
            user: "Johnson & Johnson",
            section: "Parking 1",
            status: "approved",
            date: "23/0702020"
        },
        {
            request: "AC Extension request #57",
            user: "Johnson & Johnson",
            section: "Facility one",
            status: "rejected",
            date: "23/0702020"
        },
        {
            request: "AC Extension request#56",
            user: "Johnson & Johnson",
            section: "Zone 3",
            status: "approved",
            date: "23/0702020"
        },
        {
            request: "AC Extension request #55",
            user: "Johnson & Johnson ",
            section: "Facility 12",
            status: "rejected",
            date: "23/0702020"
        },
        {

            request: "AC Extension request #54",
            user: "Johnson & Johnson",
            section: "Zone 3",
            status: "pending",
            date: "23/0702020"
        },
        {
            request: "AC Extension request #53",
            user: "Johnson & Johnson",
            section: "Parking 1",
            status: "approved",
            date: "23/0702020"
        },
        {
            request: "AC Extension request #52",
            user: "Johnson & Johnson",
            section: "Parking 1",
            status: "approved",
            date: "23/0702020"
        },
        {
            request: "AC Extension request #51",
            user: "Johnson & Johnson",
            section: "Facility one",
            status: "rejected",
            date: "23/0702020"
        },
        {
            request: "AC Extension request #50",
            user: "Johnson & Johnson",
            section: "Zone 3",
            status: "pending",
            date: "23/0702020"
        },
        {

            request: "AC Extension request #49",
            user: "Johnson & Johnson",
            section: "Zone 3",
            status: "pending",
            date: "23/0702020"
        },
        {
            request: "AC Extension request #48",
            user: "Johnson & Johnson",
            section: "Parking 1",
            status: "approved",
            date: "23/0702020"
        },
        {
            request: "AC Extension request #47",
            user: "Johnson & Johnson",
            section: "Parking 1",
            status: "approved",
            date: "23/0702020"
        },
        {
            request: "AC Extension request #46",
            user: "Johnson & Johnson",
            section: "Facility one",
            status: "rejected",
            date: "23/0702020"
        },
        {
            request: "AC Extension request #45",
            user: "Johnson & Johnson",
            section: "Zone 3",
            status: "pending",
            date: "23/0702020"
        },
        {
            request: "AC Extension request #44",
            user: "Johnson & Johnson",
            section: "Facility 12",
            status: "approved",
            date: "23/0702020"
        },
        {
            request: "AC Extension request #43",
            user: "Johnson & Johnson ",
            section: "Zone 3",
            status: "pending",
            date: "23/0702020"
        },
        {
            request: "AC Extension request #42",
            user: "Johnson & Johnson",
            section: "Parking 1",
            status: "approved",
            date: "23/0702020"
        },
        {
            request: "AC Extension request #41",
            user: "Johnson & Johnson",
            section: "Facility one",
            status: "rejected",
            date: "23/0702020"
        },
        {
            request: "AC Extension request#40",
            user: "Johnson & Johnson",
            section: "Zone 3",
            status: "approved",
            date: "23/0702020"
        },
        {
            request: "AC Extension request #39",
            user: "Johnson & Johnson ",
            section: "Facility 12",
            status: "rejected",
            date: "23/0702020"
        },
        {

            request: "AC Extension request #38",
            user: "Johnson & Johnson",
            section: "Zone 3",
            status: "pending",
            date: "23/0702020"
        },
        {
            request: "AC Extension request #37",
            user: "Johnson & Johnson",
            section: "Parking 1",
            status: "approved",
            date: "23/0702020"
        },
        {
            request: "AC Extension request #36",
            user: "Johnson & Johnson",
            section: "Parking 1",
            status: "approved",
            date: "23/0702020"
        },
        {
            request: "AC Extension request #35",
            user: "Johnson & Johnson",
            section: "Facility one",
            status: "rejected",
            date: "23/0702020"
        },
        {
            request: "AC Extension request #34",
            user: "Johnson & Johnson",
            section: "Zone 3",
            status: "pending",
            date: "23/0702020"
        }

    ];

    const GridData = [
        {
            icon: "https://static.iviva.com/images/Adani_UXP/QR_badge_icon.svg",
            title: "Item Card",
            subTitle: "Item card with image/icon Item card with image/icon"
        },
        {
            icon: "",
            name: "Dinesh Gamage",
            title: "Item Card",
            subTitle: "Item card with name"
        },
        {
            icon: "https://static.iviva.com/images/Adani_UXP/QR_badge_icon.svg",
            title: "Item Card Title & Icon",
            subTitle: ""
        },
        {
            icon: "https://static.iviva.com/images/Adani_UXP/QR_badge_icon.svg",
            title: "",
            subTitle: "Item Card sub Title & Icon"
        },
        {
            title: "Item Card",
            subTitle: "Item card without image/icon"
        },
        {
            title: "Item Card Title only",
        },
        {
            subTitle: "Item card sub title only"
        },
        {
            icon: "https://static.iviva.com/images/Adani_UXP/QR_badge_icon.svg",
            title: "QR Code",
            subTitle: "scan your code"
        },
        {
            icon: "https://static.iviva.com/images/Adani_UXP/QR_badge_icon.svg",
        },
        null

    ]

    const renderGridItem = (item: any, key: number) => {
        return (<ItemCard
            item={item}
            imageField="icon"
            titleField="title"
            subTitleField="subTitle"
            nameField="name"
        />)
    }


    const getDataItems = (max: number, pageToken: string) => {
        let last = 0

        if (pageToken !== null) last = parseInt(pageToken);

        console.log('last : ', last)
        let p = new Promise<{ items: Array<any>, pageToken: string }>((resolve, reject) => {
            let data = DATA.filter((item: any, key: number) => (key >= last && key < last + max));
            let response = { items: data, pageToken: (last + data.length).toString() }
            console.log("res showcase : ", response)
            resolve(response);
        })

        return p;
    }

    const TrendData: ITrendSeries[] = [
        {
            unit: "A",
            lineColor: "#ff7300",
            data: [
                { time: "2020/07/20", value: 200 },
                { time: "2020/08/20", value: 100 },
                { time: "2020/09/20", value: 50 },
                { time: "2020/10/20", value: 300 },
                { time: "2020/11/20", value: 700 },
                { time: "2020/12/20", value: 90 }
            ],
            type: "line"
        },
        {
            unit: "B",
            lineColor: "#413ea0",
            fillColor: "#8884d8",
            data: [
                { time: "2014/06/21", value: 50 },
                { time: "2020/07/20", value: 50 },
                { time: "2020/08/20", value: 30 },
                { time: "2020/09/20", value: 90 },
                { time: "2020/10/20", value: 300 },
                { time: "2020/11/20", value: 100 },
                { time: "2020/12/20", value: 90 }
            ],
            type: "area"
        }
    ]

    let Names = [
        "Dinesh Gamage",
        "Haran Shiwanan",
        "Chathuri Priyadarshanee",
        "Dharmawathee",
        "Amila Sandaruwan",
        "Amila Isurunath",
        "Amal Perera",
        "Amali Anuruddika",
        "Bhanuka Wanigasekara",
        "Bhanuka Rajapakshe",
        "Bathiya Santhush",
        "Bagya Siriwardhena",
        "Chethiya Perera",
        "Ayodya Karunanayaka",
        "Lakmindi Lamahewa",
        "lahiru Eranga",
        "Lahiru Kulathunga",
        "Lahiru Epa",
        "Lahiru",
        "Mahela Jayawardena",
        "Kumar Sangakkara",
        "Sanath Jayasooriya",
        "Chathura Ellawala",
        "Chathura Silva",
        "Amal Perera",
        "Nethushi Denuwan",
        "Meenakshi Sundaram",
        "Karthik Acrot"
    ]

    let DynamicOptions = [
        { label: "Sri Lanka", value: "Sri Lanka" },
        { label: "India", value: "India" },
        { label: "Canada", value: "Canada" },
        { label: "China", value: "China" },
        { label: "Japan", value: "Japan" },
        { label: "Singapore", value: "Singapore" },
        { label: "Australia", value: "Australia" },
        { label: "Pakistan", value: "Pakistan" },
        { label: "Russia", value: "Russia" },
        { label: "America", value: "America" },
        { label: "England", value: "England" },
        { label: "New Zealand", value: "New Zealand" },
        { label: "Afghanistan", value: "Afghanistan" },
    ]

    const getOptions = (max: number, pageToken: string, args?: any) => {
        let last = 0

        if (pageToken !== null) last = parseInt(pageToken);

        let p = new Promise<{ items: Array<any>, pageToken: string }>((resolve, reject) => {
            let data = [];

            if (args && args.query && args.query.trim().length > 0) {
                let regEx = new RegExp(args.query)
                data = DynamicOptions.filter((opt: any) => regEx.test(opt.label.toLowerCase()))
                data = data.slice(last, last + max)
            }
            else {
                data = DynamicOptions.filter((item: any, key: number) => (key >= last && key < last + max));
            }
            let response = { items: data, pageToken: (last + data.length).toString() }
            resolve(response);
        })

        return p;
    }



    return (<div className={classNames("uxp-showcase-container")}>

        <div className="sidebar-container">
            <ul className="sidebar">

                <li className="section" onClick={onClickSidebar} data-value="portal">Portal</li>

                <li onClick={onClickSidebar} data-value="modal">Modal</li>
                <li onClick={onClickSidebar} data-value="tooltip">Tooltip</li>
                <li onClick={onClickSidebar} data-value="popover">popover</li>
                <li onClick={onClickSidebar} data-value="filter-panel">filter Panel</li>
                <li onClick={onClickSidebar} data-value="toasts">Toasts</li>

                <li className="section" onClick={onClickSidebar} data-value="form">Form Components</li>

                <li onClick={onClickSidebar} data-value="label">Label</li>
                <li onClick={onClickSidebar} data-value="form-field">Form field</li>
                <li onClick={onClickSidebar} data-value="form-feedback">Form feedback</li>
                <li onClick={onClickSidebar} data-value="input">Input box</li>
                <li onClick={onClickSidebar} data-value="select">select box</li>
                <li onClick={onClickSidebar} data-value="checkbox">checkbox</li>

                <li className="section" onClick={onClickSidebar} data-value="widget-components">Widget Components</li>

                <li onClick={onClickSidebar} data-value="link-widget-container">Link Widget container</li>
                <li onClick={onClickSidebar} data-value="toggle-filter">Toggle Filter</li>
                <li onClick={onClickSidebar} data-value="loading">Loading Block</li>
                <li onClick={onClickSidebar} data-value="notification">Notification Block</li>
                <li onClick={onClickSidebar} data-value="pie-chart">Pie Chart</li>
                <li onClick={onClickSidebar} data-value="trend-chart">Trend Chart</li>
                <li onClick={onClickSidebar} data-value="profile-image">Profile Image</li>
                <li onClick={onClickSidebar} data-value="item-card">Item Card</li>
                <li onClick={onClickSidebar} data-value="title-bar">Title Bar</li>
                <li onClick={onClickSidebar} data-value="data-list">Data List</li>
                <li onClick={onClickSidebar} data-value="data-grid">Data Grid</li>
                <li onClick={onClickSidebar} data-value="widget-wrapper">Widget Wrapper</li>
                <li onClick={onClickSidebar} data-value="date-picker">Date Picker</li>
                <li onClick={onClickSidebar} data-value="date-range-picker">Date Range Picker</li>
                <li onClick={onClickSidebar} data-value="time-picker">Time Picker</li>
                <li onClick={onClickSidebar} data-value="time-range-picker">Time Range Picker</li>
                <li onClick={onClickSidebar} data-value="date-time-picker">Date Time Picker</li>
                <li onClick={onClickSidebar} data-value="item-list-card">Item List Card</li>
                <li onClick={onClickSidebar} data-value="button">Button</li>
                <li onClick={onClickSidebar} data-value="search-box">Search Box</li>
                <li onClick={onClickSidebar} data-value="map">Map</li>
            </ul>
        </div>

        <div className="content">
            <div className="uxp-showcase">

                <h3 id="portal">Portal</h3>
                <div className="showcase-section inline bgWhite" id="modal">
                    <h4>Modal</h4>
                    <div className="example">
                        <button className="btn showcase" onClick={() => setShowModal(true)}>Click to Show Modal</button>

                        <Modal
                            show={showModal}
                            onOpen={() => { }}
                            onClose={() => setShowModal(false)}
                        >
                            <p>This is a sample modal</p>
                        </Modal>
                    </div>
                </div>

                <div className="showcase-section inline bgWhite" id="tooltip">
                    <h4>Tooltip</h4>
                    <div className="example">
                        <Tooltip content="This is a tooltip">
                            <button className="btn showcase" >Hover to Show Tooltip</button>
                        </Tooltip>
                    </div>
                </div>


                <div className="showcase-section inline bgWhite" id="popover">
                    <h4>Popover</h4>
                    <div className="example">
                        <Popover title="Popover" content="This is a popover">
                            <button className="btn showcase" >Click to Show popover</button>
                        </Popover>
                    </div>
                </div>

                <div className="showcase-section inline bgWhite" id="filter-panel">
                    <h4>Filter Panel</h4>
                    <div className="example">
                        <FilterPanel
                            enableClear={inputValue?.length > 0 || selected != null}
                            onClear={() => { setInputValue(""); setSelected(null) }} >
                            <FormField className="no-padding mb-only">
                                <Label>Sort By</Label>
                                <Select
                                    selected={selected}
                                    options={[
                                        { label: "Name", value: "op-1" },
                                        { label: "Date", value: "op-2" },
                                    ]}
                                    onChange={(value) => { setSelected(value) }}
                                    placeholder=" -- select --"
                                    isValid={selected ? selected?.length > 0 : null}
                                />
                            </FormField>
                            <FormField className="no-padding mb-only">
                                <Label>Name</Label>
                                <Input
                                    type="text"
                                    value={inputValue}
                                    onChange={(value) => { setInputValue(value) }}
                                    isValid={inputValue ? inputValue.trim().length > 0 : null}
                                    hasIndicator
                                    placeholder="placeholder"
                                />
                            </FormField>
                        </FilterPanel>
                    </div>
                </div>
                <hr />

                <h3>Toasts</h3>
                <div className="showcase-section  bgWhite" id="toasts">
                    <div className="example">
                        <FormField backgroundColor="white">
                            <FormField inline backgroundColor="white">
                                <Checkbox
                                    onChange={(checked) => setAutoClose(checked)}
                                    checked={autoClose}
                                    label="Auto Close"
                                />
                            </FormField>
                            <FormField inline backgroundColor="white">
                                <Label inline>Close After</Label>
                                <Input
                                    type="number"
                                    value={closeAfter.toString()}
                                    onChange={(value) => { setCloseAfter(parseInt(value)) }}
                                    inline
                                />
                            </FormField>
                        </FormField>
                        <button className="btn showcase" onClick={() => Toast.success({ "content": "Success toast message", "autoClose": autoClose, closeAfter: closeAfter })}>Success Toast</button>
                        <button className="btn showcase" onClick={() => Toast.error({ "content": "Error toast message", "autoClose": autoClose, closeAfter: closeAfter })}>Error Toast</button>
                        <button className="btn showcase" onClick={() => Toast.warning({ "content": "Warning toast message", "autoClose": autoClose, closeAfter: closeAfter })}>Warning Toast</button>
                        <button className="btn showcase" onClick={() => Toast.info({ "content": "Info toast message", "autoClose": autoClose, closeAfter: closeAfter })}>Info Toast</button>
                    </div>
                </div>
                <hr />

                <h3 id="form">Form components</h3>
                <div className="showcase-section bgWhite" id="label">
                    <h4>Label</h4>
                    <div className="example">
                        <Label>This is a Label</Label>
                    </div>
                </div>

                <div className="showcase-section bgWhite" id="form-field">
                    <h4>Form Field</h4>
                    <div className="example">
                        <FormField inline backgroundColor="white"> This is an in-line form field </FormField>
                        <FormField> This is a form field </FormField>
                    </div>
                </div>

                <div className="showcase-section bgWhite" id="form-feedback">
                    <h4>Form Feedback</h4>
                    <div className="example">
                        <FormFeedback validInput>Form feedback ( valid )</FormFeedback>
                        <FormFeedback validInput={false}>Form feedback ( invalid )</FormFeedback>
                    </div>
                </div>

                <div className="showcase-section bgWhite" id="input">
                    <h4>Input</h4>
                    <div className="example">
                        <FormField inline className="showcase-input" backgroundColor="white" key={0}>
                            <Label>Text input ( default )</Label>
                            <Input
                                type="text"
                                value={inputValue}
                                onChange={(value) => setInputValue(value)}
                                hasIndicator={true}
                                placeholder="Input placeholder"
                            />
                        </FormField>

                        <FormField inline className="showcase-input" backgroundColor="white" key={1}>
                            <Label>Text input ( valid )</Label>
                            <Input
                                type="text"
                                value={inputValue}
                                onChange={(value) => setInputValue(value)}
                                hasIndicator={true}
                                isValid
                                placeholder="Input placeholder"
                            />
                        </FormField>

                        <FormField inline className="showcase-input" backgroundColor="white" key={2}>
                            <Label>Text input ( invalid )</Label>
                            <Input
                                type="text"
                                value={inputValue}
                                onChange={(value) => setInputValue(value)}
                                hasIndicator={true}
                                isValid={false}
                                placeholder="Input placeholder"
                            />
                        </FormField>
                    </div>
                </div>

                <div className="showcase-section bgWhite" id="select">
                    <h4>Select</h4>
                    <div className="example">
                        <FormField inline className="showcase-input" backgroundColor="white" key={0}>
                            <Label>Select box ( default )</Label>
                            <Select
                                selected={selected}
                                options={[
                                    { label: "Option 01", value: "op-1" },
                                    { label: "Option 02", value: "op-2" },
                                    { label: "Option 03", value: "op-3" },
                                ]}
                                onChange={(value) => { setSelected(value) }}
                                placeholder=" -- select --"
                            />
                        </FormField>

                        <FormField inline className="showcase-input" backgroundColor="white" key={1}>
                            <Label>Select box ( valid )</Label>
                            <Select
                                selected={selected}
                                options={[
                                    { label: "Option 01", value: "op-1" },
                                    { label: "Option 02", value: "op-2" },
                                    { label: "Option 03", value: "op-3" },
                                ]}
                                onChange={(value) => { setSelected(value) }}
                                placeholder=" -- select --"
                                isValid
                            />
                        </FormField>

                        <FormField inline className="showcase-input" backgroundColor="white" key={2}>
                            <Label>Select box ( invalid )</Label>
                            <Select
                                selected={selected}
                                options={[
                                    { label: "Option 01", value: "op-1" },
                                    { label: "Option 02", value: "op-2" },
                                    { label: "Option 03", value: "op-3" },
                                ]}
                                onChange={(value) => { setSelected(value) }}
                                placeholder=" -- select --"
                                isValid={false}
                            />
                        </FormField>


                    </div>
                </div>

                <div className="showcase-section bgWhite" id="select">
                    <h4>Dynamic Select</h4>
                    <div className="example">
                        <FormField inline className="showcase-input" backgroundColor="white">
                            <Label>Select box ( default )</Label>
                            <DynamicSelect
                                selected={selected?.label}
                                options={getOptions}
                                onChange={(value) => { setSelected(value); console.log(value) }}
                                placeholder=" -- select --"
                                labelField="label"
                            />
                        </FormField>


                    </div>
                </div>

                <div className="showcase-section bgWhite" id="checkbox">
                    <h4>Checkbox</h4>
                    <div className="example">

                        {/* default */}
                        <FormField inline className="showcase-checkbox" backgroundColor="white" key={0}>
                            <Label>Checkbox ( default - un-checked )</Label>
                            <Checkbox
                                onChange={onChangeCheckboxDef}
                                checked={defCheckState}
                                label='Sample Checkbox'
                            />
                        </FormField>

                        <FormField inline className="showcase-checkbox" backgroundColor="white" key={1}>
                            <Label>Checkbox ( default - checked )</Label>
                            <Checkbox
                                onChange={onChangeCheckbox}
                                checked={checkedCheckState}
                                label='Sample Checkbox'
                            />
                        </FormField>

                        <FormField inline className="showcase-checkbox" backgroundColor="white" key={2}>
                            <Label>Checkbox ( valid - checked )</Label>
                            <Checkbox
                                onChange={onChangeCheckbox}
                                checked={checkedCheckState}
                                label='Sample Checkbox'
                                isValid
                            />
                        </FormField>

                        <FormField inline className="showcase-checkbox" backgroundColor="white" key={3}>
                            <Label>Checkbox ( invalid - checked )</Label>
                            <Checkbox
                                onChange={onChangeCheckbox}
                                checked={checkedCheckState}
                                label='Sample Checkbox'
                                isValid={false}
                            />
                        </FormField>

                        {/* bordered */}
                        <FormField inline className="showcase-checkbox" backgroundColor="white" key={4}>
                            <Label>Checkbox ( bordered - unchecked )</Label>
                            <Checkbox
                                onChange={onChangeCheckboxDef}
                                checked={defCheckState}
                                label='Sample Checkbox'
                                type="bordered"
                            />
                        </FormField>

                        <FormField inline className="showcase-checkbox" backgroundColor="white" key={5}>
                            <Label>Checkbox ( bordered - checked )</Label>
                            <Checkbox
                                onChange={onChangeCheckbox}
                                checked={checkedCheckState}
                                label='Sample Checkbox'
                                type="bordered"
                            />
                        </FormField>

                        <FormField inline className="showcase-checkbox" backgroundColor="white" key={6}>
                            <Label>Checkbox ( bordered - valid - checked )</Label>
                            <Checkbox
                                onChange={onChangeCheckbox}
                                checked={checkedCheckState}
                                label='Sample Checkbox'
                                type="bordered"
                                isValid
                            />
                        </FormField>

                        <FormField inline className="showcase-checkbox" backgroundColor="white" key={7}>
                            <Label>Checkbox ( bordered - invalid - checked )</Label>
                            <Checkbox
                                onChange={onChangeCheckbox}
                                checked={checkedCheckState}
                                label='Sample Checkbox'
                                type="bordered"
                                isValid={false}
                            />
                        </FormField>

                        {/* different icons */}
                        <FormField inline className="showcase-checkbox" backgroundColor="white" key={8}>
                            <Label>Checkbox ( different icons - unchecked )</Label>
                            <Checkbox
                                onChange={onChangeCheckboxDef}
                                checked={defCheckState}
                                label='Sample Checkbox'
                                type="change-icon"
                            />
                        </FormField>

                        <FormField inline className="showcase-checkbox" backgroundColor="white" key={9}>
                            <Label>Checkbox ( different icons - checked )</Label>
                            <Checkbox
                                onChange={onChangeCheckbox}
                                checked={checkedCheckState}
                                label='Sample Checkbox'
                                type="change-icon"
                            />
                        </FormField>

                        <FormField inline className="showcase-checkbox" backgroundColor="white" key={10}>
                            <Label>Checkbox ( different icons - valid - checked )</Label>
                            <Checkbox
                                onChange={onChangeCheckbox}
                                checked={checkedCheckState}
                                label='Sample Checkbox'
                                type="change-icon"
                                isValid
                            />
                        </FormField>

                        <FormField inline className="showcase-checkbox" backgroundColor="white" key={11}>
                            <Label>Checkbox ( different icons - invalid - checked )</Label>
                            <Checkbox
                                onChange={onChangeCheckbox}
                                checked={checkedCheckState}
                                label='Sample Checkbox'
                                type="change-icon"
                                isValid={false}
                            />
                        </FormField>


                        {/* toggle line */}
                        <FormField inline className="showcase-checkbox" backgroundColor="white" key={12}>
                            <Label>Checkbox ( toggle - unchecked )</Label>
                            <Checkbox
                                onChange={onChangeCheckboxDef}
                                checked={defCheckState}
                                label='Sample Checkbox'
                                type="switch-line"
                            />
                        </FormField>

                        <FormField inline className="showcase-checkbox" backgroundColor="white" key={13}>
                            <Label>Checkbox ( toggle - checked )</Label>
                            <Checkbox
                                onChange={onChangeCheckbox}
                                checked={checkedCheckState}
                                label='Sample Checkbox'
                                type="switch-line"
                            />
                        </FormField>

                        <FormField inline className="showcase-checkbox" backgroundColor="white" key={14}>
                            <Label>Checkbox ( toggle - valid - checked )</Label>
                            <Checkbox
                                onChange={onChangeCheckbox}
                                checked={checkedCheckState}
                                label='Sample Checkbox'
                                type="switch-line"
                                isValid
                            />
                        </FormField>

                        <FormField inline className="showcase-checkbox" backgroundColor="white" key={15}>
                            <Label>Checkbox ( toggle - invalid - checked )</Label>
                            <Checkbox
                                onChange={onChangeCheckbox}
                                checked={checkedCheckState}
                                label='Sample Checkbox'
                                type="switch-line"
                                isValid={false}
                            />
                        </FormField>


                        {/* toggle line */}
                        <FormField inline className="showcase-checkbox" backgroundColor="white" key={16}>
                            <Label>Checkbox ( toggle - unchecked )</Label>
                            <Checkbox
                                onChange={onChangeCheckboxDef}
                                checked={defCheckState}
                                label='Sample Checkbox'
                                type="switch-box"
                            />
                        </FormField>

                        <FormField inline className="showcase-checkbox" backgroundColor="white" key={17}>
                            <Label>Checkbox ( toggle - checked )</Label>
                            <Checkbox
                                onChange={onChangeCheckbox}
                                checked={checkedCheckState}
                                label='Sample Checkbox'
                                type="switch-box"
                            />
                        </FormField>

                        <FormField inline className="showcase-checkbox" backgroundColor="white" key={18}>
                            <Label>Checkbox ( toggle - valid - checked )</Label>
                            <Checkbox
                                onChange={onChangeCheckbox}
                                checked={checkedCheckState}
                                label='Sample Checkbox'
                                type="switch-box"
                                isValid
                            />
                        </FormField>

                        <FormField inline className="showcase-checkbox" backgroundColor="white" key={19}>
                            <Label>Checkbox ( toggle - invalid - checked )</Label>
                            <Checkbox
                                onChange={onChangeCheckbox}
                                checked={checkedCheckState}
                                label='Sample Checkbox'
                                type="switch-box"
                                isValid={false}
                            />
                        </FormField>

                    </div>
                </div>

                <hr />

                <h3 id="widget-components">Widget Components</h3>
                <div className="showcase-section inline bgWhite" id="link-widget-container">
                    <h4>Link Widget Container</h4>

                    <div className="example">
                        <button className="btn showcase" onClick={() => setShowLinkWidget(true)}>Click to Show Link Widget Container</button>

                        <LinkWidgetContainer
                            show={showLinkWidget}
                            onClose={() => setShowLinkWidget(false)}
                            title="Link Widget Container"
                        >
                        </LinkWidgetContainer>

                    </div>
                </div>

                <div className="showcase-section inline bgWhite" id="toggle-filter">
                    <h4>Toggle Filter</h4>

                    <div className="example">
                        <ToggleFilter
                            options={[
                                { label: "Month", value: "month" },
                                { label: "Week", value: "week" },
                                { label: "Day", value: "day" },
                            ]}
                            value={toggleFilterValue}
                            onChange={(value) => { setToggleFilterValue(value) }}
                        />
                    </div>
                </div>

                <div className="showcase-section inline bgWhite" id="loading" >
                    <h4>Loading Block</h4>

                    <div className="example">
                        <Loading />
                    </div>
                </div>

                <div className="showcase-section inline bgWhite" id="notification" >
                    <h4>Notification Block</h4>

                    <div className="example">
                        <NotificationBlock message="-- End Of Content --" class="end-of-content" />
                    </div>
                </div>

                <div className="showcase-section inline bgWhite" id="pie-chart" >
                    <h4>Pie Chart</h4>

                    <div className="example" style={{ width: 300, height: 300 }}>
                        <PieChartComponent
                            data={[
                                { name: 'Group A', value: 400, color: "#0088FE" },
                                { name: 'Group B', value: 300, color: "#00C49F" },
                                { name: 'Group C', value: 300, color: "#FFBB28" },
                                { name: 'Group D', value: 200, color: "#FF8042" }
                            ]}
                            fillColor="#8884d8"
                        />
                    </div>
                </div>

                <div className="showcase-section inline bgWhite" id="trend-chart" style={{ width: '50%', height: 400 }} >
                    <h4>Trend Chart</h4>

                    <div className="example"  >
                        <TrendChartComponent
                            data={TrendData}
                        //onShowTooltip={(data) => <CustomTooltip data={data} />}
                        />
                    </div>
                </div>

                <div className="showcase-section inline bgWhite" id="profile-image">
                    <h4>Profile Image (placeholder)</h4>
                    <div className="example">
                        <ProfileImage />
                    </div>
                </div>

                <div className="showcase-section inline bgWhite">
                    <h4>Profile Image (image)</h4>
                    <div className="example">
                        <ProfileImage image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABQCAYAAABh05mTAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAaGVYSWZNTQAqAAAACAAEAQYAAwAAAAEAAgAAARIAAwAAAAEAAQAAASgAAwAAAAEAAgAAh2kABAAAAAEAAAA+AAAAAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAABRoAMABAAAAAEAAABQAAAAADS5AjcAAALiaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDx0aWZmOlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb24+MjwvdGlmZjpQaG90b21ldHJpY0ludGVycHJldGF0aW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpDb21wcmVzc2lvbj4xPC90aWZmOkNvbXByZXNzaW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+ODA8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjgxPC9leGlmOlBpeGVsWERpbWVuc2lv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" />
                    </div>
                </div>

                <div className="showcase-section inline bgWhite">
                    <h4>Profile Image (name)</h4>
                    <div className="example">
                        <ProfileImage name="Dinesh Gamage" />
                    </div>
                </div>

                <div className="showcase-section bgWhite" id="item-card">
                    <div className="example" style={{ display: "flex", flexWrap: "wrap" }}>
                        {
                            Names.map((name: string, key: number) => <div style={{ padding: "10px" }} key={key} ><ProfileImage name={name} /></div>)
                        }
                    </div>
                </div>

                <div className="showcase-section inline" id="item-card">
                    <h4>Item Card (placeholder)</h4>
                    <div className="example">
                        <ItemCard />

                    </div>
                </div>
                <div className="showcase-section inline" id="item-card">
                    <h4>Item Card</h4>
                    <div className="example">
                        <ItemCard
                            item={{ 'icon': 'https://static.iviva.com/images/Adani_UXP/emergency.svg', 'metric': 'Temperature', 'value': '23C', "user": "Dinesh Gamage" }}
                            imageField="icon"
                            nameField="user"
                            titleField="value"
                            subTitleField="metric"
                        />

                    </div>
                </div>

                <div className="showcase-section inline" id="title-bar" style={{ width: "50%", height: 100 }} >
                    <h4>Title Bar</h4>

                    <div className="example"  >
                        <TitleBar
                            title="This is Title bar"
                        >
                            <FilterPanel
                                enableClear={inputValue?.length > 0 || selected != null}
                                onClear={() => { setInputValue(""); setSelected(null) }} >
                                <FormField className="no-padding mb-only">
                                    <Label>Sort By</Label>
                                    <Select
                                        selected={selected}
                                        options={[
                                            { label: "Name", value: "op-1" },
                                            { label: "Date", value: "op-2" },
                                        ]}
                                        onChange={(value) => { setSelected(value) }}
                                        placeholder=" -- select --"
                                        isValid={selected ? selected?.length > 0 : null}
                                    />
                                </FormField>
                                <FormField className="no-padding mb-only">
                                    <Label inline>Name</Label>
                                    <Input
                                        type="text"
                                        value={inputValue}
                                        onChange={(value) => { setInputValue(value) }}
                                        isValid={inputValue ? inputValue.trim().length > 0 : null}
                                        hasIndicator
                                        placeholder="placeholder"
                                    />
                                </FormField>
                            </FilterPanel>
                        </TitleBar>
                    </div>
                </div>

                <div className="showcase-section" id="data-list" style={{ width: '50%', height: 400 }} >
                    <h4>Data List</h4>

                    <div className="example" style={{ width: "100%", height: 300 }} >
                        <DataList
                            data={getDataItems}
                            renderItem={renderItem}
                            pageSize={10}
                        />
                    </div>
                </div>

                <div className="showcase-section" id="data-grid" style={{ width: '50%', height: 450 }} >
                    <h4>Data Grid</h4>

                    <div className="example" >
                        <WidgetWrapper className="sample-widget">
                            <div className="body">
                                <DataGrid
                                    data={GridData}
                                    renderItem={renderGridItem}
                                    columns={2}
                                />
                            </div>
                        </WidgetWrapper>

                    </div>
                </div>

                <div className="showcase-section" id="widget-wrapper" style={{ width: '50%', height: 450 }} >
                    <h4>Widget Wrapper</h4>

                    <div className="example" >
                        <WidgetWrapper className="sample-widget">
                            <div className="header">
                                <div className="title">Widget Wrapper With Sample content (DataList)</div>
                            </div>
                            <div className="body">
                                <DataList
                                    data={getDataItems}
                                    renderItem={renderItem}
                                    pageSize={10}
                                />
                            </div>
                        </WidgetWrapper>
                    </div>
                </div>

                <div className="showcase-section inline" id="date-picker">
                        <h4>Date Picker</h4>
                        <div className="example">
                            <DatePicker
                                title="Date"
                                date={date}
                                onChange={(date) => setDate(date)}
                            />
                        </div>
                    </div>

                    <div className="showcase-section inline" id="date-picker">
                        <h4>Date Picker (disabled weekends)</h4>
                        <div className="example">
                            <DatePicker
                                title="Date"
                                date={date}
                                onChange={(date) => setDate(date)}
                                options={{
                                    disableWeekEnds: true
                                }}
                            />
                        </div>
                    </div>

                    <div className="showcase-section inline" id="date-picker">
                        <h4>Date Picker (close on select)</h4>
                        <div className="example">
                            <DatePicker
                                title="Date"
                                date={date}
                                onChange={(date) => setDate(date)}
                                closeOnSelect
                            />
                        </div>
                    </div>

                    <div className="showcase-section inline" id="date-range-picker">
                        <h4>Date Range Picker (close on select)</h4>
                        <div className="example">
                            <DateRangePicker
                                title="Date Range"
                                startDate={startDate}
                                endDate={endDate}
                                closeOnSelect
                                onChange={(newStart, newEnd) => { setStartDate(newStart); setEndDate(newEnd) }}
                            />


                        </div>
                    </div>

                    <div className="showcase-section inline" id="date-range-picker">
                        <h4>Date Range Picker (disabled weekends, disabled dates)</h4>
                        <div className="example">
                            <DateRangePicker
                                title="Date Range"

                                startDate={startDate}
                                endDate={endDate}
                                onChange={(newStart, newEnd) => { setStartDate(newStart); setEndDate(newEnd) }}
                                options={{
                                    disableWeekEnds: true,
                                    disableDates: [addDays(new Date(), 1), addDays(new Date(), 2)]
                                }}
                            />


                        </div>
                    </div>

                    <div className="showcase-section inline" id="date-range-picker">
                        <h4>Date Range Picker (min, max Dates</h4>
                        <div className="example">
                            <DateRangePicker
                                title="Date Range"

                                startDate={startDate}
                                endDate={endDate}
                                onChange={(newStart, newEnd) => { setStartDate(newStart); setEndDate(newEnd) }}
                                options={{
                                    minDate: new Date(),
                                    maxDate: endOfMonth(new Date())
                                }}
                            />


                        </div>
                    </div>

                    <div className="showcase-section inline" id="time-picker">
                        <h4>Time Picker</h4>
                        <div className="example">
                            <TimePicker title="Time" time={date} onChange={(date) => setDate(date)} />
                        </div>
                    </div>

                    <div className="showcase-section inline " id="time-range-picker">
                        <h4>Time Range Picker</h4>
                        <div className="example">
                            <TimeRangePicker title="Time Range" startTime={startDate} endTime={endDate} onChange={(s, e) => { setStartDate(s); setEndDate(e) }} />
                        </div>
                    </div>

                    <div className="showcase-section inline" id="date-time-picker">
                        <h4>Date Time Picker</h4>
                        <div className="example">
                            <DateTimePicker
                                title="Date Time"
                                datetime={date}
                                onChange={(date) => { setDate(date); }}
                            />
                        </div>
                    </div>
                   <div className="showcase-section inline" id="item-list-card">
                    <h4>Item List Card</h4>
                    <div className="example" style={{ backgroundColor: "white", padding: 10 }}>
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
                </div>

                <div className="showcase-section bgWhite" id="button">
                    <h4>Buttons</h4>
                    <div className="example">
                        <FormField inline>
                            <Label>Button (default)</Label>
                            <Button
                                title="Sample Button"
                                onClick={() => {
                                    setButtonLoading(true);
                                    setTimeout(() => {
                                        setButtonLoading(false)
                                    }, 1000)
                                }}
                                icon="https://static.iviva.com/images/Adani_UXP/QR_badge_icon.svg"
                                loading={buttonLoading}

                            />
                        </FormField>

                        <FormField inline>
                            <Label>Button (active)</Label>
                            <Button
                                title="Sample Button"
                                onClick={() => alert("clicked")}
                                icon="https://static.iviva.com/images/Adani_UXP/QR_badge_icon.svg"
                                active
                            />
                        </FormField>
                        <FormField inline>
                            <Label>Button (disabled)</Label>
                            <Button
                                title="Sample Button"
                                onClick={() => alert("clicked")}
                                icon="https://static.iviva.com/images/Adani_UXP/QR_badge_icon.svg"
                                disabled
                            />
                        </FormField>
                        <FormField inline>
                            <Label>Button (loading - default)</Label>
                            <Button
                                title="Sample Button"
                                onClick={() => {
                                    alert("clicked")
                                }}
                                icon="https://static.iviva.com/images/Adani_UXP/QR_badge_icon.svg"
                                loading
                            />
                        </FormField>

                        <FormField inline>
                            <Label>Button (loading - specified)</Label>
                            <Button
                                title="Sample Button"
                                onClick={() => alert("clicked")}
                                icon="https://static.iviva.com/images/Adani_UXP/QR_badge_icon.svg"
                                loading
                                loadingTitle="Loading..."
                            />
                        </FormField>

                        <FormField inline>
                            <Label>Button (Async)</Label>
                            <AsyncButton
                                title="Sample Button"
                                onClick={() => new Promise((resolve, reject) => {
                                    setTimeout(() => {
                                        resolve("Resolved");
                                    }, 1000)
                                })}
                                icon="https://static.iviva.com/images/Adani_UXP/QR_badge_icon.svg"
                            />
                        </FormField>

                    </div>

                </div>

                <div className="showcase-section inline" >
                    <h4>Icon Buttons</h4>
                    <div className="example">
                        <FormField backgroundColor="white">
                            <IconButton type="search" />
                            <IconButton type="close" />
                            <IconButton type="done" />
                            <IconButton type="arrow-up" />
                            <IconButton type="arrow-down" />
                            <IconButton type="arrow-left" />
                            <IconButton type="arrow-right" />
                            <IconButton type="filter" />
                        </FormField>
                    </div>
                </div>

                <div className="showcase-section inline" id="search-box">
                    <h4>Search Box(default)</h4>
                    <div className="example">
                        <FormField backgroundColor="white">
                            <SearchBox
                                value={inputValue}
                                onChange={(newValue) => { setInputValue(newValue) }}

                            />
                        </FormField>
                    </div>
                </div>

                <div className="showcase-section inline" id="search-box">
                    <h4>Search Box(collapsed)</h4>
                    <div className="example">
                        <FormField backgroundColor="white">
                            <SearchBox
                                value={inputValue}
                                onChange={(newValue) => { setInputValue(newValue) }}
                                collapsed
                                position="right"
                            />
                        </FormField>
                    </div>
                </div>

                <div className="showcase-section inline" id="search-box">
                    <h4>Search Box(collapsed)</h4>
                    <div className="example">
                        <FormField backgroundColor="white">
                            <SearchBox
                                value={inputValue}
                                onChange={(newValue) => { setInputValue(newValue) }}
                                collapsed
                            />
                        </FormField>
                    </div>
                </div>

                <div className="showcase-section" id="map">
                    <h4>Map</h4>
                    <div className="example" style={{ width: "100%", height: "400px" }}>
                        <MapComponent
                            mapUrl="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            markers={[
                                {
                                    latitude: 6.927079,
                                    longitude: 79.861244
                                },
                                {
                                    latitude: 1.290270,
                                    longitude: 103.851959,
                                    data: {
                                        name: "singapore"
                                    }
                                }

                            ]}
                            onMarkerClick={(el, data) => {
                                console.log(el)
                                console.log(data)
                            }}

                        />
                    </div>
                </div>

            </div>

        </div>
    </div>)
};


registerUI({
    id: "uxp-showcase",
    component: UXPShowcase
})