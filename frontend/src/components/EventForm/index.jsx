import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Form, notification, Input, Button } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";
import dayjs from "dayjs";

const EventForm = ({ eventId }) => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();
  const [loading, setLoading] = useState(false);

  const getEditEvent = async (eventId) => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/event/${eventId}`);
      // console.log("Fetched event data:", response.data);
      form.setFieldsValue({
        eventName: response.data.name,
        eventDate: dayjs(response.data.date).format("YYYY-MM-DD"),
        eventLocation: response.data.location,
        eventDescription: response.data.description,
      });
    } catch (err) {
      console.error("Error fetching event data:", err);
      api.error({
        message: "Erro ao carregar evento",
        description:
          "Não foi possível carregar os dados do evento para edição. Por favor, tente novamente.",
      });
    } finally {
      setLoading(false);
    }
  };

  const createEvent = async (eventData) => {
    setLoading(true);
    try {
      // console.log("Creating event with data:", eventData);
      await axios.post("/api/event", eventData);
      api.success({
        message: "Evento criado",
        description: `Evento "${eventData.name}" criado com sucesso!`,
      });
      form.resetFields();
      navigate("/events");
    } catch (err) {
      console.error("Error creating event:", err);
      api.error({
        message: "Erro ao criar evento",
        description:
          "Não foi possível criar o evento. Por favor, verifique os dados e tente novamente.",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateEvent = async (eventId, eventData) => {
    setLoading(true);
    try {
      // console.log("Updating event with data:", eventData);
      await axios.patch(`/api/event/${eventId}`, eventData);
      api.success({
        message: "Evento atualizado",
        description: `Evento "${eventData.name}" atualizado com sucesso!`,
      });
      form.resetFields();
      navigate("/events");
    } catch (err) {
      console.error("Error updating event:", err);
      api.error({
        message: "Erro ao atualizar evento",
        description:
          "Não foi possível atualizar o evento. Por favor, verifique os dados e tente novamente.",
      });
    } finally {
      setLoading(false);
    }
  };

  const onFinish = (values) => {
    if (eventId) {
      const eventData = {
        name: values.eventName,
        date: dayjs(values.eventDate).toISOString(),
        location: values.eventLocation,
        description: values.eventDescription,
      };
      updateEvent(eventId, eventData);
      return;
    }
    const eventData = {
      name: values.eventName,
      date: dayjs(values.eventDate).toISOString(),
      location: values.eventLocation,
      description: values.eventDescription,
    };
    createEvent(eventData);
  };
  const onFinishFailed = (errorInfo, values) => {
    console.log("Failed:", errorInfo);
    console.log("Form values on failure:", values);
    api.error({
      message: "Erro no formulário",
      description: "Por favor, preencha todos os campos corretamente.",
    });
  };

  useEffect(() => {
    // console.log("EventForm mounted with eventId:", eventId);
    if (eventId) {
      getEditEvent(eventId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Col span={24} style={{ textAlign: "center" }}>
      {contextHolder}

      <Form
        form={form}
        name="eventForm"
        layout="vertical"
        loading={loading ? "true" : "false"}
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
            {
              validator: (_, value) => {
                if (value && dayjs(value).isBefore(dayjs(), 'day')) {
                  return Promise.reject(new Error('A data do evento não pode ser no passado!'));
                }
                return Promise.resolve();
              },
            },
          ]}
        >
          <Input type="date" style={{ width: "100%" }} min={dayjs().format('YYYY-MM-DD')} />
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
              required: false,
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
          {eventId ? "Atualizar" : "Cadastrar"} Evento
        </Button>
      </Row>
    </Col>
  );
};

export default EventForm;
