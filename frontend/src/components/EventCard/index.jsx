import React from "react";
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
// import { createStyles } from "antd-style";
import axios from "axios";
import dayjs from "dayjs";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const stylesCard = {
  body: {
    padding: "0.5rem",
  },
};

const EventCard = ({ event, setEventIdControl }) => {
  const navigate = useNavigate();

  const deleteEvent = async (eventId) => {
    try {
      // console.log("Deleting event with ID:", eventId);
      await axios.delete(`/api/event/${eventId}`);
      message.success("Evento deletado com sucesso");
      setEventIdControl(null); // Reset the control state to trigger re-fetching of events
      navigate("/events");
    } catch (err) {
      console.error("Error deleting event:", err);
      message.error("Erro ao deletar evento. Por favor, tente novamente.");
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
        backgroundColor: "#ffffff8f",
        borderRadius: "8px",
        width: "100%",
      }}
      styles={stylesCard}
    >
      {holder}
      <Row type="flex" justify="space-between" style={{ marginBottom: "1rem" }}>
        <Col span={16} style={{ textAlign: "center" }}>
          <Row justify="start">
            <Typography.Text style={{ fontWeight: 500, color: "#1b003b" }}>
              {event.name}
            </Typography.Text>
          </Row>
          <Row justify="space-between">
            <Typography.Text type="secondary" style={{ fontWeight: 500, color: "#1b003bb2" }}>
              {event.location}
            </Typography.Text>
            {/* </Row>
          <Row justify="start" style={{ marginTop: "0.5rem" }}> */}
            <Typography.Text type="secondary" style={{ fontWeight: 500, color: "#1b003bb2" }}>
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
                }}
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
                  }}
                  onClick={() => setEventIdControl(event.id)}
                >
                  <DeleteOutlined />
                </Button>
              </Popconfirm>
            </Tooltip>
          </Row>
        </Col>
        <Row justify="start" style={{ marginTop: "0.5rem" }}>
          <Typography.Text style={{ fontWeight: 500, color: "#1b003bb2" }}>
            {event.description ? (
              event.description
            ) : (
              <Typography.Text type="secondary" style={{ fontWeight: 500, color: "#1b003bb2" }}>
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
