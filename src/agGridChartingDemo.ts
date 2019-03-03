import * as Helper from './Helper';
import { Grid } from 'ag-grid-community/dist/lib/grid';
import { GridOptions } from 'ag-grid-community/dist/lib/entities/gridOptions';
import * as HelperAgGrid from "./HelperAgGrid"
import { IAdaptableBlotter, IAdaptableBlotterOptions } from 'adaptableblotter/types'

export class agGridChartingDemo {
     private adaptableblotter: IAdaptableBlotter
    constructor() {

        let data: any[]
        Helper.getDataFromJson("NorthwindOrders.json").then(json => data = json)
            .then(data => Helper.MakeAllRecordsColumnsDateProperDates(data)).then(() => {
                 // let the grid know which columns and what data to use
                var gridOptions: GridOptions = {
                    columnDefs: HelperAgGrid.getBasicNorthwindColumnSchema(),
                    rowData: data,
                    animateRows: true,
                    enableRangeSelection: true,
                    floatingFilter: true,
                    columnTypes: { // not required but helpful for column data type identification
                        abColDefNumber: {},
                        abColDefString: {},
                        abColDefBoolean: {},
                        abColDefDate: {},
                        abColDefObject: {},
                    },
                    onGridReady: function () {
                        //we do it twice as sometimes when the dataset is small columns that werent visible at all will become
                        //visible and won't be autosized
                        gridOptions.columnApi.autoSizeAllColumns();
                        setTimeout(() => gridOptions.columnApi.autoSizeAllColumns(), 1);

                        gridOptions.api.addEventListener("cellEditingStopped", () => {
                        });

                        gridOptions.api.addEventListener("newColumnsLoaded", function () {
                            gridOptions.columnApi.autoSizeAllColumns();
                        });
                    }
                };
                var eGridDiv = document.getElementById("grid");
                let grid = new Grid(eGridDiv, gridOptions);


               // HelperAgGrid.startTickingDataagGrid(gridOptions);

                //set all the properties such as editor etc....
                //  selectedConfig.setGridProperties(gridOptions)

                //   let config: any = "NorthwindOrdersConfig.json";

                //create Adaptable Blotter
                let blotterOptions: IAdaptableBlotterOptions = {
                    primaryKey: "OrderId",
                    vendorGrid: gridOptions,
                    userName: "Jonathan",
                    blotterId: "Charting Demo",
                    licenceKey: Helper.getdemolicencekey(),

                }
                this.adaptableblotter = new (<any>window).adaptableblotteraggrid.AdaptableBlotter(blotterOptions);
            })
    }



}