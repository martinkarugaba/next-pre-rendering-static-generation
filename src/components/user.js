const User = ({user}) => {
  return (
    <div className="text-lg font-normal">
      <p>{user.name}</p>
      <p>{user.email}</p>
      <hr />
    </div>
  );
}
export default User;