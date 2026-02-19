import { useState, useMemo, useCallback } from "react";
import Highcharts from "highcharts";
import "highcharts/highcharts-3d";
import HighchartsReact from "highcharts-react-official";

export default function PieChart3d() {
  const [alpha, setAlpha] = useState(45);
  const [startAngle, setStartAngle] = useState(0);

  const chartOptions = useMemo<Highcharts.Options>(
    () => ({
      chart: {
        type: "pie",
        options3d: {
          enabled: true,
          alpha,
          beta: 0,
        },
      },
      title: {
        text: "動く3D円グラフ",
      },
      plotOptions: {
        pie: {
          animation: false,
          allowPointSelect: true,
          cursor: "pointer",
          depth: 100,
          startAngle,
          dataLabels: {
            enabled: true,
            format: "{point.name}",
          },
        },
      },
      series: [
        {
          type: "pie" as const,
          name: "Browser share",
          data: [
            ["Firefox", 45.0],
            ["IE", 26.8],
            ["Chrome", 12.8],
            ["Safari", 8.5],
            ["Opera", 6.2],
            ["Others", 0.7],
          ],
        },
      ],
    }),
    [alpha, startAngle]
  );

  const handleAlphaChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setAlpha(Number(e.target.value));
    },
    []
  );

  const handleStartAngleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setStartAngle(Number(e.target.value));
    },
    []
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", padding: "1rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <div style={{ flex: 1 }}>
          <HighchartsReact
            highcharts={Highcharts}
            options={chartOptions}
            immutable={true}
            updateArgs={[true, false, false]}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.25rem" }}>
          <span className="tag is-info is-light" style={{ fontSize: "0.7rem" }}>傾き</span>
          <input
            className="slider is-info is-circle"
            type="range"
            step="1"
            min="0"
            max="90"
            style={{ writingMode: "vertical-lr", direction: "rtl", height: "300px" }}
            value={alpha}
            onChange={handleAlphaChange}
          />
          <span className="tag" style={{ fontSize: "0.7rem" }}>{alpha}°</span>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", width: "100%", maxWidth: "600px" }}>
        <span className="tag is-info is-light" style={{ fontSize: "0.7rem" }}>回転</span>
        <input
          className="slider is-info is-circle"
          type="range"
          step="1"
          min="0"
          max="360"
          style={{ width: "100%" }}
          value={startAngle}
          onChange={handleStartAngleChange}
        />
        <span className="tag" style={{ fontSize: "0.7rem", minWidth: "3rem", textAlign: "center" }}>{startAngle}°</span>
      </div>
    </div>
  );
}
