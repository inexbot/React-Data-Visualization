import React from "react";
import "./App.css";
import { Row, Col, Statistic } from "antd";
import { Line, Bar, Map } from "component";
import { RiseOutlined, FallOutlined } from "@ant-design/icons";
import { monthSale } from "data/monthSale";
import { monthQuality } from "data/monthQuality";
import { restoringYield } from "data/restoringyield";
import { monthYield } from "data/monthYield";
import { malfunction } from "data/malfunction";
import { OCAPAbnormal } from "data/OCAPAbnormal";
import { AbnormalProblem } from "data/AbnormalProblem";
import { ChinaMap } from "data/ChinaMap";

function App() {
  console.log(ChinaMap);
  console.log(AbnormalProblem);
  return (
    <div className="app">
      <Row style={{ paddingTop: "20px" }}>
        <Col span={6} style={{ padding: 20 }}>
          <div
            style={{
              height: "32vh",
              border: "rgba(109,89,209,0.3) 1px solid",
              padding: 20,
              marginBottom: 6,
            }}
          >
            <p style={{ color: "#fff", fontSize: 14, fontWeight: 600 }}>
              月度产量
            </p>
            <Bar data={monthYield} />
          </div>
          <div
            style={{
              border: "rgba(109,89,209,0.3) 1px solid",
              padding: 20,
              marginBottom: 6,
            }}
          >
            <p style={{ color: "#fff", fontSize: 14, fontWeight: 600 }}>
              产量表
            </p>
            <table
              style={{
                color: "#fff",
                width: "100%",
                textAlign: "center",
                height: "15vh",
              }}
            >
              <thead>
                <tr
                  style={{
                    borderBottom: "1px solid #555",
                    background: "#191061",
                  }}
                >
                  <td>2012年</td>
                  <td>2013年</td>
                  <td>2014年</td>
                  <td>2015年</td>
                  <td>2016年</td>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #555" }}>
                  <td>2451</td>
                  <td>245</td>
                  <td>335</td>
                  <td>4234</td>
                  <td>524</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #555" }}>
                  <td>1122</td>
                  <td>2432</td>
                  <td>1434</td>
                  <td>4451</td>
                  <td>5144</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #555" }}>
                  <td>1431</td>
                  <td>2441</td>
                  <td>3144</td>
                  <td>3234</td>
                  <td>5432</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            style={{
              height: "36vh",
              border: "rgba(109,89,209,0.3) 1px solid",
              padding: 20 ,
              paddingBottom:45
            }}
          >
            <p style={{ color: "#fff", fontSize: 14, fontWeight: 600 }}>
              还原良率
            </p>
            {/* <Line data={monthSale} /> */}
            <Line data={restoringYield} />
          </div>
        </Col>
        <Col span={12}>
          <Row style={{ height: "12vh" }}>
            <Col span={24}>
              <p className="title">智能工厂监控平台</p>
              <p className="subtitle">
                Intelligent factory monitoring platform
              </p>
            </Col>
          </Row>
          <Row>
            <Col span={24} style={{ height: "55vh" }}>
              <Map data={ChinaMap} />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Row style={{ height: "9vh" }}>
                <Col span={8}>
                  <span>
                    <Statistic
                      title="Feedback"
                      className="value"
                      value={1128}
                      prefix={<RiseOutlined />}
                    />
                  </span>
                </Col>
                <Col span={8}>
                  <span>
                    <Statistic
                      title="Feedback"
                      className="value"
                      value={333}
                      prefix={<FallOutlined />}
                    />
                  </span>
                </Col>
                <Col span={8}>
                  <span>
                    <Statistic
                      title="Feedback"
                      className="value"
                      value={333}
                      prefix={<RiseOutlined />}
                    />
                  </span>
                </Col>
              </Row>
              <Row>
                <Col
                  span={12}
                  style={{
                    border: "rgba(109,89,209,0.3) 1px solid",
                    padding: 10,
                    marginBottom: 6,
                  }}
                >
                  <p style={{ color: "#fff", fontSize: 14, fontWeight: 600 }}>
                    OCAP异常
                  </p>
                  <div style={{ height: "14vh" }}>
                    <Bar data={OCAPAbnormal} />
                  </div>
                </Col>
                <Col
                  span={12}
                  style={{
                    border: "rgba(109,89,209,0.3) 1px solid",
                    padding: 10,
                    marginBottom: 6,
                  }}
                >
                  <p style={{ color: "#fff", fontSize: 14, fontWeight: 600 }}>
                    异常问题
                  </p>
                  <div style={{ height: "14vh" }}>
                    <Bar data={AbnormalProblem} />
                  </div>
                </Col>
              </Row>
            </Col>
            <Col span={12}>
              <Line data={monthSale} />
            </Col>
          </Row>
        </Col>
        <Col span={6}>
          <Row>
            <Col
              span={12}
              style={{
                border: "rgba(109,89,209,0.3) 1px solid",
                padding: 20,
                marginBottom: 6,
              }}
            >
              <p style={{ color: "#fff", fontSize: 14, fontWeight: 600 }}>
                OCAP异常
              </p>
              <div style={{ height: "18vh" }}>
                <Bar data={OCAPAbnormal} />
              </div>
            </Col>
            <Col
              span={12}
              style={{
                border: "rgba(109,89,209,0.3) 1px solid",
                padding: 20,
                marginBottom: 6,
              }}
            >
              <p style={{ color: "#fff", fontSize: 14, fontWeight: 600 }}>
                异常问题
              </p>
              <div style={{ height: "18vh" }}>
                <Bar data={AbnormalProblem} />
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <div
                style={{
                  height: "35vh",
                  border: "rgba(109,89,209,0.3) 1px solid",
                  padding: 20,
                  marginBottom: 6,
                }}
              >
                <Line data={monthQuality} />
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <div
                style={{
                  height: "30vh",
                  border: "rgba(109,89,209,0.3) 1px solid",
                  padding: 20,
                }}
              >
                <Bar data={malfunction} />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default App;
