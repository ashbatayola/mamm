import { useState } from "react";
   import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import PlanCard from "./components/PlanCard.jsx";

function App() {
  const [seats, setSeats] = useState(5);
  const [months, setMonths] = useState(1);

  return (
    <div className="min-h-screen bg-[#EEEEEE] font-sans text-[#000000]">
      <Navbar />

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
        <PlanCard 
          name="Starter" 
          price={150} storage="50 GB" 
          support="Email" 
          seats={seats} 
          months={months} />
        <PlanCard name="Pro" price={400} storage="1 TB" support="Chat" seats={seats} months={months} />
      <PlanCard name="Business" price={900} storage="10 TB" support="24/7 phone" seats={seats} months={months} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
