import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='menu'>
        <div className='relative w-fit'>
          <a
            className='underline-animation underline-animation-hover cursor-pointer'
            onClick={() => navigate('/register')}
          >
            SignUp
          </a>
        </div>
        <span className='mx-4'>|</span>
        <div className='relative w-fit'>
          <a
            className='underline-animation underline-animation-hover cursor-pointer'
            onClick={() => navigate('/login')}
          >
            SignIn
          </a>
        </div>
      </div>
    </>
  );
};
export default Menu;
