import Feature from "./Feature.jsx";

function PlanCard({ name, price, storage, support, seats, months }) {
  return (
    <div className="rounded-xl border-2 border-[#000000] bg-[#FFFFFF] p-6">
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="mt-2 text-xl">₱{price} per seat / month</p>
      <p className="mt-1 text-xl font-bold">Total: ₱{price * seats * months}</p>
      <ul className="mt-4 list-disc pl-6">
        <Feature text={`${storage} storage`} />
        <Feature text={`${support} support`} />
      </ul>
    </div>
  );
}

export default PlanCard;