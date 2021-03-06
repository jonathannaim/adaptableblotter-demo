import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/queries/aggridnamedquerydemo')}
      pageTitle={'Named Query Demo'}
      description={
        <div>
          <p>
            A (Boolean) Query can be named, saved and then re-used as required.
          </p>
          <p>
            'Named Queries' appear in the menu that is accessed when clicked the
            'Load Query' button (on the right hand side of the Query Toolbar).
          </p>
          <p>
            And they can be referenced in other Expressions making them
            available in any AdapTable Module that use Expressions.
          </p>
          <p>
            The <b>Query</b> function in the parser takes the name of the Named
            Query as the only parameter and evaluates it as part of running the
            Expression.
          </p>
          <p>
            In this demo we have created 2 Named Queries queries:
            <ul>
              <li>
                <p>
                  <b>Non UP Shipping</b>: defined as:{' '}
                  <i>'[ShipVia] != "United Package"'</i>
                  <br />
                  This is then referenced by a Conditional Style to paint cells
                  orange as follows: <i>'QUERY("Non UP Shipping")'</i>
                </p>
              </li>
              <li>
                <p>
                  <b>Big Changed Orders</b>: defined as:{' '}
                  <i>
                    '[ChangeLastOrder] {'>'} 10 AND [PackageCost] {'>'} 10'
                  </i>
                  <br />
                  This is then referenced by the 'Big Orders' User Report in its
                  Expresssions as follows:{' '}
                  <i>'QUERY("Big Changed Orders") AND [ItemCount] {'>'} 3'</i>
                </p>
              </li>
            </ul>
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-modules/query-module"
            target="_blank"
          >
            Query Module
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-parser/query"
            target="_blank"
          >
            Adaptable Expression
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/predefined-config/query-config"
            target="_blank"
          >
            Query Config
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-options/search-options"
            target="_blank"
          >
            Search Options
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/query-api"
            target="_blank"
          >
            Query Api
          </a>{' '}
        </div>
      }
    />
  );
};
