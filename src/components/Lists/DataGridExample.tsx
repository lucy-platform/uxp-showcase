import * as React from 'react';
import { DataGrid, ItemCard } from 'uxp/components';

interface IProps {

}

const DataGridExample: React.FunctionComponent<IProps> = (props) => {

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

    return (<div className="section">
        <h3>Data Grid</h3>

        <div className="showcase-section inline " >
            <h4>Data Grid</h4>
            <div className="example" style={{ width: "50%", height: 400 }} >
                <DataGrid
                    data={GridData}
                    renderItem={renderGridItem}
                    columns={2}
                />
            </div>

            <div className="code">
            </div>
        </div>


    </div >)
}

export default DataGridExample