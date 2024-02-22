import Link from "next/link";

const rings = () => {
  return (
    <div>
      <h1>Rings Page</h1>
      <p>
        <Link href="rings/ringid1">Ring 1</Link>
      </p>
      <p>
        <Link href="rings/ringid2">Ring 2</Link>
      </p>
    </div>
  );
};

export default rings;
