import React from 'react';
import PageTemplate from '../layout/PageTemplate';
import PageTitle from '../layout/PageTitie';
import SEO from '../components/common/SEO';
import WorkContainer from '../containers/WorkContainer';

function work() {
  return (
    <PageTemplate>
      <SEO
        title="Portfolio"
        keywords="Portfoilo, Works, Work, Profile, yesroad, kimEungGil"
        description="YesRoad Portfoile Page"
      />
      <PageTitle title="MY" colorTitle="PORTFOLIO" subTitle="WORKS" />
      <WorkContainer />
    </PageTemplate>
  );
}

export default work;
