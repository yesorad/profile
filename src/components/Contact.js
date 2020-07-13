import React from 'react';
import styled from 'styled-components';

const FormBlock = styled.form`
  width: 100%;
  margin: 0 auto;
`;

const Input = styled.input`
  width: 100%;
  background: ${({ theme }) => theme.bgForm};
  height: 2.083rem;
  font-size: 0.666rem;
  color: ${({ theme }) => theme.textForm};
  border: 1px solid ${({ theme }) => theme.formBoarder};
  padding: 0 0.833rem;
  box-sizing: border-box;
  border-radius: 0.208rem;
  display: block;
  margin-bottom: 0.416rem;
  font-family: initial;

  &::placeholder {
    font-family: initial;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  background: ${({ theme }) => theme.bgForm};
  border: 1px solid ${({ theme }) => theme.formBoarder};
  height: 12.5rem;
  font-size: 0.666rem;
  color: ${({ theme }) => theme.textForm};
  padding: 0.833rem;
  box-sizing: border-box;
  border-radius: 0.208rem;
  display: block;
  margin-bottom: 0.416rem;
  resize: none;
  font-family: initial;

  &::placeholder {
    font-family: initial;
  }
`;

const Button = styled.button`
  width: 100%;
  color: ${({ theme }) => theme.btnColor};
  font-size: 0.666rem;
  letter-spacing: 1px;
  height: 2.083rem;
  line-height: 2.083rem;
  border-radius: 0.166rem;
  text-align: center;
  cursor: pointer;
  background: ${({ theme }) => theme.subColor};
  border: none;
  font-weight: bold;
  font-family: initial;
  display: inline-block;
`;

function Contact({ forms, onSubmit, onChange }) {
  return (
    <FormBlock onSubmit={onSubmit}>
      <Input
        type="text"
        name="name"
        placeholder="Name"
        onChange={onChange}
        value={forms.name}
      />
      <Input
        type="email"
        name="email"
        placeholder="Email"
        onChange={onChange}
        value={forms.email}
      />
      <Input
        type="tel"
        name="phone"
        placeholder="Phone"
        onChange={onChange}
        value={forms.phone}
      />
      <Textarea
        name="message"
        placeholder="Message"
        onChange={onChange}
        value={forms.message}
      ></Textarea>
      <Button type="submit">SEND MESSAGE</Button>
    </FormBlock>
  );
}

export default Contact;
