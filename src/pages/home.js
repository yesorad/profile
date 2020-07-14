import React from 'react';
import Main from '../components/Main';
import Media from 'react-media';
import TypingContainer from '../containers/TypingContainer';
import SEO from '../components/common/SEO';
import TypingMobile from '../components/TypingMobile';

function home() {
  return (
    <>
      <SEO
        title="Main"
        keywords="Main, Profile, yesroad, kimEungGil"
        description="YesRoad Profile Site"
      />
      <Main />
      <TypingMobile />
      <Media queries={{ mobile: { maxWidth: 640 } }}>
        {(matches) => (matches.mobile ? null : <TypingContainer />)}
      </Media>
    </>
  );
}

export default home;
