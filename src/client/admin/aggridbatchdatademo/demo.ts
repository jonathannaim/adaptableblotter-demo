import raw from 'raw.macro';

import '../../../../DemoPage/aggriddemo.css';

import json from '../../../../DataSets/Json/NorthwindOrders.json';
import { HelperAgGrid } from '../../../Helpers/HelperAgGrid';

import init from './code';
import { GridReadyEvent } from '@ag-grid-community/all-modules';
import { ITrade } from '../../../Helpers/Trade';
import { TickingDataHelper } from '../../../Helpers/TickingDataHelper';
const code = raw('./code.ts');

export default async () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();

  let tickingDataHelper = new TickingDataHelper();
  const columndefs = helperAgGrid.getTradeSchema();
  let rowCount: number = 100;
  const rowData: ITrade[] = helperAgGrid.getTrades(rowCount);

  const { adaptableOptions, adaptableApi } = await init(columndefs, rowData);

  adaptableApi.eventApi.on('AdaptableReady', () => {
    // have 10 of the first 30 trades update every second
    tickingDataHelper.startTickingDataagGridTradeBatch(
      adaptableApi,
      adaptableOptions.vendorGrid,
      helperAgGrid,
      1000,
      rowCount,
      50
    );
  });

  adaptableOptions.vendorGrid.onGridReady = function(
    gridReady: GridReadyEvent
  ) {
    gridReady.columnApi!.autoSizeAllColumns();
    setTimeout(() => gridReady.columnApi!.autoSizeAllColumns(), 1);

    gridReady.api!.addEventListener('newColumnsLoaded', function() {
      gridReady.columnApi!.autoSizeAllColumns();
    });

    gridReady.api!.closeToolPanel();
  };

  return {
    unload: () => {
      tickingDataHelper.turnOffTicking();
    },
    code,
  };
};
