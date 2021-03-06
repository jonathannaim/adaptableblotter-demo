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
  PlusMinus: {
    PlusMinusNudges: [
      {
        Scope: {
          ColumnIds: ['ItemCost'],
        },
        Rule: {
          BooleanExpression: '[Employee] = "Janet Leverling"',
        },
        NudgeValue: 10,
      },
      {
        Scope: {
          ColumnIds: ['ItemCost'],
        },
        Rule: {
          Predicate: {
            PredicateId: 'Any',
          },
        },
        NudgeValue: 20,
      },
    ],
  },
  Alert: {
    FlashingAlertDefinitions: [
      {
        Scope: {
          ColumnIds: ['ItemCost'],
        },
        UpChangeStyle: {
          BackColor: '#008000',
        },
        DownChangeStyle: {
          BackColor: '#FF0000',
        },
        FlashDuration: 500,
      },
    ],
  },
  Dashboard: {
    ModuleButtons: ['PlusMinus'],
  },
} as PredefinedConfig;

export default async (columnDefs: any[], rowData: any[]) => {
  const gridOptions: GridOptions = {
    columnDefs,
    rowData,
    enableRangeSelection: true,
    sideBar: true,
    suppressMenuHide: true,
    autoGroupColumnDef: {
      sortable: true,
    },
  };

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: 'Plus Minus Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
