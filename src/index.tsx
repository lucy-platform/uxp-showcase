import * as React from "react";
import { IContextProvider, registerUI, } from './uxp';
import classNames from 'classnames';
import './styles.scss';
import { Modal, Button, Tooltip, Popover, FilterPanel, FormField, Label, Select, Input, ITrendSeries, ItemCard, useToast, Checkbox, FormFeedback, LinkWidgetContainer, ToggleFilter, Loading, NotificationBlock, PieChartComponent, TrendChartComponent, ProfileImage, TitleBar, DataList, DataGrid, WidgetWrapper, DatePicker, DateRangePicker, TimePicker, TimeRangePicker, DateTimePicker, ItemListCard, IconButton, SearchBox, AsyncButton, MapComponent } from "uxp/components";
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
    let [selected, setSelected] = React.useState<string | null>("");
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

                {/* <div className="showcase-section bgWhite" id="select">
                    <h4>Dynamic Select</h4>
                    <div className="example">
                        <FormField inline className="showcase-input" backgroundColor="white">
                            <Label>Select box ( default )</Label>
                            <DynamicSelect
                                selected={selected}
                                options={getOptions}
                                onChange={(value) => { setSelected(value); console.log(value) }}
                                placeholder=" -- select --"
                            />
                        </FormField>


                    </div>
                </div> */}

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
                        <ProfileImage image="https://static.iviva.com/images/Adani_UXP/emergency.svg" />
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
                        <DataGrid
                            data={GridData}
                            renderItem={renderGridItem}
                            columns={2}
                        />
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
                        <TimeRangePicker startTime={startDate} endTime={endDate} onChange={(s, e) => { setStartDate(s); setEndDate(e) }} />
                    </div>
                </div>

                <div className="showcase-section inline" id="date-time-picker">
                    <h4>Date Time Picker</h4>
                    <div className="example">
                        <DateTimePicker
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