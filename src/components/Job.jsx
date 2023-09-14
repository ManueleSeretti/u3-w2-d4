import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Job = ({ data }) => {
  const preferiti = useSelector((state) => state.companysFavourites.content);

  const controll = preferiti.find((elem) => elem === data.company_name);

  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={3}>
        <div className="d-flex aling-items-center">
          <Link to={`/${data.company_name}`}>{data.company_name}</Link>
          {controll && <i className="bi bi-heart-fill ms-5"></i>}
        </div>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

export default Job;
