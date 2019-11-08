import AdaptableBlotter from '@adaptabletools/adaptableblotter/agGrid';
import '@adaptabletools/adaptableblotter/index.css';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { cloneDeep } from 'lodash';

import '../../../../DemoPage/aggriddemo.css';

import {
  AdaptableBlotterOptions,
  IAdaptableBlotter,
} from '@adaptabletools/adaptableblotter/types';

import json from '../../../../DataSets/Json/NorthwindOrders.json';
import { HelperAgGrid } from '../../../Helpers/HelperAgGrid';
import predefinedConfig from './config';
import {
  ToolbarVisibilityChangedEventArgs,
  ApplicationToolbarButtonClickedEventArgs,
} from '@adaptabletools/adaptableblotter/App_Scripts/Api/Events/BlotterEvents';
import ReactDOM from 'react-dom';
import { renderCustomDiv } from '.';
import { Visibility } from '@adaptabletools/adaptableblotter/App_Scripts/PredefinedConfig/Common/Enums';

export default () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();

  let rowData = JSON.parse(JSON.stringify(json));

  const columndefs = helperAgGrid.getBasicNorthwindColumnSchema();

  const gridOptions = helperAgGrid.getGridOptions(columndefs, rowData);

  const blotterOptions: AdaptableBlotterOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    blotterId: 'Application Toolbar Demo',

    vendorGrid: gridOptions,
    predefinedConfig: predefinedConfig,
  };

  const blotterOptionsClone = cloneDeep(blotterOptions);
  const adaptableblotter: IAdaptableBlotter = new AdaptableBlotter(
    blotterOptions
  );

  adaptableblotter.api.eventApi.on(
    'ToolbarVisibilityChanged',
    (toolbarVisibilityChangedEventArgs: ToolbarVisibilityChangedEventArgs) => {
      if (
        toolbarVisibilityChangedEventArgs.toolbar === 'Application' &&
        toolbarVisibilityChangedEventArgs.visibility == Visibility.Visible
      ) {
        let toolbarContents: any = renderCustomDiv();

        ReactDOM.render(
          toolbarContents,
          adaptableblotter.api.applicationApi.getApplicationToolbarContentsDiv()
        );
      }
    }
  );

  adaptableblotter.api.eventApi.on(
    'ApplicationToolbarButtonClicked',
    (
      applicationToolbarButtonClickedEventArgs: ApplicationToolbarButtonClickedEventArgs
    ) => {
      alert(
        'name: ' +
          applicationToolbarButtonClickedEventArgs.applicationToolbarButton
            .Name +
          ';caption: ' +
          applicationToolbarButtonClickedEventArgs.applicationToolbarButton
            .Caption
      );
    }
  );

  return {
    predefinedConfig,
    blotterOptions: blotterOptionsClone,
  };
};
