import React from 'react';
import PageTemplate from '../layout/PageTemplate';
import PageTitle from '../layout/PageTitie';
import Portfolio from '../components/Portfolio';
import SEO from '../components/common/SEO';

function portfolio() {
  return (
    <PageTemplate>
      <SEO
        title="Portfolio"
        keywords="Portfoilo, Works, Work, Profile, yesroad, kimEungGil"
        description="YesRoad Portfoile Page"
      />
      <PageTitle title="MY" colorTitle="PORTFOLIO" subTitle="WORKS" />
      <Portfolio />
    </PageTemplate>
  );
}

export default portfolio;
