import { FC } from 'react';
import { css } from '@emotion/react';
import { colors } from '@/styles/constants';

const Header: FC = () => {
  return (
    <header css={header}>
      <div css={[container, headerLayout]}>
        <h1 data-testid="headerTitle">RESAS Graph App</h1>
      </div>
    </header>
  );
};

const header = css`
  width: 100%;
  padding: 16px 0;
  background-color: ${colors.primaryBgColor};
`;

const container = css`
  max-width: 1280px;
  padding: 0 4%;
  margin: 0 auto;
`;

const headerLayout = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Header;
