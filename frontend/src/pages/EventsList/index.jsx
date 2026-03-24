/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography, Row, Col } from "antd";

import PageContainer from "../../components/PageContainer";
import AppHeader from "../../components/AppHeader";
import EventCard from "../../components/EventCard";

const EventsList = () => {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(`/api/event`);
      setEvents(response.data);
      console.log("Fetched events:", response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    console.log("Fetching events...");
    fetchEvents();
  }, []);

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
            Lista de Eventos
          </Typography.Text>
        </Row>
        {events.map((event) => (
          <Row key={event.id} justify="center" style={{ marginBottom: "1rem" }}>
            <EventCard event={event} />
          </Row>
        ))}
      </Col>
    </PageContainer>
  );
};

export default EventsList;
