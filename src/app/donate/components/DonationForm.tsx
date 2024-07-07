export default function DonationForm() {
  return (
    <div className="flex items-center">
      <div className="text-gray-600">
        <h1 className="text-5xl my-2 font-semibold text-violet-700">
          Make a Difference Today
        </h1>
        <h2 className="text-2xl font-normal">
          Your Contribution Can Transform Lives
        </h2>
        
        <div className="flex my-5">
          <div className="bg-violet-50 m-4  border-[5px] border-violet-300 hover:bg-violet-100 min-h-20 min-w-20 rounded-md shadow-md">
            <div className="stat text-center">
              <div className="stat-value">₹50</div>
            </div>
          </div>
          <div className="bg-violet-50 m-4 hover:bg-violet-100 min-h-20 min-w-20 rounded-md shadow-md">
            <div className="stat text-center">
              <div className="stat-value">₹100</div>
            </div>
          </div>
          <div className="bg-violet-50 m-4 hover:bg-violet-100 min-h-20 min-w-20 rounded-md shadow-md">
            <div className="stat text-center">
              <div className="stat-value">₹500</div>
            </div>
          </div>
          <div className="bg-violet-50 m-4 hover:bg-violet-100 min-h-20 min-w-20 rounded-md shadow-md">
            <div className="stat text-center">
              <div className="stat-value">₹1000</div>
            </div>
          </div>
        </div>
        <p className="font-bold">Custom amount</p>
        <input
          type="text"
          placeholder="Type here"
          className="input border-violet-700 input-bordered input-secondary w-full max-w-xs"
        />
        <br />
        <button className="my-5 bg-violet-700 shadow-lg font-medium hover:bg-violet-600 rounded-full w-200 text-white px-5 py-2">
          Donate
        </button>
      </div>
    </div>
  );
}
