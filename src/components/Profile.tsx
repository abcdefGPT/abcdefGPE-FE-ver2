const Profile = () => {
  return (
    <>
      <div className='h-fit p-10'>
        <h2 className='mb-5'>업무 관리</h2>
        <span className='flex items-center justify-center'>
          <img
            className='h-56 w-56 rounded-full object-cover'
            src='src/assets/images/person.png'
            alt='사진'
          />
        </span>
        <div>
          <h3 className='mt-2'>Lisa 대리</h3>
          <small className='text-gray-500'>개발1팀</small>
        </div>
      </div>
    </>
  );
};
export default Profile;
