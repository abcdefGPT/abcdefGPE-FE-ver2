type Props = {
  text: string;
  icon: string;
};
const LeftButton = ({ text, icon }: Props) => {
  return (
    <button className='btn mb-3 flex w-full items-center justify-center py-4 text-xl font-bold duration-500 hover:text-blue-800'>
      {icon && (
        <span className='mr-10'>
          <img className='h-10 w-10' src={icon} alt='icon'></img>
        </span>
      )}
      {text}
    </button>
  );
};
export default LeftButton;
