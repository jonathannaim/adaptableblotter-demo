import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/lookups/aggridserverlookupsdemo')}
      pageTitle={'Server Lookups Demo'}
      description={
        <div>
          <h4>Server Lookups Demo</h4>
          <p>
            By default when showing a list of filter values (or a list of
            distinct column values when building a query) Adaptable will create
            the distinct list based on what is currently in the DataSet.
          </p>
          <p>
            However sometimes you might want to provide Adaptable with a list of
            allowed values for lookups or filtering. You do this through the{' '}
            <b>getColumnValues</b> property of{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_adaptableoptions_queryoptions_.queryoptions.html"
              target="_blank"
            >
              Query Options
            </a>
            .
          </p>
          <p>
            This property allows you to provide a method which will get the
            distinct values you want to show from the Server and return to
            Adaptable. If the return list is empty then we will show the list
            from the grid as normal.
          </p>
          <p>
            This example provides custom value list for the 'Cust. Ref' and
            'Contact' columns. When you filter on these columns or use them in a
            query only a subset of values are shown; other columns display
            distinct values normally.
          </p>
          <p>
            <b>Adaptable Help Resources:</b>{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028584632-Query-Options"
              target="_blank"
            >
              User Guide
            </a>
          </p>{' '}
        </div>
      }
    />
  );
};
