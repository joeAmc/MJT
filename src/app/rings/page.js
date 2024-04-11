import RingCard from "../../components/Cards/RingCard";

const Rings = async () => {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const data = await res.json();

  return (
    <>
      <h1>{data.id}</h1>
      <RingCard rings={data} />
    </>
  );
};

export default Rings;
