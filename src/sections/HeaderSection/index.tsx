import { FC } from 'react';
import Header from '../../components/Header/Header';
import { HeaderContainer } from './HeaderSection.styles';

const HeaderSection: FC = ({ children }) => {
  return (
    <HeaderContainer>
      <Header />
      <div>{children}</div>
    </HeaderContainer>
  );
};

export default HeaderSection;
