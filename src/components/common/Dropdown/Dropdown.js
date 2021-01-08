import React from 'react';

import * as S from './Dropdown.styles';

const Dropdown = ({
  /**
   * an option is of type
   * { 
   *    key: string | number;
   *    label: any;
   *    value: string | number;
   * }
   */
  options = [],
  value = '',
  onChange = () => {},
}) => {
  return (
    <S.Select
      value={value}
      onChange={onChange}
    >
        {options.map(option => (
          <S.Option 
            key={option.key}
            value={option.value}
          >
            {option.label}
          </S.Option>
        ))}
    </S.Select>
  )
}

export default Dropdown;
