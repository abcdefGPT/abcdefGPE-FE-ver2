import HeaderMenu from '../components/HeaderMenu';
import Logo from '../components/Logo';

const Header = () => {
  return (
    <>
      <div className='fixed left-0 top-0 z-50 flex h-16 w-full justify-center bg-black'>
        <div className='grid h-full w-full max-w-7xl grid-cols-2 px-5'>
          <Logo />
          <HeaderMenu />
        </div>
      </div>
    </>
  );
};

export default Header;
