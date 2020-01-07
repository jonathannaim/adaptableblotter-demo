import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/lookups/aggridpermittedvaluesdemo')}
      pageTitle={'Permitted Values Demo'}
      description={
        <div>
          <h4>Permitted Values Demo (User Inferface State)</h4>
          <p>
            When Adaptable wants to provide a list of values for a column (e.g.
            in a column filter, or when building a query or in Bulk Update) it
            will first get the list from Server Lookups if that has been set.
          </p>
          <p>
            If not then it will look for any Permitted Columns values for that
            column. These are set through the PermittedColumnValues property in
            the User Interace section of Predefined Config.
          </p>
          <p>
            In this example we have set Permitted Column Values for the{' '}
            <i>Contact</i> Column so that only those values we have listed are
            displayed in the Column Filter (and Query Builder) for that column.
          </p>
          <p>
            Note: if there are no Permitted Values, then Adaptable wtill
            dynamically build a list of distinct values for the column.
          </p>
          <p>
            <b>Adaptable Help Resources:</b>{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_predefinedconfig_designtimestate_userinterfacestate_.permittedcolumnvalues.html"
              target="_blank"
            >
              Predefined Config
            </a>
          </p>
        </div>
      }
    />
  );
};
