export const monthYield = {
  color: ["#003366", "#006699", "#4cabce", "#e5323e"],
  // title: {
  //   text: "月度产量",
  //   textStyle: {
  //     align: "center",
  //     color: "#FFFFFF",
  //     fontSize: 14,
  //   },
  //   top: "5%",
  //   left: "center",
  // },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  legend: {
    data: ["Forest", "Steppe", "Desert", "Wetland"],
  },
  xAxis: [
    {
      type: "category",
      axisTick: { show: false },
      data: [
        {
          value:"2012",
          textStyle:{
            color:"white"
          },
        },        {
          value:"2013",
          textStyle:{
            color:"white"
          },
        },        {
          value:"2014",
          textStyle:{
            color:"white"
          },
        },        {
          value:"2015",
          textStyle:{
            color:"white"
          },
        },
        {
          value:"2016",
          textStyle:{
            color:"white"
          },
        },
      ],
    },
  ],
  yAxis: [
    {
      type:"value",
    },
  ],
  series: [
    {
      name: "Forest",
      type: "bar",
      barGap: 0,
      // label: labelOption,
      data: [320, 332, 301, 334, 390],
    },
    {
      name: "Steppe",
      type: "bar",
      // label: labelOption,
      data: [220, 182, 191, 234, 290],
    },
    {
      name: "Desert",
      type: "bar",
      // label: labelOption,
      data: [150, 232, 201, 154, 190],
    },
    {
      name: "Wetland",
      type: "bar",
      // label: labelOption,
      data: [98, 77, 101, 99, 40],
    },
  ],
};
