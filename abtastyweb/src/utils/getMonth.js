const getMonth = () => {
  const x = new Date();
  const m = (x.getMonth() + 1).toString();
  const month = m.length === 1 ? `0${m}` : m;
  return month;
};

export default getMonth;
