import PricingCard from "./PricingCard";

export default function Pricing() {
  const pricings = {
    starter: {
      id: 1,
      name: "Starter",
      description: "Perfect for getting started",
      isPopular: false,
      price: 0,
      features: [
        "Access to 10 free tools",
        "Basic templates",
        "Community support",
        "1 project per month",
      ],
      button: "Get Started Free",
    },
    pro: {
      id: 2,
      name: "Pro",
      description: "Best for professionals",
      isPopular: true,
      price: 29,
      features: [
        "Access to all free tools",
        "Unlimited templates",
        "Priority support",
        "Unlimited Projects",
        "Cloud Sync",
        "Advanced Analytics",
      ],
      button: "Start Pro Trial",
    },
    enterprise: {
      id: 3,
      name: "Enterprise",
      description: "For teams and businesses",
      isPopular: false,
      price: 99,
      features: [
        "Everything in pro",
        "Team Collaboration",
        "Custom Intregation",
        "Dedicated Support",
        "SLA Guarentee",
        "Custom Branding",
      ],
      button: "Contact Sales",
    },
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 md:px-32 py-28">
      <h3 className="text-2xl md:text-3xl font-black text-[#101727] leading-14">
        Simple, Transparent Pricing
      </h3>
      <p className="text-gray-400 max-w-lg text-center text-sm">
        Choose the plan that fits your needs. Upgrade or downgrade anytime.
      </p>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-7 w-full">
        {Object.values(pricings).map((pricing) => (
          <PricingCard
            key={pricing.id}
            name={pricing.name}
            isPopular={pricing.isPopular}
            description={pricing.description}
            price={pricing.price}
            features={pricing.features}
            button={pricing.button}
          />
        ))}
      </div>
    </div>
  );
}
