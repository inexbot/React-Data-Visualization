export const OCAPAbnormal = {
  color: ["#003366", "#006699", "#4cabce", "#e5323e","#1c9090"],
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b}: {c} ({d}%)",
  },
  
  series: [
    {
      name: "访问来源",
      type: "pie",
      radius: ["50%", "70%"],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: "20",
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 135, name: "直接访问" },
        { value: 310, name: "邮件营销" },
        { value: 224, name: "联盟广告" },
        { value: 135, name: "视频广告" },
        { value: 148, name: "搜索引擎" },
      ],
    },
  ],
  
};
