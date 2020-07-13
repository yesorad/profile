import React from 'react';
import ContactContainer from '../containers/ContactContainer';
import PageTemplate from '../layout/PageTemplate';
import PageTitle from '../layout/PageTitie';

function Contact() {
  return (
    <PageTemplate>
      <PageTitle title="CONTACT" colorTitle="ME" subTitle="CONTACT" />
      <ContactContainer />
    </PageTemplate>
  );
}

export default Contact;
