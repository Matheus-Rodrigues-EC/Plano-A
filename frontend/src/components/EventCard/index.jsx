import React, { useState } from "react";
import { useNavigate } from "react-router";
import {
  Typography,
  Row,
  Col,
  Card,
  Button,
  Tooltip,
  message,
  Popconfirm,
} from "antd";
import * as eventService from "../../services/events";
import dayjs from "dayjs";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const stylesCard = {
  body: {
    padding: "0.5rem",
  },
};

const EventCard = ({ event, fetchEvents }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const deleteEvent = async (eventId) => {
    try {
      setLoading(true);
      // console.log("Deleting event with ID:", eventId);
      await eventService.deleteEvent(eventId);
      message.success("Evento deletado com sucesso");
      navigate("/events");
    } catch (err) {
      console.error("Error deleting event:", err);
      message.error("Erro ao deletar evento. Por favor, tente novamente.");
    } finally {
      setLoading(false);
      fetchEvents(); // Re-fetch events after deletion to update the <list></list>
    }
  };

  const [messageApi, holder] = message.useMessage();
  const confirm = (e) => {
    // console.log(e);
    deleteEvent(e);
  };
  const cancel = (e) => {
    console.log(e);
    messageApi.warning("Evento não deletado");
  };

  return (
    <Card
      style={{
        backgroundColor: "#ffffffe7",
        borderRadius: "8px",
        width: "100%",
      }}
      styles={stylesCard}
    >
      {holder}
      <Row type="flex" justify="space-between" style={{ marginBottom: "1rem" }}>
        <Col span={16} style={{ textAlign: "center" }}>
          <Row justify="start">
            <Typography.Text style={{ fontWeight: 500, fontSize: "1.5rem", color: "#1b003b" }}>
              {event.name}
            </Typography.Text>
          </Row>
          <Row justify="space-between">
            <Typography.Text
              type="secondary"
              style={{ fontWeight: 500, fontSize: "1.15rem", color: "#1b003bb2" }}
            >
              {event.location}
            </Typography.Text>
            {/* </Row>
          <Row justify="start" style={{ marginTop: "0.5rem" }}> */}
            <Typography.Text
              type="secondary"
              style={{ fontWeight: 500, fontSize: "1.15rem", color: "#1b003bb2" }}
            >
              {dayjs(event.date).format("DD/MM/YYYY")}
            </Typography.Text>
          </Row>
        </Col>
        <Col span={8}>
          <Row justify="end" align="top">
            <Tooltip placement="top" title={"Editar Evento"}>
              <Button
                type="primary"
                style={{
                  marginTop: "0.15rem",
                  backgroundColor: "#d5e401",
                  color: "#000",
                  borderColor: "#1b003b",
                }}
                disabled={loading}
                loading={loading}
                onClick={() => navigate(`/events/edit/${event.id}`)}
              >
                <EditOutlined />
              </Button>
            </Tooltip>
          </Row>
          <Row justify="end" style={{ marginTop: "0.5rem" }}>
            <Tooltip placement="top" title={"Eliminar Evento"}>
              <Popconfirm
                title="Deletar evento."
                description="Tem certeza que deseja deletar este evento?"
                onConfirm={() => confirm(event.id)}
                onCancel={cancel}
                okText="Sim!"
                cancelText="Não!"
              >
                <Button
                  type="primary"
                  style={{
                    marginTop: "0.5rem",
                    backgroundColor: "#ca1010",
                    color: "#000",
                    borderColor: "#1b003b",
                  }}
                  disabled={loading}
                  loading={loading}
                >
                  <DeleteOutlined />
                </Button>
              </Popconfirm>
            </Tooltip>
          </Row>
        </Col>
        <Row justify="start" style={{ marginTop: "0.5rem" }}>
          <Typography.Text style={{ fontWeight: 500, fontSize: "1rem", color: "#1b003bb2" }}>
            {event.description ? (
              event.description
            ) : (
              <Typography.Text
                type="secondary"
                style={{ fontWeight: 500, color: "#1b003bb2" }}
              >
                Sem descrição cadastrada.
              </Typography.Text>
            )}
          </Typography.Text>
        </Row>
      </Row>
    </Card>
  );
};

export default EventCard;
