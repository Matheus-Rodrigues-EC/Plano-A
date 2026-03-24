import React from "react";
import { Typography, Row, Col, Form, notification, Input, Button } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";

const EventForm = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();

  const onFinish = (values) => {
    console.log("Success:", values);
    api.success({
      message: "Evento criado",
      description: `Evento "${values.eventName}" criado com sucesso!`,
    });
    form.resetFields();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    api.error({
      message: "Erro ao cadastrar evento",
      description: "Por favor, preencha todos os campos corretamente.",
    });
  };

  return (
    <Col span={24} style={{ textAlign: "center" }}>
      {contextHolder}

      <Form
        form={form}
        name="eventForm"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        style={{
          maxWidth: "80%px",
          margin: "0 auto",
          padding: "20px",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Form.Item
          label="Nome do Evento"
          name="eventName"
          rules={[
            {
              required: true,
              message: "Por favor, insira um nome para o Evento!",
            },
          ]}
        >
          <Input style={{ width: "100%" }} placeholder="Nome do evento" />
        </Form.Item>

        <Form.Item
          label="Data do Evento"
          name="eventDate"
          rules={[
            {
              required: true,
              message: "Por favor, selecione a data do evento!",
            },
          ]}
        >
          <Input type="date" style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Local do Evento"
          name="eventLocation"
          rules={[
            { required: true, message: "Por favor, insira o local do evento!" },
          ]}
        >
          <Input style={{ width: "100%" }} placeholder="Local do Evento" />
        </Form.Item>

        <Form.Item
          label="Descrição do Evento"
          name="eventDescription"
          rules={[
            {
              required: true,
              message: "Por favor, insira a descrição do evento!",
            },
          ]}
        >
          <Input.TextArea
            style={{ width: "100%" }}
            rows={5}
            placeholder="Descrição do Evento"
          />
        </Form.Item>

        {/* <Form.Item>
          <Button type="default">Create Event</Button>
        </Form.Item> */}
      </Form>

      <Row
        justify="center"
        gutter={16}
        style={{ marginTop: "20px" }}
        type="flex"
      >
        <Button
          type="default"
          size="default"
          style={{
            margin: "auto",
            width: "auto",
            borderRadius: "5px",
            borderColor: "#e1a501",
            color: "#e1a501",
            fontWeight: "semi-bold",
          }}
          onClick={() => navigate("/events")}
        >
          <CloseOutlined />
          Cancelar
        </Button>
        <Button
          type="default"
          size="default"
          style={{
            margin: "auto",
            width: "auto",
            borderRadius: "5px",
            borderColor: "#00bd00",
            color: "#00bd00",
            fontWeight: "semi-bold",
          }}
          onClick={() => form.submit()}
        >
          <CheckOutlined />
          Cadastrar Evento
        </Button>
      </Row>
    </Col>
  );
};

export default EventForm;
