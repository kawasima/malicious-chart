import React, { Component } from "react";

import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highcharts3d from "highcharts/highcharts-3d";
const  bulmaSlider = require("bulma-slider");
highcharts3d(Highcharts);

type Props = {
}
type State = {
  chartOptions: HighchartsReact.Props
}

export default class PieChart3d extends Component<Props, State> {
  constructor(props : Props) {
    super(props);
    this.state = {
      chartOptions: {
        chart: {
          type: 'pie',
          options3d: {
            enabled: true,
            alpha: 10,
            beta: 0
          }
        },
        title: {
          text: '動く3D円グラフ'
        },
        plotOptions: {
          pie: {
            animation:false,
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 100,
            dataLabels: {
              enabled: true,
              format: '{point.name}'
            }
          }
        },
        series: [{
          type: 'pie',
          name: 'Browser share',
          data: [
            ['Firefox', 45.0],
            ['IE', 26.8],
            ['Chrome', 12.8],
            ['Safari', 8.5],
            ['Opera', 6.2],
            ['Others', 0.7]
          ]
        }]
      }
    }
  }

  componentDidMont() {
    bulmaSlider("#slider")
  }

  componentDidUpdate() {
    console.log(this.state.chartOptions.chart);
  }
  render() {
    const { chartOptions } = this.state;

    return (
      <div className="columns">
        <div className="column is-four-fifths">
          <HighchartsReact
            highcharts={Highcharts}
            options={chartOptions}
            immutable={true}
            updateArgs={[true,false,false]}
          />
        </div>
        <div className="column">
          {React.createElement('input', {
            className: "slider",
            type:"range",
            step:"1",
            min:"0",
            max:"100",
            orient:"vertical",
            onChange: (e : any) => {
              e.persist()
              this.setState(prevState => ({
                ...prevState,
                chartOptions: {
                  ...prevState.chartOptions,
                  chart: {
                    ...prevState.chartOptions.chart,
                    options3d: {
                      ...prevState.chartOptions.chart.options3d,
                      alpha: Number(e.target.value)
                    }
                  }
                }
            }))},
            value: chartOptions.chart.options3d.alpha
          })}
        </div>
      </div>
    )
  }
}
