import React, { FC } from 'react';

const Button: FC<{ text: string }> = (props) => {
  return <button type="button">{props.text}</button>;
};

export default Button;
