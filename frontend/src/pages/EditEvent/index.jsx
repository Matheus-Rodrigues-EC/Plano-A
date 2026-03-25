import React, { useEffect } from "react";
import { useParams } from "react-router";
import { Typography, Row, Col } from "antd";

import PageContainer from "../../components/PageContainer";
import AppHeader from "../../components/AppHeader";
import EventForm from "../../components/EventForm";

const EditEvent = ({ eventId }) => {
  const { id } = useParams();
  useEffect(() => {}, [eventId]);

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
            Editar Evento
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
            <EventForm eventId={id} />
          </Col>
        </Row>
      </Col>
    </PageContainer>
  );
};

export default EditEvent;
