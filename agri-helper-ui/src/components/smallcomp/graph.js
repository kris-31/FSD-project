import React from 'react';
import ReactDOM from 'react-dom';
import ReactApexChart from 'react-apexcharts';
import Showmessage from './message';
// import CommentBox from './commentbox';
// import Alertmsg from './alert';

class ApexChart extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        series: [
          {
            name: 'Rice',
            data: [10, 15, 12, 8, 7],
          },
          {
            name: 'Wheat',
            data: [8, 6, 9, 11, 14],
          },
          {
            name: 'Fruits',
            data: [5, 3, 7, 9, 10],
          },
          {
            name: 'Vegetables',
            data: [4, 6, 3, 5, 8],
          },
          {
            name: 'Pulses',
            data: [2, 4, 3, 2, 5],
          },
        ],
        options: {
          chart: {
            height: 350,
            type: 'bar',
            toolbar: {
              show: false,
            },
          },
          plotOptions: {
            bar: {
              horizontal: false,
            },
          },
          dataLabels: {
            enabled: false,
          },
          xaxis: {
            categories: ['2017', '2018', '2019', '2020', '2021'],
          },
        },
      };
    }
  
    render() {
      return (
        <>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <div
            id="chart"
            style={{
              width: '80%',
              height: '400px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
            }}
          >
            <div> <h4 style={{alignSelf:'center'}}>Last 5 years production comparison</h4>
            <ReactApexChart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              height={350}
            />
            </div>
          </div>
        </div>
        {/* <Alertmsg />
        <Showmessage /> */}
        </>
      );
    }
  }
  
  export default ApexChart;
