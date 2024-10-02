import LeftButton from './Button/LeftButton';

const LeftMenu = () => {
  return (
    <>
      <div className='m-2 h-96 overflow-y-scroll border-t-2 p-2'>
        <LeftButton
          text='AI 어시스턴트'
          icon={'src/assets/icons/technical-support.png'}
        ></LeftButton>
        <LeftButton text='기타 메뉴' icon={''}></LeftButton>
        <LeftButton text='기타 메뉴' icon={''}></LeftButton>
        <LeftButton text='기타 메뉴' icon={''}></LeftButton>
        <LeftButton text='기타 메뉴' icon={''}></LeftButton>
        <LeftButton text='기타 메뉴' icon={''}></LeftButton>
        <LeftButton text='기타 메뉴' icon={''}></LeftButton>
        <LeftButton text='기타 메뉴' icon={''}></LeftButton>
        <LeftButton text='기타 메뉴' icon={''}></LeftButton>
      </div>
    </>
  );
};
export default LeftMenu;
