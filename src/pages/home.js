import React from 'react';
import Main from '../components/Main';
import TypingContainer from '../containers/TypingContainer';
import SEO from '../components/common/SEO';

function home() {
  return (
    <>
      <SEO
        title="Main"
        keywords="Main, Profile, yesroad, kimEungGil"
        description="YesRoad Profile Site"
      />
      <Main />
      <TypingContainer />
    </>
  );
}

export default home;
