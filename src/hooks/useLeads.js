import { useQuery } from 'react-query';

const fetchLeads = async () => {
  // TODO: Replace with actual API call
  return [
    { id: '1', name: 'John Doe', email: 'john@example.com', phone: '1234567890', status: 'New', source: 'Website' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', phone: '0987654321', status: 'Contacted', source: 'Referral' },
  ];
};

export const useLeads = () => {
  return useQuery('leads', fetchLeads);
};
