import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Label
} from "recharts";

const EventChart = (props) => {
  const { list } = props;

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (list) {
      // Map event data to chart data
      const data = list.map(event => ({
        time: event.datetime_local,
        price: event.stats.lowest_price
      }));
      setChartData(data);
    }
  }, [list]);

  console.log("The date", chartData);

  return (
    <div>
      <h2>Event Price Data</h2>
      <LineChart
        width={1300}
        height={400}
        data={chartData}
        margin={{ top: 10, right: 30, left: 20, bottom: 30 }}
      >
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey="time" angle={20} dx={20}>
          <Label value="Date and Time" offset={0} position="insideBottom" />
        </XAxis>
        <YAxis
          label={{
            value: "Price",
            angle: -90,
            position: "insideLeft",
            textAnchor: "middle"
          }}
        />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default EventChart;
