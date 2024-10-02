import LeftMenu from '../components/LeftMenu';
import Profile from '../components/Profile';
import Footer from '../container/Footer';
import Header from '../container/Header';
import LeftContainer from '../container/LeftContainer';
import MainContainer from '../container/MainContainer';

const MainPage = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <LeftContainer>
          <Profile />
          <LeftMenu />
        </LeftContainer>
      </MainContainer>
      <Footer />
    </>
  );
};
export default MainPage;
