import React from 'react';
import styles from '../../styles/Component/login/InputForm.module.css';

interface InputFormProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const InputForm: React.FC<InputFormProps> = ({ value, onChange, placeholder }) => {
  return (
    <div className={styles.container}>
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
    </div>
  );
};

export default InputForm;
