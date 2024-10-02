import { PropsWithChildren } from 'react';

const LeftContainer = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className='left-container overflow-hidden'>{children}</div>
    </>
  );
};
export default LeftContainer;
