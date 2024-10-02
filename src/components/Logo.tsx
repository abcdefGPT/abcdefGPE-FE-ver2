import { useNavigate } from 'react-router-dom';
import { TbAbc } from 'react-icons/tb';

const Logo = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='relative flex h-full w-fit'>
        <div
          className='underline-animation underline-animation-hover cursor-pointer'
          onClick={() => navigate('/')}
        >
          <div className='mt-3 flex items-center'>
            <TbAbc className='mr-2 rounded-md border' color='white' size='40' />
            <h1>abcdefGPT</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logo;
