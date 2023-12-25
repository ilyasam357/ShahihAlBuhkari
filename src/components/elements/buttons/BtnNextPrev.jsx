const BtnNextPrev = (props) => {
  const { children, customClass, ketikaKlik, disabled } = props;
  return (
    <>
      <button
        className={`px-3 py-1 rounded-lg bg-gray-200 ml-2 dark:bg-slate-900 dark:text-white ${customClass}`}
        onClick={ketikaKlik}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  );
};

export default BtnNextPrev;
