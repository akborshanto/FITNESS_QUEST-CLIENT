import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import BalanceTable from './BalanceTable';
import UseTitle from '../../../../hook/useTitle';
import usePayment from '../../../../hook/usePayment';

const data = [
  {
    name: '18-24',
    uv: 31.47,
    pv: 2400,
    fill: '#8884d8',
  },
  {
    name: '25-29',
    uv: 26.69,
    pv: 4567,
    fill: '#83a6ed',
  },
  {
    name: '30-34',
    uv: 15.69,
    pv: 1398,
    fill: '#8dd1e1',
  },
  {
    name: '35-39',
    uv: 8.22,
    pv: 9800,
    fill: '#82ca9d',
  },
  {
    name: '40-49',
    uv: 8.63,
    pv: 3908,
    fill: '#a4de6c',
  },
  {
    name: '50+',
    uv: 2.63,
    pv: 4800,
    fill: '#d0ed57',
  },
  {
    name: 'unknow',
    uv: 6.67,
    pv: 4800,
    fill: '#ffc658',
  },
];

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/simple-radial-bar-chart-gnwjjg';

  render() {
    return (

<div>
<BalanceTable></BalanceTable>

<UseTitle heading="PAYMENT CHART"></UseTitle>
<div className='w-[300px]  lg:[h-300px] lg:w-[600px] lg:h-[600px]'>
<ResponsiveContainer width="100%" height="100%">

  <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
    <RadialBar
      minAngle={15}
      label={{ position: 'insideStart', fill: '#fff' }}
      background
      clockWise
      dataKey="uv"
    />
    <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
  </RadialBarChart>
</ResponsiveContainer>


</div>


</div>
      

    );
  }
}
