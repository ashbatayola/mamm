import { useState } from "react";
import PlanCard from "./components/PlanCard.jsx";
import Summary from "./components/Summary.jsx";

function PlanPicker() {
    const [seats, setSeats] = useState(5);
    const [months, setMonths] = useState(1);

    return(
        <>
            <div className="bg-[#000000] px-20 py-12 text-[#EEEEEE]">
        <Summary seats={seats} months={months} customer="Acme Corp" />

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
        </>
        
    );
}
export default PlanPicker;