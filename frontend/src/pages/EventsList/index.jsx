import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import * as eventService from "../../services/events";
import { Typography, Row, Col, Button, Empty, Flex, Spin } from "antd";
import { PlusOutlined, LoadingOutlined } from "@ant-design/icons";

import PageContainer from "../../components/PageContainer";
import AppHeader from "../../components/AppHeader";
import EventCard from "../../components/EventCard";

const EventsList = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();
  // const [eventIdConttrol, setEventIdControl] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const response = await eventService.getEvents();
      setEvents(response);
      // console.log("Fetched events:", response);
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // console.log("Fetching events...");
    fetchEvents();
  }, []);

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
            size="default"
            style={{
              margin: "auto",
              width: "auto",
              borderRadius: "5px",
              borderColor: "#6601E1",
              color: "#6601E1",
              backgroundColor: "#ffffffe7",
              padding: "0.55rem",
            }}
            disabled={loading}
            loading={loading}
            onClick={() => navigate("/events/create")}
          >
            <PlusOutlined />
            Cadastrar Evento
          </Button>
        </Row>
        <Col span={24} style={{ overflowY: "auto", maxHeight: "75vh" }}>
          {loading ? (
            <Flex justify="center" align="middle" style={{ margin: "5rem" }}>
              <Spin
                indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
              />
            </Flex>
          ) : events.length === 0 ? (
            <Empty
              description="Nenhum evento encontrado"
              style={{ margin: "5rem" }}
            />
          ) : (
            events.map((event) => (
              <Row
                key={event.id}
                justify="center"
                style={{ marginBottom: "1rem" }}
              >
                <EventCard event={event} fetchEvents={fetchEvents} />
              </Row>
            ))
          )}
        </Col>
      </Col>
    </PageContainer>
  );
};

export default EventsList;
