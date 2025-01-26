import React from 'react';
import { useForm } from 'react-hook-form';

const Checkout = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name', { required: true })} placeholder="Name" />
        {errors.name && <p>Name is required</p>}

        <input {...register('address', { required: true })} placeholder="Address" />
        {errors.address && <p>Address is required</p>}

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
