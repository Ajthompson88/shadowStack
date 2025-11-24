import React from "react";
import SectionTitle from "./SectionTitle";

const Experience = () => {
    return (
        <section
            id="experience"
            className="bg-gradient-to-br from-gray-900 to-black text-white py-16 px-6"
        >
            <div className="max-w-4xl mx-auto">
                <SectionTitle title="Experience" />
                <div className="mt-10 space-y-8">
                    <div>
                        <h3 className="text-xl font-semibold">Coming Soon</h3>
                        <p className="mt-2 text-gray-400">
                            Details about my professional experience will be added here soon. Stay tuned!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;