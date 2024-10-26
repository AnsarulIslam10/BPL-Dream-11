import { data } from "autoprefixer";

export default function Footer() {
  return (
    <div className="bg-black">
      <div className="flex justify-center pt-48">
        <img src="https://i.ibb.co.com/HxPNc8c/logo-footer.png" alt="" />
      </div>
      <footer className="w-11/12 mx-auto footer  text-gray-300 p-10 md:justify-around">
        <nav>
          <h6 className="text-xl font-bold">About Us</h6>
          <p className="max-w-52 text-gray-400">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </nav>
        <nav>
          <h6 className="text-xl font-bold">Quick Links</h6>
          <ul className="list-disc ml-5 text-gray-400">
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
        <form>
          <h6 className="text-xl font-bold mb-6">Subscribe</h6>
          <p className="max-w-52 text-gray-400">
            Subscribe to our newsletter for the latest updates.
          </p>
          <fieldset className="form-control sm:w-80">
            <div className="join mt-2">
              <input
                type="text"
                placeholder="Enter your email"
                className="input input-bordered join-item w-32 text-xs md:text-base md:w-40 lg:w-52"
              />
              <button className="btn bg-[#E7FE29] text-xs sm:text-lg border-none join-item">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form> 
      </footer>
      <h3 className="text-center py-6 border-t border-gray-600 text-gray-400">&#64; {new Date().getFullYear()} BPL Dream 11, All Rights Reserved.</h3>
    </div>
  );
}
