import React, { useEffect } from "react";
import echarts from "echarts";
import "echarts/lib/chart/map";
import "echarts/lib/chart/lines";
import "echarts/lib/chart/effectScatter";

function Map(props) {
  // const lineData = props.lineData;
  const lineData = props.data;
  const randomA = parseFloat(Math.random() * 1000, 10) + 1;
  const name = randomA.toString();
  useEffect(() => {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById(name));
    // 绘制图表
    myChart.setOption(lineData);
  }, [lineData, name]);
  return <div id={name} style={{ width: "100%", height: "100%" }}></div>;
}
export default Map;
