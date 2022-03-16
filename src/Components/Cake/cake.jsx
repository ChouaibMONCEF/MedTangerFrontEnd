import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import "./cake.css";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function cake({data, title}) {
  return (
    <div className="cake">
      <h3 className="cakeTitle">{title}</h3>
      <ResponsiveContainer className="rcon" width={300} height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={130}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((_entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="key">
        <div className="a"></div>
        <div className="ta">2eme Bac</div>
        <div className="b"></div>
        <div className="tb">1ere Bac</div>
        <div className="c"></div>
        <div className="tc">5eme</div>
        <div className="d"></div>
        <div className="td">Others</div>
      </div>
    </div>
  );
}