import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styles from "./LinePlot.module.css";

const data = [
  { month: "Jan", value: 25 },
  { month: "Feb", value: 30 },
  { month: "Mar", value: 28 },
  { month: "Apr", value: 45 },
  { month: "May", value: 23 },
  { month: "Jun", value: 90 },
  { month: "Jul", value: 18 },
  { month: "Aug", value: 30 },
  { month: "Sep", value: 35 },
  { month: "Oct", value: 40 },
  { month: "Nov", value: 68 },
  { month: "Dec", value: 20 },
];

const LinePLot = () => {
  return (
    <ResponsiveContainer width='100%' height={500} className={styles.container}>
      <LineChart data={data}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey='month'
          tickLine={false}
          padding={{ left: 40, right: 40 }}
        />
        <YAxis
          label={{ value: "Values", angle: -90, position: "insideLeft" }}
          domain={[10, 100]}
          interval={0}
          tickCount={10}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip />
        <Legend align='right' verticalAlign='top' />
        <Line
          type='monotone'
          dataKey='value'
          stroke='#7539ff'
          strokeWidth={2}
          dot={{ fill: "#7539ff" }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LinePLot;
