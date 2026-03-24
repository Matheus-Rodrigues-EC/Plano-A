import React, { useEffect } from "react";
import { Typography, Row, Col, Button } from "antd";
import { useNavigate } from "react-router";

import PageContainer from "../../components/PageContainer";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {}, []);

  return (
    <PageContainer>
      <Col span={24} style={{ textAlign: "center", marginTop: "10vh" }}>
        <Row justify="center">
            <Typography.Title
              level={1}
              style={{ color: "silver", fontSize: "4rem" }}
            >
              Plano{" "}
              <Typography.Text
                level={1}
                style={{
                  color: "silver",
                  fontSize: "5rem",
                  fontFamily: "Momo Signature, cursive",
                }}
              >
                A
              </Typography.Text>
            </Typography.Title>
        </Row>
        <Row justify="center">
          <Col>
            <Typography.Text style={{ color: "gray" }}>
              <Typography.Text style={{ fontWeight: 800, color: "#9946ff" }}>
                Organize
              </Typography.Text>{" "}
              fácil.
            </Typography.Text>
          </Col>
        </Row>
        <Row justify="center" style={{ marginTop: "3vh" }}>
          <Col>
            <Typography.Text style={{ color: "gray" }}>
              Transformando{" "}
              <Typography.Text style={{ fontWeight: 800, color: "#9946ff" }}>
                datas
              </Typography.Text>{" "}
              em
            </Typography.Text>
          </Col>
        </Row>
        <Row justify="center">
          <Col>
            <Typography.Text style={{ color: "gray" }}>
              momentos{" "}
              <Typography.Text style={{ fontWeight: 800, color: "#9946ff" }}>
                inesquecíveis.
              </Typography.Text>
            </Typography.Text>
          </Col>
        </Row>
        <Row justify="center" style={{ marginTop: "3vh" }}>
          <Col>
            <Typography.Text style={{ color: "gray" }}>
              Agende e Celebre.
            </Typography.Text>
          </Col>
        </Row>
      </Col>
      <Row>
        <Col span={24} style={{ textAlign: "center", marginTop: "10vh" }}>
          <Row justify="center">
            <Button
              type="default"
              size="large"
              style={{
                margin: "auto",
                width: "200px",
                borderRadius: "5px",
                borderColor: "#6601E1",
                color: "#6601E1",
              }}
              onClick={() => navigate("/events")}
            >
              Listar Eventos
            </Button>
          </Row>
          <Row>
            <Button
              type="default"
              size="large"
              style={{
                margin: "auto",
                width: "200px",
                marginTop: "5vh",
                borderRadius: "5px",
                borderColor: "#6601E1",
                color: "#6601E1",
              }}
              onClick={() => navigate("/events/create")}
            >
              Cadastrar Evento
            </Button>
          </Row>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default Home;
