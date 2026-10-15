import { useState } from "react";

function App() {
  const [seats, setSeats] = useState(5);
  const [months, setMonths] = useState(1);

  return (
    <div className="min-h-screen bg-[#EEEEEE] font-sans text-[#000000]">
      <nav className="flex items-center justify-between px-20 py-6">
        <span className="text-3xl font-bold">Cloudline</span>
        <span className="text-xl">Cloud storage for growing teams</span>
      </nav>

      <div className="bg-[#000000] px-20 py-12 text-[#EEEEEE]">
        <header className="mb-8">
          <h1 className="text-5xl font-bold">Quote for Acme Corp</h1>
          <p className="mt-2 text-2xl">
            {seats} seats for {months} months
          </p>
        </header>
        <button
          className="mr-4 cursor-pointer rounded-lg bg-[#C82957] px-8 py-3 text-xl font-bold"
          onClick={() => setSeats(seats + 1)}
        >
          Add seat
        </button>
        <button
          className="mr-4 cursor-pointer rounded-lg border-2 border-[#EEEEEE] px-8 py-3 text-xl font-bold"
          onClick={() => setSeats(seats > 1 ? seats - 1 : 1)}
        >
          Remove seat
        </button>
        <button
          className="cursor-pointer rounded-lg border-2 border-[#EEEEEE] px-8 py-3 text-xl font-bold"
          onClick={() => setMonths(months === 1 ? 12 : 1)}
        >
          Switch billing
        </button>
      </div>

      <main className="grid grid-cols-3 gap-8 px-20 py-12">
        <div className="rounded-xl border-2 border-[#000000] bg-[#FFFFFF] p-6">
          <h2 className="text-2xl font-bold">Starter</h2>
          <p className="mt-2 text-xl">₱150 per seat / month</p>
          <p className="mt-1 text-xl font-bold">Total: ₱{150 * seats * months}</p>
          <ul className="mt-4 list-disc pl-6">
            <li>50 GB storage</li>
            <li>Email support</li>
          </ul>
        </div>
        <div className="rounded-xl border-2 border-[#000000] bg-[#FFFFFF] p-6">
          <h2 className="text-2xl font-bold">Pro</h2>
          <p className="mt-2 text-xl">₱400 per seat / month</p>
          <p className="mt-1 text-xl font-bold">Total: ₱{400 * seats * months}</p>
          <ul className="mt-4 list-disc pl-6">
            <li>1 TB storage</li>
            <li>Chat support</li>
          </ul>
        </div>
        <div className="rounded-xl border-2 border-[#000000] bg-[#FFFFFF] p-6">
          <h2 className="text-2xl font-bold">Business</h2>
          <p className="mt-2 text-xl">₱900 per seat / month</p>
          <p className="mt-1 text-xl font-bold">Total: ₱{900 * seats * months}</p>
          <ul className="mt-4 list-disc pl-6">
            <li>10 TB storage</li>
            <li>24/7 phone support</li>
          </ul>
        </div>
      </main>

      <footer className="px-20 py-8 text-center text-lg">
        © 2026 Cloudline · Page by YOUR NAME
      </footer>
    </div>
  );
}

export default App;
