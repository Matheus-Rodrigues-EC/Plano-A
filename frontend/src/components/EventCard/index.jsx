import React from "react";
import { Typography, Row, Col, Card, Button, Tooltip } from "antd";
import dayjs from "dayjs";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const EventCard = ({ event }) => {
  return (
    <Card
      style={{
        backgroundColor: "#bebdbd",
        borderRadius: "8px",
        width: "80%",
      }}
      bodyStyle={{ padding: "0.5rem" }}
    >
      <Row type="flex" justify="space-between" style={{ marginBottom: "1rem" }}>
        <Col span={16} style={{ textAlign: "center" }}>
          <Row justify="start">
            <Typography.Text style={{ fontWeight: 500 }}>
              {event.name}
            </Typography.Text>
          </Row>
          <Row justify="space-between">
            <Typography.Text type="secondary" style={{ fontWeight: 500 }}>
              {event.local}
            </Typography.Text>
          </Row>
          <Row justify="start" style={{ marginTop: "0.5rem" }}>
            <Typography.Text type="secondary" style={{ fontWeight: 500 }}>
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
              >
                <EditOutlined />
              </Button>
            </Tooltip>
          </Row>
          <Row justify="end" style={{ marginTop: "0.5rem" }}>
            <Tooltip placement="top" title={"Eliminar Evento"}>
              <Button
                type="primary"
                style={{
                  marginTop: "0.5rem",
                  backgroundColor: "#ca1010",
                  color: "#000",
                }}
              >
                <DeleteOutlined />
              </Button>
            </Tooltip>
          </Row>
        </Col>
        <Row justify="start" style={{ marginTop: "0.5rem" }}>
          <Typography.Text style={{ fontWeight: 500 }}>
            {event.description}
          </Typography.Text>
        </Row>
      </Row>
    </Card>
  );
};

export default EventCard;
