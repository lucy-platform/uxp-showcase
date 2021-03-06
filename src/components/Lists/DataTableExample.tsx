import * as React from 'react';
import { DataList, DataTable, ItemCard } from 'uxp/components';

interface IProps {

}

const DataTableExample: React.FunctionComponent<IProps> = (props) => {

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


    return (<div className="section">
        <h3>Data Table</h3>

        <div className="showcase-section " >
            <h4>Data Table</h4>
            <div className="example" style={{ width: "50%", height: 400 }} >
                <DataTable
                    data={(max, last) => getDataItems(max, last)}
                    pageSize={10}
                    columns={[
                        {
                            title: "Request",
                            width: "30%",
                            renderColumn: (item) => <ItemCard
                                item={item}
                                subTitleField="request"
                                className="data-table-item"
                            />
                        },
                        {
                            title: "User",
                            width: "25%",
                            renderColumn: (item) => <ItemCard
                                item={item}
                                subTitleField="user"
                                className="data-table-item"
                            />
                        },
                        {
                            title: "Zone",
                            width: "15%",
                            renderColumn: (item) => <ItemCard
                                item={item}
                                subTitleField="section"
                                className="data-table-item"
                            />
                        },
                        {
                            title: "Status",
                            width: "15%",
                            renderColumn: (item) => <ItemCard
                                item={item}
                                subTitleField="status"
                                className="data-table-item"
                            />
                        },
                        {
                            title: "Date",
                            width: "15%",
                            renderColumn: (item) => <ItemCard
                                item={item}
                                subTitleField="date"
                                className="data-table-item"
                            />
                        }
                    ]}
                />
            </div>

            <div className="code">
            </div>
        </div>


    </div >)
}

export default DataTableExample