import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { toggleModal } from '../modules/modal';
import { useSelector, useDispatch } from 'react-redux';
import Contact from '../components/Contact';
import Modal from '../components/common/Modal';
import Loading from '../components/common/Loading';

function ContactContainer() {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const onToggle = useCallback(() => dispatch(toggleModal()), [dispatch]);

  const [forms, setForms] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [confirm, setConfirm] = useState({
    text: '',
    isLoader: false,
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForms({
      ...forms,
      [name]: value,
    });
  };

  const modalView = (msg) => {
    setConfirm({ text: msg });
    onToggle();
  };

  const dataForm = async () => {
    let formData = new FormData();
    formData.append('name', forms.name);
    formData.append('email', forms.email);
    formData.append('phone', forms.phone);
    formData.append('message', forms.message);

    setConfirm({
      isLoader: true,
    });

    try {
      const data = await axios.post(
        'https://script.google.com/macros/s/AKfycbwmJWcGWDxxXAUGiHrks9joL8akO-NGskcAzOQXtQ/exec',
        formData,
      );
      if (data) {
        modalView('전송에 성공하였습니다.');
      } else {
        modalView('전송에 실패하였습니다.');
      }
    } catch (e) {
      modalView(e);

      setConfirm({
        isLoader: false,
      });
    }

    setConfirm({
      isLoader: false,
    });

    setForms({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    switch (true) {
      case !forms.name:
        modalView('이름을 입력하세요.');
        break;
      case !forms.email:
        modalView('이메일을 입력하세요.');
        break;
      case !forms.phone:
        modalView('전화번호를 입력하세요.');
        break;
      case !forms.message:
        modalView('내용을 입력하세요.');
        break;
      default:
        return dataForm();
    }
  };

  return (
    <>
      <Contact
        onSubmit={onSubmit}
        onChange={onChange}
        forms={forms}
        modal={modal}
      />
      {modal.isModal ? <Modal onToggle={onToggle} text={confirm.text} /> : null}
      {confirm.isLoader ? <Loading /> : null}
    </>
  );
}

export default ContactContainer;
