import { FC, ChangeEventHandler } from 'react';
import { css } from '@emotion/react';
import { breakPoint } from '@/styles/constants';

type Props = {
  label: string;
  isDisabled: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const CheckBox: FC<Props> = ({ label, isDisabled, onChange }) => {
  return (
    <label css={checkBoxControl}>
      <input
        css={checkBox}
        data-testid="checkbox"
        type="checkbox"
        disabled={isDisabled}
        onChange={onChange}
      />
      <span css={labelText} data-testid="checkboxLabelText">
        {label}
      </span>
    </label>
  );
};

const checkBoxControl = css`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const checkBox = css`
  width: 18px;
  height: 18px;
  cursor: inherit;

  @media (min-width: ${breakPoint.sm}px) {
    width: 24px;
    height: 24px;
  }
`;

const labelText = css`
  margin-left: 8px;
  font-size: 18px;

  @media (min-width: ${breakPoint.sm}px) {
    margin-left: 8px;
    font-size: 24px;
  }
`;

export default CheckBox;
