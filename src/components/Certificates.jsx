import { FiAward, FiExternalLink } from "react-icons/fi";
import Section from "../layout/Section";

const credentials = [
  {
    title: "Full Stack Web Development Certificate",
    issuer: "University of North Carolina at Charlotte",
    date: "May 2025",
    credentialUrl: "https://www.credly.com/badges/3d764556-e5f4-49b1-b94e-8875edb19b03/linked_in_profile",
  },
];

export default function Certificates() {
  return (
    <Section id="credentials" maxWidth="max-w-6xl" padding="py-14 px-6">
      <div className="grid items-center gap-7 border-y border-white/10 py-8 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="eyebrow">Education &amp; credentials</p>
          <h2 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
            Verified training, backed by working software
          </h2>
        </div>

        <div className="space-y-4">
          {credentials.map((credential) => (
            <article key={credential.title} className="flex flex-col gap-5 rounded-xl border border-white/10 bg-white/[0.025] p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-blueglow/30 bg-blueglow/10 text-xl text-blueglow">
                  <FiAward aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">{credential.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    {credential.issuer} <span aria-hidden="true">·</span> {credential.date}
                  </p>
                </div>
              </div>

              <a href={credential.credentialUrl} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-blueglow transition-colors hover:text-blueglow-light focus:outline-none focus-visible:text-blueglow-light">
                View verified credential <FiExternalLink aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
