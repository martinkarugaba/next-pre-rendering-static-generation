import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1 className="text-4xl font-medium">Next js pre-rendering</h1>
      <div className="text-lg cursor-pointer">
        <Link href="/users">Users</Link>
      </div>
      <hr />
      <div className="text-lg cursor-pointer">
        <Link href="/posts">Posts</Link>
      </div>
    </>
  );
};
export default Home;
