// eslint-disable-next-line react/prop-types
export function Input({ children, id, type, text, handleChange }) {
  if (!children)
    return (
      <input
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        className="w-full border-2 border-yellow-400 text-slate-900 rounded-full px-3 py-1"
        placeholder={text}
        type={type}
        id={id}
      />
    );
  else
    return (
      <div className="w-full flex gap-2 border-2 border-yellow-400 text-slate-900 rounded-full px-3 py-1 focus-within:border-yellow-900">
        {children}
        <input
          className="w-full bg-transparent border-none focus:border-none focus-visible:outline-none"
          placeholder={text}
          type={type}
          id={id}
        />
      </div>
    );
}
