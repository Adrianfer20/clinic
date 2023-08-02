
// eslint-disable-next-line react/prop-types
const Message = ({ message, type }) => {
  const classTypeMessage = type?"w-auto fixed left-4 bottom-4 right-4 mx-auto text-center bg-green-600 rounded-md shadow py-2 px-4":"w-auto fixed left-4 bottom-4 right-4 mx-auto text-center bg-red-600 rounded-md shadow py-2 px-4";
  return (
    <div className={classTypeMessage}>
      {message}
    </div>
  );
};

export default Message;
