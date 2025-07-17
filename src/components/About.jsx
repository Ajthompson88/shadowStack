import React from 'react';
import SectionTitle from './SectionTitle';

export default function About() {
return (
    <section id="about" className="section py-20 bg-gradient-to-b from-zinc-900 to-black text-white">
        <div className="container mx-auto px-4 py-20">
            <SectionTitle title="About Me" />
            <p className="text-lg leading-relaxed">
                I’m Andrew Thompson — a full-stack developer who crafts code like cinema. My mission? Build sleek, performant experiences that feel alive. After transitioning from a background in mechanical intuition (cars, systems, rhythm), I discovered the deep artistry in code. I now blend form, function, and flow across the stack.
            </p>
            <p className="text-lg leading-relaxed">
                I thrive in the shadows of innovation — translating complex problems into clean architectures. Whether it’s RESTful APIs, elegant React interfaces, or microservice orchestration, my tools of choice are JavaScript, TypeScript, and whatever gets the job done right.
            </p>
            <p className="text-lg leading-relaxed">
                Outside of code, I’m driven by faith, family, and discovery. I believe curiosity is sacred — and technology is a tool to bring light to others.
            </p>
        </div>
    </section>
    );
}

