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
  Dashboard: {
    Tabs: [
      {
        Name: 'Toolbars',
        Toolbars: ['Alert'],
      },
    ],
  },
  Alert: {
    MaxAlertsInStore: 10,
    AlertDisplayDiv: 'alertDiv',
    AlertDefinitions: [
      {
        ColumnId: 'InvoicedCost',
        MessageType: 'Warning',
        Range: {
          Operand1: '2000',
          Operand1Type: 'Value',
          Operator: 'GreaterThan',
        },
        AlertProperties: {
          ShowPopup: true,
        },
      },
      {
        ColumnId: 'ItemCount',
        MessageType: 'Info',
        Range: {
          Operand1: '100',
          Operand1Type: 'Value',
          Operator: 'PercentChange',
        },
        AlertProperties: {
          ShowPopup: false,
        },
      },
    ],
  },
} as PredefinedConfig;

export default async (columnDefs: any[], rowData: any[]) => {
  let gridOptions: GridOptions = {
    columnDefs,
    rowData,
    animateRows: true,
    enableRangeSelection: true,
    sideBar: true,
    suppressMenuHide: true,
    autoGroupColumnDef: {
      sortable: true,
    },
    columnTypes: {
      abColDefNumber: {},
      abColDefString: {},
      abColDefBoolean: {},
      abColDefDate: {},
      abColDefObject: {},
      abColDefNumberArray: {},
    },
  };

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: 'Alert Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
