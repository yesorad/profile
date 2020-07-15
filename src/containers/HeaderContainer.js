import React from 'react';
import Media from 'react-media';
import Header from '../layout/Header';
import HeaderMobile from '../layout/HeaderMobile';
import ThemeContainer from './ThemeContainer';

function HeaderContainer() {
  return (
    <>
      <ThemeContainer />
      <Media queries={{ tablet: { maxWidth: 960 } }}>
        {(matches) => (matches.mobile ? <HeaderMobile /> : <Header />)}
      </Media>
    </>
  );
}

export default HeaderContainer;
