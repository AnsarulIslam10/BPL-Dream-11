export default function Newslatter() {
  return (
    <div className="p-4 border-2 rounded-3xl mt-24 relative top-40">
      <div
        style={{
          backgroundImage: "url(https://i.ibb.co.com/9TYMsXL/bg-shadow.png)",
        }}
        className="hero h-80 text-center border rounded-2xl flex flex-col items-center justify-center bg-white"
      >
        <h2 className="text-3xl font-bold mb-4">Subscribe to our Newsletter</h2>
        <p className="text-xl mb-6">
          Get the latest updates and news right in your inbox!
        </p>
        <div className="flex gap-3 items-center justify-center">
          <input
            type="text"
            placeholder="Enter your email"
            className="input input-bordered w-32 sm:w-96"
          />
          <div className="rounded-xl bg-[#E7FE29]">
            <button className="btn btn-ghost">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}
