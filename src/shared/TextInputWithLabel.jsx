import styled from 'styled-components';

const StyledLabel = styled.label`
  font-family: var(--primary-font);
  margin-right: 0.2rem;
`;

const StyledInput = styled.input`
  font-family: var(--primary-font);
`;

function TextInputWithLabel({ elementId, labelText, onChange, ref, value }) {
  return (
    <>
      <StyledLabel htmlFor={elementId}>{labelText}</StyledLabel>
      <StyledInput
        type="text"
        id={elementId}
        ref={ref}
        value={value}
        onChange={onChange}
      ></StyledInput>
    </>
  );
}

export default TextInputWithLabel;
