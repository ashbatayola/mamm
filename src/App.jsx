import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import PlanPicker from "./components/PlanPicker.jsx";


function App() {
  const [seats, setSeats] = useState(5);
  const [months, setMonths] = useState(1);

  return (
    <div className="min-h-screen bg-[#EEEEEE] font-sans text-[#000000]">
      <Navbar />
      <PlanPicker />
      <Footer />
    </div>
  );
}

export default App;
