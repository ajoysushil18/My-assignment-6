export default function Ready() {
  return (
    <div className="px-4 md:px-16 lg:px-32 mt-10 lg:mt-0 bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-16 flex flex-col text-center text-white">
      <h3 className="text-3xl font-black text-white leading-14">
        Ready to Transform Your Workflow?
      </h3>
      <p className="text-white/80 text-center text-xs lg:text-sm">
        Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.
      </p>
      <div className="flex items-center justify-center gap-4 mt-10 mb-4">
        <button className="btn btn-primary bg-white text-[#9514FA] rounded-full">Explore Products</button>
        <button className="btn btn-ghost text-white border border-solid border-gray-300 rounded-full">View Pricing</button>
      </div>
      <p className="text-white/80 text-center text-sm">
        14-day free trial • No credit card required • Cancel anytime
      </p>
    </div>
  );
}
