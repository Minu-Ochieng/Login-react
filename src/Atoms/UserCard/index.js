const UserCard = ({ image, fullName, age,maidenMaid, email }) => {


  return (
    <div>
      <img src={image} alt={`${fullName} profile`} />
      <h2>{fullName}</h2>
      <p>{age}</p>
      <p>{maidenMaid}</p>
      <p>{email}</p>
    </div>
  );
};
export default UserCard;
