const getDay = () => {
  const x = new Date();
  const d = x.getDate().toString();
  const day = d.length === 1 ? `0${d}` : d;
  return day;
};

export default getDay;
