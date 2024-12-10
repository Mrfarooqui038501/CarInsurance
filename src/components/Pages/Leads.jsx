import React from 'react';
import LeadList from '../leads/LeadList'
import LeadForm from '../leads/LeadForm'

const Leads = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Leads Management</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <LeadList />
        </div>
        <div>
          <LeadForm />
        </div>
      </div>
    </div>
  );
};

export default Leads;
