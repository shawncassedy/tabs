'use client';

import { Receipt } from '../actions/gettabdata';

interface ReceiptDetailsProps {
  receipt: Receipt;
  onBackClick: () => void;
}

const ReceiptDetails = ({ receipt, onBackClick }: ReceiptDetailsProps) => {
  return (
    <div>
      <button onClick={onBackClick} className="mb-4 text-blue-500">Back</button>
      <h1 className="text-2xl font-bold">Receipt Details</h1>
      <p><strong>ID:</strong> {receipt.id}</p>
      <p><strong>Ticket Number:</strong> {receipt.ticket_number}</p>
      <p><strong>Location:</strong> {receipt.location.name}, {receipt.location.address.street}, {receipt.location.address.city}, {receipt.location.address.state} {receipt.location.address.postal_code}</p>
      <p><strong>Vehicle:</strong> {receipt.vehicle.nickname} ({receipt.vehicle.license_plate})</p>
      <p><strong>Session Start:</strong> {new Date(receipt.session.start_time).toLocaleString()}</p>
      <p><strong>Session End:</strong> {new Date(receipt.session.end_time).toLocaleString()}</p>
      <p><strong>Payment Type:</strong> {receipt.payment_info.type}</p>
      <p><strong>Card Brand:</strong> {receipt.payment_info.brand}</p>
      <p><strong>Last 4 Digits:</strong> {receipt.payment_info.last4}</p>
      <p><strong>Total:</strong> ${receipt.payment_info.total.toFixed(2)}</p>
      <h2 className="text-xl font-bold mt-4">Items</h2>
      <ul>
        {receipt.items.map((item, index) => (
          <li key={index}>{item.description}: ${item.price.toFixed(2)}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReceiptDetails;
