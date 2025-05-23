import React from 'react';
import NameInput from './NameInput';
import EmailInput from './EmailInput';

export default function UserInfo({ name, setName, email, setEmail }) {
  return (
    <div>
      <NameInput name={name} setName={setName} />
      <EmailInput email={email} setEmail={setEmail} />
    </div>
  );
}
