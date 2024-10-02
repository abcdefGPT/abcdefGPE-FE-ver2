import { PropsWithChildren } from 'react';

const MainContainer = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className='main-container'>{children}</div>
    </>
  );
};

export default MainContainer;
