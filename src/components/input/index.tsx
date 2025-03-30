import { Input as AntInput } from 'antd';
import styled from 'styled-components';
import { InputProps } from 'antd/lib/input';

const StyledInput = styled(AntInput)`
  &.ant-input,
  &.ant-input-password,
  &.ant-input-affix-wrapper {
    border-radius: 8px;
    border-color: #e5e7eb;
    font-size: 14px;
    transition: all 0.3s ease;

    &:hover {
      border-color: #171717;
    }

    &:focus,
    &-focused {
      border-color: #171717;
      box-shadow: 0 0 0 2px rgba(23, 23, 23, 0.1);
    }
  }

  &.ant-input-affix-wrapper {
    .ant-input {
      &:focus {
        box-shadow: none;
      }
    }
  }

  &.ant-input-disabled {
    background-color: #f5f5f5;
    border-color: #d9d9d9;
    
    &:hover {
      border-color: #d9d9d9;
    }
  }
`;

const { TextArea, Password, Search } = AntInput;

const StyledTextArea = styled(TextArea)`
  &.ant-input {
    border-radius: 8px;
    border-color: #e5e7eb;
    
    &:hover {
      border-color: #171717;
    }

    &:focus {
      border-color: #171717;
      box-shadow: 0 0 0 2px rgba(23, 23, 23, 0.1);
    }
  }
`;

const StyledPassword = styled(Password)`
  &.ant-input-password {
    border-radius: 8px;
    border-color: #e5e7eb;
    
    &:hover {
      border-color: #171717;
    }

    &:focus {
      border-color: #171717;
      box-shadow: 0 0 0 2px rgba(23, 23, 23, 0.1);
    }
  }
`;

const StyledSearch = styled(Search)`
  .ant-input-group {
    display: flex;
  }

  .ant-input {
    border-radius: 8px 0 0 8px;
    border-color: #e5e7eb;
    
    &:hover, &:focus {
      border-color: #171717;
    }
  }

  .ant-input-group-addon {
    .ant-btn {
      border-radius: 0 8px 8px 0;
      border-color: #171717;
      background-color: #171717;
      
      &:hover {
        background-color: #404040;
        border-color: #404040;
      }
    }
  }
`;

export const Input = (props: InputProps) => {
  return <StyledInput {...props} />;
};

Input.TextArea = StyledTextArea;
Input.Password = StyledPassword;
Input.Search = StyledSearch;

export default Input;