import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useContext } from 'react';
import UserCard from './UserCard';
import { UserContext } from '../Contexts';

export default function UserPage() {
  const { user, setUser } = useContext(UserContext);
  const currUser = user.currUser;

  return (
    <Row>
      <Col>
        <UserCard user={currUser} setUser={setUser} />
      </Col>
      <Col>
        <Card className="orderHistoryCard" style={{ width: '30rem' }}>
          <Card.Body>
            <Card.Title className="mb-4">Order History</Card.Title>
            <Card.Text className="">No orders yet.</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
