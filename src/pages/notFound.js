import React from 'react';
import PageTemplate from '../layout/PageTemplate';
import PageTitle from '../layout/PageTitie';
import NotFound from '../components/common/NotFound';

function notFound() {
  return (
    <PageTemplate>
      <PageTitle colorTitle="404" subTitle="ERROR" />
      <NotFound />
    </PageTemplate>
  );
}

export default notFound;
