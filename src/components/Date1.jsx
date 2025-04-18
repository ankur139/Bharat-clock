let Date1 = () => {
  const date = new Date();
  const showTtime =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

  return (
    <div className="Date1">
      <p className="lead">
        This is the Current Time: {date.toLocaleDateString()}-
        {showTtime}
      </p>
    </div>
  );
};
export default Date1;
