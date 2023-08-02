// eslint-disable-next-line react/prop-types
export function Btn({ children, type, text, handleClick }) {
  const isIcon = children ? "flex items-center justify-center gap-2":"";
  const classNameType = type
    ? isIcon + " border-none rounded-full bg-yellow-400 text-yellow-900 uppercase py-1 px-4"
    : isIcon + " rounded-full bg-transparent text-yellow-900 uppercase border-2 border-yellow-900 py-1 px-6";
  return (
    <button
      className={classNameType}
      onClick={(e) => {
        handleClick(e);
      }}
    >
      {text}
      {children}
    </button>
  );
}
