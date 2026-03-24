import React from "react";
import { Row, Col } from "antd";

const PageContainer = ({ children }) => {
  return (
    <Row>
      <Col span={24} >
        {children}
      </Col>
    </Row>
  );
};

export default PageContainer;
