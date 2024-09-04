import Tabs from '../components/tabs';
import { getTabData, TabData } from '../actions/gettabdata';

export default async function Home() {
  const initialData: TabData = await getTabData();

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold underline text-center">My Tabs</h1>
      <Tabs initialData={initialData} />
    </div>
  );
}