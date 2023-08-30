const Sample = (props) => {
  const { id } = props;
  return (
    <div className="flex justify-center">
      {!id ? (
        <h1 className="font-bold">
          Received id is "zero" or no props received
        </h1>
      ) : (
        <h1>{id}</h1>
      )}
    </div>
  );
};

export default Sample;
