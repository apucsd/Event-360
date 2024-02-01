import InfoCard from "../home/InfoCard";

const Dashboard = () => {
  return (
    <div className="w-full">
      <main className="flex-1  md:p-10">
        <div className="flex items-center justify-between mb-8">
          <h1 className="md:text-3xl text-xl font-bold">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <div className="bg-green-500 rounded-full md:size-8 size-2"></div>
            <span className="text-gray-600">Online</span>
          </div>
        </div>

        <section className="mb-8">
          <InfoCard></InfoCard>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Graph</h2>
          <div className="bg-white p-6 rounded-md shadow-md">
            <div className="h-64 bg-gray-200"></div>
          </div>
        </section>
      </main>
      <div className="md:w-[300px] h-[300px] rounded-[999px] absolute top-[100px] left-20 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-green-200 via-cyan-200 to-Fuchsia-300"></div>
    </div>
  );
};

export default Dashboard;
