import { Col, Row, Typography, Button } from "antd";
import { useNavigate } from "react-router";

const AppHeader = () => {
  const navigate = useNavigate();

  return (
    <Row style={{ backgroundColor: "#6601E1", padding: "5px" }}>
      <Col span={24}>
        <Row
          justify="center"
          align="middle"
          style={{ height: "100%" }}
          onClick={() => navigate("/")}
        >
          <Typography.Text
            level={1}
            style={{ color: "silver", fontSize: "2rem" }}
          >
            Plano{" "}
            <Typography.Text
              level={1}
              style={{
                color: "silver",
                fontSize: "3rem",
                fontFamily: "Momo Signature, cursive",
              }}
            >
              A
            </Typography.Text>
          </Typography.Text>
        </Row>
      </Col>
    </Row>
  );
};

export default AppHeader;
