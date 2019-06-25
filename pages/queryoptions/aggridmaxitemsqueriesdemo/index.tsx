import React from 'react';
import DynamicDemoPage from '../../../src/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import(
        '../../../src/client/queryoptions/aggridmaxitemsqueriesdemo'
      )}
      pageTitle={'AdaptableBlotter.JS ag-Grid Max Items in Queries Demo'}
      description={
        <div>
          <h4>Max Items Displayed in Queries Demo</h4>
          <p>
            When getting distinct column values for display (either in the
            column filter dropdown) the Adaptable Blotter will show the first
            5,000 distinct values for that column.
          </p>
          <p>
            However, if you would prefer to return a larger result set, you can
            set the the <b>maxColumnValueItemsDisplayed</b> property of{' '}
            <a href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028584632-Query-Options">
              Query Options
            </a>{' '}
            to a different value.
          </p>
          <p>
            This example we have set the value to 20. Open the column filter for
            the 'Contact' column and you will see only 20 items displayed
            (instead of the many hundred we show in other demos).
          </p>
          <p>
            <b>Adaptable Blotter Help Resources:</b>{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028584632-Query-Options"
              target="_blank"
            >
              User Guide
            </a>
          </p>
        </div>
      }
    />
  );
};