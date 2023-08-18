import useFetch from "./utils/useFetch";

const FetchData = () => {
  const url = "https://jsonplaceholder.typicode.com/users";

  const { data, loading, error } = useFetch(url, {}); //custom hook and object destructuring

  if (loading) return <h1>Loading.....!!</h1>;
  if (error) return <h1>Something went wrong, please check the error</h1>;
  return (
    <div>
      <h1>Fetching data from using API</h1>
      {data.map((item) => (
        <h1 key={item.id}>{item?.name}</h1>
      ))}
    </div>
  );
};

export default FetchData;
