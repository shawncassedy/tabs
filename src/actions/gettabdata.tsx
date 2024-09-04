export interface Location {
  id: string;
  name: string;
  contact_info: {
    phone: string;
  };
  address: {
    street: string;
    street2: string;
    city: string;
    state: string;
    postal_code: string;
  };
}

export interface Vehicle {
  id: string;
  nickname: string;
  license_plate: string;
}

export interface Session {
  start_time: string;
  end_time: string;
}

export interface PaymentInfo {
  type: string;
  brand: string;
  last4: string;
  currency: string;
  total: number;
}

export interface Item {
  description: string;
  price: number;
}

export interface Receipt {
  id: string;
  pk: string;
  type: string;
  session_id: string;
  ticket_number: string;
  location: Location;
  vehicle: Vehicle;
  session: Session;
  payment_info: PaymentInfo;
  items: Item[];
  _rid: string;
  _self: string;
  _etag: string;
  _attachments: string;
  _ts: number;
}

export interface TabData {
  contactInfo: ContactInfo;
  paymentMethods: PaymentMethod[];
  receipts: Receipt[];
  vehicles: Vehicle[];
}

export async function getTabData(): Promise<TabData> {
  // Simulate fetching data from a database or another source
  const tabData: TabData = {
    contactInfo: {
      name: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
    },
    paymentMethods: [
      { type: "Credit Card", last4: "1234" },
      { type: "PayPal", email: "john@example.com" },
    ],
    receipts: [
      {
        id: "693h6n-tIyZLNortZKWVs",
        pk: "a-aU1cTY5QWehjBFyT1__",
        type: "receipt",
        session_id: "p0CRCIZOAbn9WGY-iRakI",
        ticket_number: "QH39-JB5H-UM35",
        location: {
          id: "KJB-NMKTXlQNBHhHkzZ0q",
          name: "Lovegreen Lot 117",
          contact_info: {
            phone: "+55555555555"
          },
          address: {
            street: "123 Main St.",
            street2: "",
            city: "Dallas",
            state: "TX",
            postal_code: "75219"
          }
        },
        vehicle: {
          id: "",
          nickname: "Vehicle",
          license_plate: "LK54GH"
        },
        session: {
          start_time: "2024-07-26T10:27:23.203Z",
          end_time: "2024-07-26T21:25:00.000Z"
        },
        payment_info: {
          type: "card",
          brand: "visa",
          last4: "4242",
          currency: "usd",
          total: 24.2
        },
        items: [
          {
            description: "Parking",
            price: 22
          },
          {
            description: "Service Fee",
            price: 2.2
          }
        ],
        _rid: "1vV9AN2ezqtkAQAAAAAAAA==",
        _self: "dbs/1vV9AA==/colls/1vV9AN2ezqs=/docs/1vV9AN2ezqtkAQAAAAAAAA==/",
        _etag: "\"2700ac5f-0000-0300-0000-66a37a250000\"",
        _attachments: "attachments/",
        _ts: 1721989669
      }
    ],
    vehicles: [
      { id: "1", nickname: "Toyota Camry", license_plate: "AB123CD" },
      { id: "2", nickname: "Honda Accord", license_plate: "XY987ZT" }
    ],
  };

  return tabData;
}
