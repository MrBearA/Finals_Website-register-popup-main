import React, { useState } from 'react';

const Payments = ({ cart }) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isPaid, setIsPaid] = useState(false);

  const handlePayment = () => {
    // Logic to process payment
    if (paymentMethod) {
      setIsPaid(true);
      alert('Payment successful! Your order has been processed.');
    } else {
      alert('Please select a payment method.');
    }
  };

  return (
    <div className="payment-container">
      <h2>Payment</h2>
      <h3>Items in your cart:</h3>
      {cart.length === 0 ? (
        <p>Your cart is empty. Please add items to your cart before proceeding.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - {item.quantity} x ${item.price}
            </li>
          ))}
        </ul>
      )}
      <div className="payment-method">
        <label>Select Payment Method:</label>
        <select onChange={(e) => setPaymentMethod(e.target.value)} value={paymentMethod}>
          <option value="">Select a method</option>
          <option value="credit-card">Credit Card</option>
          <option value="paypal">PayPal</option>
          <option value="cash-on-delivery">Cash on Delivery</option>
        </select>
      </div>
      <button onClick={handlePayment}>Pay Now</button>
      {isPaid && <p>Thank you for your purchase!</p>}
    </div>
  );
};

export default Payments;
