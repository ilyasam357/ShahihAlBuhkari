const CardHadist = (props) => {
  const { children } = props;
  return (
    <>
      <div className="bg-slate-100 dark:bg-slate-900 dark:text-white py-3 px-5 rounded-lg">
        {children}
      </div>
    </>
  );
};

const Number = (props) => {
  const { nomor } = props;
  return (
    <>
      <p className="mb-3">Hadist ke-{nomor}</p>
    </>
  );
};
const TextAr = (props) => {
  const { arab } = props;
  return (
    <>
      <p className="mb-3 text-right arabic leading-[50px] text-xl">{arab}</p>
    </>
  );
};
const TextId = (props) => {
  const { id } = props;
  return (
    <>
      <p>{id}</p>
    </>
  );
};

CardHadist.Number = Number;
CardHadist.TextAr = TextAr;
CardHadist.TextId = TextId;
export default CardHadist;
