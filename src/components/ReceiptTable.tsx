'use client';

import { Receipt } from '../actions/gettabdata';

interface ReceiptTableProps {
  receipts: Receipt[];
  onReceiptClick: (receipt: Receipt) => void;
}

const ReceiptTable = ({ receipts, onReceiptClick }: ReceiptTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ticket Number</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {receipts.map((receipt) => (
            <tr key={receipt.id} onClick={() => onReceiptClick(receipt)} className="cursor-pointer">
              <td className="px-6 py-4 whitespace-nowrap">{receipt.ticket_number}</td>
              <td className="px-6 py-4 whitespace-nowrap">{receipt.location.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{new Date(receipt.session.start_time).toLocaleDateString()}</td>
              <td className="px-6 py-4 whitespace-nowrap">${receipt.payment_info.total.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReceiptTable;
