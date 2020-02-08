import '@adaptabletools/adaptable/index.css';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import './pivoting.css';
import Adaptable from '@adaptabletools/adaptable/agGrid';
import { GridOptions } from '@ag-grid-community/all-modules';
import {
  AdaptableOptions,
  PredefinedConfig,
  AdaptableApi,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {
  Layout: {
    CurrentLayout: 'Pivot View',
    Layouts: [
      {
        Columns: [],
        ColumnSorts: [],
        GroupedColumns: ['ShipCountry'],
        PivotDetails: {
          PivotColumns: ['ShipVia'],
          AggregationColumns: ['InvoicedCost', 'ItemCost'],
        },
        Name: 'Pivot View',
      },
      {
        Columns: [
          'CustomerReference',
          'ContactName',
          'Employee',
          'ShipCountry',
          'OrderId',
          'PackageCost',
          'ItemCount',
          'ItemCost',
          'OrderCost',
          'InvoicedCost',
          'CompanyName',
          'ShipName',
        ],
        ColumnSorts: [],
        Name: 'Non Pivot View',
      },
    ],
  },
} as PredefinedConfig;

export default (columnDefs: any[], rowData: any[]) => {
  let gridOptions: GridOptions = {
    columnDefs,
    rowData,
    enableRangeSelection: true,
    sideBar: true,
    suppressMenuHide: true,
    floatingFilter: true,
    groupIncludeTotalFooter: true,
    groupIncludeFooter: true,
    suppressAggFuncInHeader: true,
    columnTypes: {
      abColDefNumber: {},
      abColDefString: {},
      abColDefBoolean: {},
      abColDefDate: {},
      abColDefObject: {},
      abColDefNumberArray: {},
    },
    processSecondaryColDef: function(colDef) {
      let col = colDef.pivotKeys?.find(pk => pk === 'Speedy Express');
      if (col) {
        colDef.headerName = colDef.headerName!.toUpperCase();
        colDef.headerClass = 'secondary-column-color-background';
      }
    },
    processSecondaryColGroupDef: function(colGroupDef) {
      let col = colGroupDef.pivotKeys?.find(pk => pk === 'Speedy Express');
      if (col) {
        colGroupDef.headerClass = 'secondary-group-column-color-background';
        colGroupDef.headerName = colGroupDef.headerName + ' !!!';
      }
    },
  };

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: 'Pivoting Demo',
    layoutOptions: {
      autoSizeColumnsInLayout: true,
      autoSizeColumnsInPivotLayout: true,
    },
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
