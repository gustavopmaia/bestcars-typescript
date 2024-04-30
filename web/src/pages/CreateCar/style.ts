import styled from 'styled-components'

export const InputFile = styled.input`
  & + label {
    display: inline-block;
    padding: 10px 15px;
    background-color: #f5f5f5;
    color: #333;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
  }

  & + label:hover {
    background-color: #e0e0e0;
  }

  & + label::before {
    content: 'Upload Photo';
  }

  & + label::after {
    content: 'Choose a file';
    display: inline-block;
    padding: 5px 10px;
    background-color: #fff;
    color: #333;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-left: 10px;
  }

  &:focus + label,
  & + label:hover {
    border-color: #666;
  }

  &:focus + label::after {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }

  & + label * {
    pointer-events: none;
  }
`

export const LabelFile = styled.label`
  display: block;
  text-align: left;
  margin-bottom: 10px;
  font-weight: bold;
  color: #ccc;
`
