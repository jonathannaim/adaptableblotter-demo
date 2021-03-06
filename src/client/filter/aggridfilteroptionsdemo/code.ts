import '@adaptabletools/adaptable/index.css';
import '@adaptabletools/adaptable/themes/dark.css';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham-dark.css';
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
    CurrentLayout: 'Orders',
    Layouts: [
      {
        Columns: [
          'OrderId',
          'ItemCost',
          'OrderDate',
          'Employee',
          'Freight',
          'ChangeLastOrder',
          'ShipCountry',
          'ShipVia',
          'InvoicedCost',
          'CustomerReference',
        ],
        ColumnSorts: [
          {
            ColumnId: 'OrderDate',
            SortOrder: 'Desc',
          },
        ],
        Name: 'Orders',
      },
    ],
  },
} as PredefinedConfig;

export default async (columnDefs: any[], rowData: any[]) => {
  const gridOptions: GridOptions = {
    columnDefs,
    rowData,
    enableRangeSelection: true,
    sideBar: true,
    suppressMenuHide: true,
    statusBar: {
      statusPanels: [
        { statusPanel: 'agTotalRowCountComponent', align: 'left' },
        { statusPanel: 'agFilteredRowCountComponent' },
      ],
    },
  };

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: 'Filter Options Demo',
    searchOptions: {
      autoApplyFilter: false,
      quickFilterTrigger: 'click',
      sortColumnValuesInFilter: true,
      clearFiltersOnStartUp: true,
      defaultNumericColumnFilter: 'GreaterThan',
      defaultStringColumnFilter: 'StartsWith',
      defaultDateColumnFilter: 'NotOn',
    },
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
