import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/export/aggridsystemreportsdemo')}
      pageTitle={'System Reports Demo'}
      description={
        <div>
          <p>
            AdapTable ships with 5 <b>System Reports</b> that can be run at any
            time:{' '}
          </p>
          <ul>
            <li>
              <b>All Data</b>: All the data in the grid's data source
              (irrespective of whether it is currently visible)
            </li>
            <li>
              <b>Current Data</b>: All the data currently displayed in the grid,
              i.e. what has been filtered
            </li>
            <li>
              <b>Visual Data</b>: All the data presently in the grid together
              with all styles and formats (exported to Excel only - see{' '}
              <a href="aggridvisualdatademo" target="_blank">
                Visual Data Demo
              </a>
            </li>
            <li>
              <b>Selected Cells</b>: All cells currently selected in the grid
              (they do not need to be contiguous - see{' '}
              <a href="aggridselectedcellsdemo" target="_blank">
                Selected Cells Demo
              </a>
              )
            </li>
            <li>
              <b>Selected Rows</b>: Any rows currently selected in the grid.
            </li>
          </ul>{' '}
          <p>
            To configure which System Reports are available use the{' '}
            <i>systemReportNames</i> property of{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-options/export-options"
              target="_blank"
            >
              Export Options
            </a>
            .{' '}
          </p>
          <p>
            See the other Export demos for examples of{' '}
            <a href="aggriduserreportsdemo" target="_blank">
              User
            </a>{' '}
            and{' '}
            <a href="aggridcustomreportsdemo" target="_blank">
              Custom
            </a>{' '}
            Reports.
          </p>
          <p>AdapTable lets users send reports to these destinations:</p>
          <ul>
            <li>Excel (if the right vendor grid modules have been loaded)</li>
            <li>CSV</li>
            <li>JSON</li>
            <li>Clipboard</li>
          </ul>{' '}
          <p>
            See the{' '}
            <a href="aggridcustomdestinationdemo" target="_blank">
              Custom Destination
            </a>{' '}
            demo for how to send Reports to other destinations.
          </p>
          <p>
            In this demo we have set the{' '}
            <a
              href="https://docs.adaptabletools.com/docs/predefined-config/export-config"
              target="_blank"
            >
              Export Config
            </a>{' '}
            so that the Current Report is 'Current Data' and the Current
            Destination is 'CSV'.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-modules/export-module"
            target="_blank"
          >
            Export Module
          </a>
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-options/export-options"
            target="_blank"
          >
            Export Options
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/predefined-config/export-config"
            target="_blank"
          >
            Export Config
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/export-api"
            target="_blank"
          >
            Export Api
          </a>
        </div>
      }
    />
  );
};
