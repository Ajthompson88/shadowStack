import Section from "../layout/Section";
import SectionTitle from "./SectionTitle";

const Experience = () => {
  return (
    <Section
      id="experience"
      gradient="from-gray-900 to-black"
      maxWidth="max-w-4xl"
    >
      <SectionTitle title="Experience" />
      <div className="mt-10 space-y-8">
        <div>
          <h3 className="text-xl font-semibold">Coming Soon</h3>
          <p className="mt-2 text-gray-400">
            Details about my professional experience will be added here soon.
            Stay tuned!
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Experience;
