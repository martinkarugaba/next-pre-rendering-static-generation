import User from "@/components/user";

const UserList = ({users}) => {
  return (
    <>
      <h1 className="text-4xl font-medium">List of users</h1>
      {users.map((user) => (
        <div key={user.id}>
          <User user={user} />
        </div>
      ))}
    </>
  );
};
export default UserList;

export const getStaticProps = async () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const response = await fetch(url);
  const data = await response.json();

  return {
    props: {
      users: data,
    },
  };
};
