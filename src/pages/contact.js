import React from 'react';
import ContactContainer from '../containers/ContactContainer';
import PageTemplate from '../layout/PageTemplate';
import PageTitle from '../layout/PageTitie';
import SEO from '../components/common/SEO';

function Contact() {
  return (
    <PageTemplate>
      <SEO
        title="Contact Me"
        keywords="Contact, Mail, Contact Me, Profile, yesroad, kimEungGil"
        description="YesRoad Contact Me Page"
      />
      <PageTitle title="CONTACT" colorTitle="ME" subTitle="CONTACT" />
      <ContactContainer />
    </PageTemplate>
  );
}

export default Contact;
