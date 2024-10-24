export default function Footer() {
  return (
    <div className="bg-black">
      <div className="flex justify-center pt-48">
        <img src="https://i.ibb.co.com/HxPNc8c/logo-footer.png" alt="" />
      </div>
      <footer className="w-11/12 mx-auto footer  text-white p-10 flex justify-between">
        <nav>
          <h6 className="text-xl font-bold">About Us</h6>
          <p className="max-w-52 text-gray-300">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </nav>
        <nav>
          <h6 className="text-xl font-bold">Quick Links</h6>
          <ul className="list-disc ml-5 text-gray-300">
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
        <form>
          <h6 className="text-xl font-bold mb-6">Subscribe</h6>
          <p className="max-w-52 text-gray-300">
            Subscribe to our newsletter for the latest updates.
          </p>
          <fieldset className="form-control w-80">
            <div className="join">
              <input
                type="text"
                placeholder="Enter your email"
                className="input input-bordered join-item"
              />
              <button className="btn bg-pink-400 border-none join-item">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
}
