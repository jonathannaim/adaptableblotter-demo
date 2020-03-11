import React, { ReactNode } from 'react';
import MainPage from '../../src/MainPage';
import Link from 'next/link';

import './index.scss';
import GridLayout from '../../src/components/GridLayout';

import DemoBox from '../../src/components/DemoBox';

export default () => {
  return (
    <MainPage
      pageTitle={'State demos'}
      description={
        <div>
          <h3>User State Demos</h3>
          <p>
            One of the key functionalities offered by AdapTable is{' '}
            <b>User State Management</b>. This takes 2 forms:
          </p>
          <ul>
            <li>
              Predefined Config - State created by Developers at{' '}
              <b>Design Time</b> and shipped with Adaptable for first-time use.
            </li>
            <li>
              Saving State - managing changes made to state at <b>Run Time</b>{' '}
              and storing it for future use
            </li>
          </ul>
          <b>Predefined Config</b>
          <p>
            Typically you will ship your AdapTable instance with Predefined
            Configuration so that your users open their application at first use
            and see it pre-loaded with Searches, Styles, Edit Rules, Reports etc
            that match their needs.
          </p>
          <p>
            Additionally Predefined Configuration will include 'Entitlements' -
            stipulating which AdapTable functions they are allowed to access.
          </p>
          <b>Saving State</b>{' '}
          <p>
            AdapTable manages State for you - meaning that all user activity is
            automatically saved and then reloaded the next time the application
            is launched.
          </p>
          <p>
            By default User State gets saved to <b>Local Storage</b> which is
            how most of the demos on this site work.
          </p>
          <p>
            However we provide <b>State Options Functions</b> which allow
            developers to store User State in any location of their choosing.
          </p>
        </div>
      }
    >
      <GridLayout>
        <DemoBox href="/userstate/aggridpredefinedconfigdemo">
          Predefined Config demo
        </DemoBox>
        <DemoBox href="/userstate/aggridstatefunctionsdemo">
          State Functions demo
        </DemoBox>
      </GridLayout>
    </MainPage>
  );
};
