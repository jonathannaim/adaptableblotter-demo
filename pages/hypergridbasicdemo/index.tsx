import React from 'react';
import HypergridDemoPage from '../../src/HypergridDemoPage';
import dynamic from 'next/dynamic';
/*
const DynamicComponent = dynamic(
  () => import('../../src/client/hypergridbasicdemo'),
  {
    loading: () => null,
    ssr: false,
  }
);*/

export default () => {
  return (
    <HypergridDemoPage
      pageTitle={'Adaptable Blotter Hypergrid Charting Demo'}
      description={
        <div>
          <h4>AdaptableBlotter.JS - Basic Demo (Hypergrid)</h4>
        </div>
      }
    />
  );
};