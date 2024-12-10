import React from 'react';
import Table from '../common/Table';
import { useLeads } from '../../hooks/useLeads';

const LeadList = () => {
  const { leads, isLoading, error } = useLeads();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const columns = [
    { header: 'Name', accessor: 'name' },
    { header: 'Email', accessor: 'email' },
    { header: 'Phone', accessor: 'phone' },
    { header: 'Status', accessor: 'status' },
    { header: 'Source', accessor: 'source' },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <Table columns={columns} data={leads} />
    </div>
  );
};

export default LeadList;
