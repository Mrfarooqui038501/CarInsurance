import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../common/Input';
import Select from '../common/Select';
import Button from '../common/Button';

const LeadForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // TODO: Implement lead creation logic
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4">Add New Lead</h3>
      <Input
        label="Name"
        {...register('name', { required: 'Name is required' })}
        error={errors.name?.message}
      />
      <Input
        label="Email"
        type="email"
        {...register('email', { required: 'Email is required' })}
        error={errors.email?.message}
      />
      <Input
        label="Phone"
        {...register('phone', { required: 'Phone is required' })}
        error={errors.phone?.message}
      />
      <Select
        label="Source"
        {...register('source', { required: 'Source is required' })}
        error={errors.source?.message}
        options={[
          { value: 'website', label: 'Website' },
          { value: 'social_media', label: 'Social Media' },
          { value: 'referral', label: 'Referral' },
          { value: 'other', label: 'Other' },
        ]}
      />
      <Button type="submit" className="w-full mt-4">
        Add Lead
      </Button>
    </form>
  );
};

export default LeadForm;
