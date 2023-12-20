const NavTop = (props) => {
    const { children } = props;
  return (
    <div className="bg-slate-100 border-b-2 border-slate-500 py-4 w-full fixed z-30 px-3">
      <div className="flex gap-2">
        {children}
        <h1 className="text-green-500 font-bold text-xl">SHAHIH AL-BUKHARI</h1>
      </div>
    </div>
  );
};

export default NavTop;
