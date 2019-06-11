import React from 'react';
import MainPage from '../../src/MainPage';
import Link from 'next/link';
import { ReactNode } from 'react-redux';

import finsembleDemoImage from '../../images/FinsembleDemo.png';
import opefinDemoImage from '../../images/OpenFinDemo.png';
import './index.scss';
import GridLayout from '../../src/components/GridLayout';

const DemoBox = ({
  href,
  children,
  imageName,
}: {
  href: string;
  children: ReactNode;
  imageName: string;
}) => {
  return (
    <Link href={href}>
      <a>
        <div className="demo-box">
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src={imageName}
              style={{
                width: '80%',
                height: '50%',
              }}
            />
          </div>
          <br />
          <div style={{ textAlign: 'center' }}>
            <h4> {children}</h4>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default () => {
  return (
    <MainPage
      pageTitle={'Partners'}
      description={
        <div>
          <h4>Partners</h4>
          <p>
            The Adaptable Blotter partners with many of the other leading
            FinTechs who are revolutionising the desktop. This section (under
            development) will show some of the work we do in this regard.{' '}
          </p>
          <p>Our partnerships include:</p>
          <p>
            <b>Finsemble</b>: We leverage the powerful offering to enable
            multiple Blotter to share state, data and events.
          </p>{' '}
          <p>
            <b>OpenFin</b>: If you are using this popular container we offer
            'Live Updates' so that data exported to Excel updates in real time
            as the Blotter ticks or is edited.
          </p>
        </div>
      }
    >
      <GridLayout>
        <DemoBox href="/partners/finsembledemo" imageName={finsembleDemoImage}>
          Finsemble demo
        </DemoBox>{' '}
        <DemoBox href="/partners/openfindemo" imageName={opefinDemoImage}>
          OpenFin demo
        </DemoBox>
      </GridLayout>
    </MainPage>
  );
};
