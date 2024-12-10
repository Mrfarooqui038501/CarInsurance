import React from 'react';
import LeadSourceChart from '../dashboard/LeadSourceChart';

import ConversionRateChart from './ConversionRateChart';

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Lead Sources</h3>
        <LeadSourceChart />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Conversion Rates</h3>
        <ConversionRateChart />
      </div>
      {/* Add more dashboard widgets here */}
    </div>
  );
};

export default Dashboard;
