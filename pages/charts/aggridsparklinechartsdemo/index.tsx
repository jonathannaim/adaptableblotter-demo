import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/charts/aggridsparklinechartsdemo')}
      pageTitle={'Sparkline Charts Demo'}
      description={
        <div>
          <p>Sparklines enable you to see your data as a range.</p>
          <p>
            They are most useful, and most typically used, within a column (see
            the{' '}
            <a href="../column/aggridsparklinecolumnsdemo" target="_self">
              Sparkline Column demo
            </a>
            ) but you can create a Sparkline Chart where it makes sense to do
            so.
          </p>
          <p>
            In this example we have created a Sparkline Chart showing all Change
            of Years where the Currency is 'USD'.
          </p>
          <p>
            By default all charts are live so as you change the data in the grid
            the chart will update automatically.
          </p>
        </div>
      }
      helpResources={<div></div>}
    />
  );
};
