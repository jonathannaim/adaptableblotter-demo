import React from 'react';
import DynamicDemoPage from '../../../src/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/aggridauditdemo')}
      pageTitle={'Audit Log Demo'}
      description={
        <div>
          <h4>AdaptableBlotter.JS - Audit Log Demo</h4>
          <p>
            Every event, mouse click, user action, cell edit etc. is auditable
            by the Adaptable Blotter and available for you to listen to and
            review.
          </p>
          <p>
            You can choose to send any (or all) of Cell Edit, User State,
            Function Applied and Internal State changes to the Audit Log.{' '}
          </p>
          <p>
            And you can choose what the Audit Log do with the messages: stream
            to an HTTP Channel, log to the Console or fire an event.
          </p>
          <p>
            This example fires Cell Edit, User State and Function Applied events
            to the Console; open the Console in Developer Tools and see the
            messages appear as you edit data and create objects in the Blotter.
          </p>
          <p>
            <b>Adaptable Blotter Help Resources:</b>{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360024888671-Audit-Log"
              target="_blank"
            >
              User Guide
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028585212-Audit-Events-API"
              target="_blank"
            >
              Blotter API
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360008819232-Audit-Log-FAQ"
              target="_blank"
            >
              FAQ
            </a>
          </p>
        </div>
      }
    />
  );
};