import React, { useState } from 'react';
import Work from '../components/Work';
import WorkModal from '../components/common/WorkModal';

function WorkContainer() {
  const works = [
    {
      id: 1,
      title: 'MBC 아카데미 뷰티 학원 PC',
      thumb: 'http://placehold.it/300x300/00ffff',
      modalImg: 'http://placehold.it/500x700/ff0000',
      link: '//off.mbcbeauty.co.kr/m',
    },
    {
      id: 2,
      title: 'MBC 아카데미 뷰티 학원 M',
      thumb: 'http://placehold.it/300x300/00ffff',
      modalImg: 'http://placehold.it/300x300/00ffff',
      link: '//off.mbcbeauty.co.kr',
    },
    {
      id: 3,
      title: '스카이에듀 15분강의 M',
      thumb: 'http://placehold.it/300x300/ff0000',
      modalImg: 'http://placehold.it/500x700/ffff00',
      link: '//skyedu.conects.com/m/lecture/fifteen_center',
    },
    {
      id: 4,
      title: '커넥츠 프로젝트 PC',
      thumb: 'http://placehold.it/300x300/ff0000',
      modalImg: 'http://placehold.it/500x700/ffff00',
      link: '//project.conects.com/',
    },
    {
      id: 5,
      title: '프로젝트 클래스 후기 PC',
      thumb: 'http://placehold.it/300x300/ff0000',
      modalImg: 'http://placehold.it/500x700/ffff00',
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
      <Work works={works} item={item} onItem={onItem} />
      {item.isWork ? (
        <WorkModal works={works} item={item} onHide={onHide} />
      ) : null}
    </>
  );
}

export default WorkContainer;
