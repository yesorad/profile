import React from 'react';
import PageTemplate from '../layout/PageTemplate';
import PageTitle from '../layout/PageTitie';
import Portfolio from '../components/Portfolio';

function portfolio() {
  return (
    <PageTemplate>
      <PageTitle title="MY" colorTitle="PORTFOLIO" subTitle="WORKS" />
      <Portfolio />
    </PageTemplate>
  );
}

export default portfolio;
