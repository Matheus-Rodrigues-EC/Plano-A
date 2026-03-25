/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { Typography, Row, Col, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import PageContainer from "../../components/PageContainer";
import AppHeader from "../../components/AppHeader";
import EventCard from "../../components/EventCard";

const EventsList = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();
  const [eventIdConttrol, setEventIdControl] = useState(null);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(`/api/event`);
      setEvents(response.data);
      // console.log("Fetched events:", response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    // console.log("Fetching events...");
    fetchEvents();
  }, [eventIdConttrol]); // Re-fetch events when the number of events changes

  useEffect(() => {}, [events]);

  return (
    <PageContainer>
      <AppHeader />
      <Col
        span={22}
        style={{
          textAlign: "center",
          justifyContent: "center",
          margin: "0 auto",
        }}
      >
        <Row
          justify="center"
          type="flex"
          align="middle"
          style={{ margin: "1rem 0", passing: "0 1rem" }}
        >
          <Typography.Text
            style={{
              color: "silver",
              fontSize: "1.35rem",
              fontWeight: 400,
              margin: "auto",
            }}
          >
            Lista de Eventos
          </Typography.Text>

          <Button
            type="default"
            size="large"
            style={{
              margin: "auto",
              width: "auto",
              borderRadius: "5px",
              borderColor: "#6601E1",
              color: "#6601E1",
              padding: "0.55rem",
            }}
            onClick={() => navigate("/events/create")}
          >
            <PlusOutlined />
            Cadastrar Evento
          </Button>
        </Row>
        <Col span={24} style={{ overflowY: "auto", maxHeight: "75vh" }}>
          {events.map((event) => (
            <Row
              key={event.id}
              justify="center"
              style={{ marginBottom: "1rem" }}
            >
              <EventCard event={event} setEventIdControl={setEventIdControl} />
            </Row>
          ))}
        </Col>
      </Col>
    </PageContainer>
  );
};

export default EventsList;
