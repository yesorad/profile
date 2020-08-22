import React, { useState } from 'react';
import Work from '../components/Work';
import WorkModal from '../components/common/WorkModal';
import thumb01 from '../assets/images/thumb/thumb01.jpg';
import thumb02 from '../assets/images/thumb/thumb02.jpg';
import thumb03 from '../assets/images/thumb/thumb03.jpg';
import thumb04 from '../assets/images/thumb/thumb04.jpg';
import thumb05 from '../assets/images/thumb/thumb05.jpg';
import modal01 from '../assets/images/modal/modal01.jpg';
import modal02 from '../assets/images/modal/modal02.jpg';
import modal03 from '../assets/images/modal/modal03.jpg';
import modal04 from '../assets/images/modal/modal04.jpg';
import modal05 from '../assets/images/modal/modal05.jpg';

function WorkContainer() {
  const works = [
    {
      id: 1,
      title: 'Netflix Clone Coding',
      thumb: thumb01,
      modalImg: modal01,
      link: '//netflixyesroad.netlify.app/',
    },
    {
      id: 2,
      title: 'MBC 아카데미 뷰티 학원 M',
      thumb: thumb02,
      modalImg: modal02,
      link: '//off.mbcbeauty.co.kr',
    },
    {
      id: 3,
      title: '스카이에듀 15분강의 M',
      thumb: thumb03,
      modalImg: modal03,
      link: '//skyedu.conects.com/m/lecture/fifteen_center',
    },
    {
      id: 4,
      title: '커넥츠 프로젝트 PC',
      thumb: thumb04,
      modalImg: modal04,
      link: '//project.conects.com/',
    },
    {
      id: 5,
      title: '프로젝트 클래스 후기 PC',
      thumb: thumb05,
      modalImg: modal05,
      link: '//project.conects.com/landing/neovalue/intro',
    },
  ];

  const [item, setItems] = useState({
    key: '',
    isWork: false,
  });

  const onItem = (id) => {
    setItems({
      key: id,
      isWork: true,
    });
  };

  const onHide = () => {
    setItems({
      isWork: false,
    });
  };

  return (
    <>
      <Work works={works} onItem={onItem} />
      {item.isWork ? (
        <WorkModal works={works} item={item} onHide={onHide} />
      ) : null}
    </>
  );
}

export default WorkContainer;
