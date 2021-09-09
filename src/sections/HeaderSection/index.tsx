import { FC } from 'react';
import Header from '../../components/Header/Header';
import { HeaderContainer } from './HeaderSection.styles';
import UploadFile from '../../components/DropContent/UploadFIle/UploadFile';

const HeaderSection: FC = ({ children }) => {
  return (
    <HeaderContainer>
      <Header />
      <UploadFile />
      <div>{children}</div>
    </HeaderContainer>
  );
};

export default HeaderSection;
