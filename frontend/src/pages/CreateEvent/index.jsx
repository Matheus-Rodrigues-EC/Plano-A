import React, { useEffect } from "react";
import { Typography, Row, Col } from "antd";

import PageContainer from "../../components/PageContainer";
import AppHeader from "../../components/AppHeader";
import EventForm from "../../components/EventForm";

const CreateEvent = () => {
  useEffect(() => {}, []);

  return (
    <PageContainer>
      <AppHeader />
      <Col span={24} style={{ textAlign: "center" }}>
        <Row justify="center">
          <Typography.Text
            style={{
              color: "silver",
              marginTop: "5vh",
              fontSize: "2rem",
              fontWeight: 400,
              margin: "0.5rem 0.75rem",
            }}
          >
            Cadastrar Evento
          </Typography.Text>
        </Row>
        <Row
          justify=""
          style={{
            marginBottom: "5vh",
            width: "80%",
            margin: "auto ",
          }}
        >
          <Col span={24}>
            <EventForm />
          </Col>
        </Row>
      </Col>
    </PageContainer>
  );
};

export default CreateEvent;
