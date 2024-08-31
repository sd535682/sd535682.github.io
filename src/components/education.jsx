export default function Education() {
  return (
    <>
      <h1 className="text-xl lg:text-2xl font-poppins font-bold">Education</h1>
      <div className="flex flex-row gap-5 font-inter">
        <div className="flex-1 bg-gray-200 p-5 rounded-lg">
          <strong>Masters</strong>
          <p>IEM, Kolkata</p>
          <strong>MCA - 8.7</strong>
        </div>
        <div className="flex-1 bg-gray-200 p-5 rounded-lg">
          <strong>Bachelors</strong>
          <p>TIU, Kolkata</p>
          <strong>BCA - 9.05</strong>
        </div>
      </div>
    </>
  );
}
