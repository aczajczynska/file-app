import { FC } from 'react';
import Header from '../Header/Header';

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
};

export default Layout;
