import Card from "react-bootstrap/Card";

export default function UserData({ user }) {
  return (
    <div>
      <Card.Title className="mb-3">My Account</Card.Title>
      <Card.Subtitle className="mb-3 text-muted">
        Logged in as {user.firstName} {user.lastName}
      </Card.Subtitle>
      <Card.Text className="mb-0">
        {user.streetNumber || ""} {user.streetName || ""}
      </Card.Text>
      <Card.Text className="mb-0">{user.city || ""}</Card.Text>
      <Card.Text className="mb-0">{user.country || ""}</Card.Text>
      <Card.Text className="mb-3">{user.postalCode || ""}</Card.Text>
    </div>
  );
}
