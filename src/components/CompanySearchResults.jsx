import { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Job from "./Job";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const CompanySearchResults = () => {
  // const [jobs, setJobs] = useState([]);
  const params = useParams();
  const companys = useSelector((state) => state.companys.content);
  const dispatch = useDispatch();

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.company);
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: "SET_COMPANYS", payload: data });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>
          <Button
            onClick={() => {
              dispatch({ type: "ADD_COM_FAV", payload: params.company });
            }}
            variant="success"
          >
            aggiungi azienda ai preferiti
          </Button>
          <Link to="/favourites">
            <Button className="mt-5" variant="success">
              Aziende Preferite
            </Button>
          </Link>
          {companys.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
