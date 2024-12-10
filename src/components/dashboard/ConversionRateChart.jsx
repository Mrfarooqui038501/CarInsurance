import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', rate: 0.4 },
  { name: 'Feb', rate: 0.3 },
  { name: 'Mar', rate: 0.5 },
  { name: 'Apr', rate: 0.4 },
  { name: 'May', rate: 0.6 },
  { name: 'Jun', rate: 0.5 },
];

const ConversionRateChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis tickFormatter={(value) => `${value * 100}%`} />
        <Tooltip formatter={(value) => `${(value * 100).toFixed(1)}%`} />
        <Legend />
        <Bar dataKey="rate" fill="#8884d8" name="Conversion Rate" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ConversionRateChart;
