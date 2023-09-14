import { Alert, Button, Container, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Favourites = () => {
  const companysFavourites = useSelector((state) => state.companysFavourites.content);
  const dispatch = useDispatch();

  return companysFavourites.length > 0 ? (
    <Container>
      <h2>Le tue aziende preferite sono:</h2>
      <ListGroup>
        {companysFavourites.map((company, i) => (
          <Link to={`/${company}`}>
            <ListGroup.Item>
              {company}
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  dispatch({ type: "DEL_FAV", payload: i });
                }}
              >
                Delete
              </Button>
            </ListGroup.Item>
          </Link>
        ))}
      </ListGroup>
    </Container>
  ) : (
    <Alert variant="danger">non ci sono aziende preferite</Alert>
  );
};
export default Favourites;
