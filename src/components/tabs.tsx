'use client';

import { useState, useEffect } from 'react';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { TabData, Receipt } from '../actions/gettabdata';
import ReceiptTable from './ReceiptTable';
import ReceiptDetails from './ReceiptDetails';

interface TabProps {
  initialData?: TabData; // Optional, as we will fetch data on the client side if not provided
}

const Tabs = ({ initialData }: TabProps) => {
  const [data, setData] = useState<TabData | null>(initialData || null);
  const [selectedReceipt, setSelectedReceipt] = useState<Receipt | null>(null);
  const [loading, setLoading] = useState<boolean>(!initialData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/tab-data'); // Replace with your actual API endpoint
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const fetchedData: TabData = await response.json();
        setData(fetchedData);
      } catch (error) {
        console.error('Error fetching tab data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (!initialData) {
      fetchData();
    }
  }, [initialData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Error loading data.</div>;
  }

  const handleReceiptClick = (receipt: Receipt) => {
    setSelectedReceipt(receipt);
  };

  const handleBackClick = () => {
    setSelectedReceipt(null);
  };

  return (
    <div className="w-full max-w-md px-2 py-16 sm:px-0">
      <TabGroup>
        <TabList className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          <Tab className={({ selected }) => selected ? 'bg-white shadow' : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'}>Contact Info</Tab>
          <Tab className={({ selected }) => selected ? 'bg-white shadow' : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'}>Payment Methods</Tab>
          <Tab className={({ selected }) => selected ? 'bg-white shadow' : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'}>Receipts</Tab>
          <Tab className={({ selected }) => selected ? 'bg-white shadow' : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'}>Vehicles</Tab>
        </TabList>
        <TabPanels>
          <TabPanel><pre>{JSON.stringify(data.contactInfo, null, 2)}</pre></TabPanel>
          <TabPanel><pre>{JSON.stringify(data.paymentMethods, null, 2)}</pre></TabPanel>
          <TabPanel>
            {selectedReceipt ? (
              <ReceiptDetails receipt={selectedReceipt} onBackClick={handleBackClick} />
            ) : (
              <ReceiptTable receipts={data.receipts} onReceiptClick={handleReceiptClick} />
            )}
          </TabPanel>
          <TabPanel><pre>{JSON.stringify(data.vehicles, null, 2)}</pre></TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default Tabs;
