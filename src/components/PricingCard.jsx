export default function PricingCard({
  name,
  description,
  isPopular,
  price,
  features,
  button,
}) {
  return (
    <div
      className={`card ${isPopular ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "bg-[#F9FAFC]"} shadow-sm relative`}
    >
      <div className={`flex items-center justify-center relative -top-4 ${isPopular ? "" : "hidden"}`}>
        <span className="badge rounded-full text-[#BB4D00] bg-[#FEF3C6] px-3 py-4 text-sm">
          Most Popular
        </span>
      </div>
      <div className="card-body">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">{name}</h2>
          <p
            className={`${isPopular ? "text-white" : "text-gray-500"} text-xs`}
          >
            {description}
          </p>
          <p
            className={`text-xl ${isPopular ? "text-white" : "text-gray-500"}`}
          >
            <span
              className={`font-black text-2xl ${isPopular ? "text-white" : "text-black"}`}
            >
              ${price}
            </span>
            /Month
          </p>
        </div>
        <ul className="mt-4 flex flex-col gap-2 text-xs">
          {features.map((feature, index) => (
            <li key={index}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className={`${isPopular ? "text-white" : "text-gray-500"}`}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <button
            className={`btn btn-primary btn-block rounded-full ${isPopular ? "bg-white text-[#9514FA]" : "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"}`}
          >
            {button}
          </button>
        </div>
      </div>
    </div>
  );
}
