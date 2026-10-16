function Summary({ seats, months, customer }) {
    return (
        <header className="mb-8">
          <h1 className="text-5xl font-bold">Quote for {customer}</h1>
          <p className="mt-2 text-2xl">
            {seats} seats for {months} months
          </p>
        </header>
    );
}
export default Summary;