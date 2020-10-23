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
            AdapTable ships with 4 <b>System Reports</b> that can be run at any
            time:{' '}
          </p>
          <ul>
            <li>
              <b>All Data</b>: All the data in the grid's data source
              (irrespective of whether it is currently visible)
            </li>
            <li>
              <b>Visible Data</b>: All the data currently displayed in the grid
              (if exported to Excel it will include grouped row information)
            </li>
            <li>
              <b>Selected Cells</b>: All cells currently selected in the grid
              (they do not need to be contiguous)
            </li>
            <li>
              <b>Selected Rows</b>: Any rows currently selected in the grid.
            </li>
          </ul>{' '}
          <p>See the other demos for examples of User and Custom Reports.</p>
        </div>
      }
      helpResources={
        <div>
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
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-functions/export-function"
            target="_blank"
          >
            Export Read Me
          </a>
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-options/export-options"
            target="_blank"
          >
            Export Options
          </a>
        </div>
      }
    />
  );
};
