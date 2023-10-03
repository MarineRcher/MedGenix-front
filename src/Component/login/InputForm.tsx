import React from 'react';
import styles from '../../styles/Component/login/InputForm.module.css';

interface InputFormProps {
  id: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const InputForm: React.FC<InputFormProps> = ({ id, type, value, onChange, placeholder }) => {
  return (
    <div className={styles.container}>
    <input
        id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
        autoComplete="off"
    />
    </div>
  );
};

export default InputForm;
