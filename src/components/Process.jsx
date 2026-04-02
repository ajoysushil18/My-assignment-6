import ProcessCard from "./ProcessCard";
import User from "../assets/user.png";
import Package from "../assets/package.png";
import Rocket from "../assets/rocket.png";

export default function Process() {
  const details = {
    step1: {
      title: "Create Account",
      description:
        "Sign up for free in seconds. No credit card required.",
      imageURL: User,
      imageAlt: "User Icon",
      stepCount: "01",
      id: 1
    },
    step2: {
      title: "Choose Product",
      description:
        "Browse our catalog and select the tools that fit your needs.",
      imageURL: Package,
      imageAlt: "Package Icon",
      stepCount: "02",
      id: 2
    },
    step3: {
      title: "Start Creating",
      description: "Download and start using your premium tools immediately.",
      imageURL: Rocket,
      imageAlt: "Rocket Icon",
      stepCount: "03",
      id: 3
    },
  };

  return (
    <div className="bg-[#F9FAFC] text-center px-4 md:px-32 py-28">
      <h3 className="text-3xl font-black text-[#101727] leading-14">
        Get Started in 3 Steps
      </h3>
      <p className="text-gray-400 text-sm">
        Start using premium digital tools in minutes, not hours.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
        {Object.values(details).map((detail) => (
          <ProcessCard
            key={detail.id}
            title={detail.title}
            description={detail.description}
            stepCount={detail.stepCount}
            imageURL={detail.imageURL}
            imageAlt={detail.imageAlt}
          />
        ))}
      </div>
    </div>
  );
}
