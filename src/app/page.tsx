import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#010102] text-[#f7f8f8] selection:bg-[#5e6ad2]/30 selection:text-white font-sans antialiased">
      {/* Sticky Header */}
      <header className="sticky top-0 z-40 w-full border-b border-[#23252a] bg-[#010102]/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            {/* Minimalist Logo / Mark */}
            <span className="flex h-5 w-5 items-center justify-center rounded-sm bg-[#5e6ad2] text-[10px] font-bold text-white">
              JG
            </span>
            <span className="text-sm font-semibold tracking-tight text-[#f7f8f8]">
              Jessica Green
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-[#8a8f98] font-medium">
            <a href="#about" className="transition-colors hover:text-[#f7f8f8]">About</a>
            <a href="#featured" className="transition-colors hover:text-[#f7f8f8]">Featured Agency</a>
            <a href="#experience" className="transition-colors hover:text-[#f7f8f8]">Experience</a>
            <a href="#skills" className="transition-colors hover:text-[#f7f8f8]">Skills</a>
            <a href="#education" className="transition-colors hover:text-[#f7f8f8]">Education</a>
          </nav>

          <div>
            <a
              href="#contact"
              className="inline-flex h-8 items-center justify-center rounded-md bg-[#0f1011] border border-[#23252a] px-3 text-xs font-medium text-[#f7f8f8] transition-colors hover:bg-[#141516] hover:text-white"
            >
              Contact Me
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mx-auto max-w-5xl px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:gap-12">
          {/* Text side */}
          <div className="flex-1 mt-10 md:mt-0">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#23252a] bg-[#0f1011] px-2.5 py-0.5 text-xs font-semibold text-[#8a8f98] tracking-wide mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[#27a644]" />
              Available for Consultancy
            </div>

            {/* Name & Title */}
            <h1 className="text-4xl font-semibold tracking-tight text-[#f7f8f8] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
              Occupational Health <br className="hidden sm:inline" />
              <span className="text-[#8a8f98]">Consultant &amp; Director</span>
            </h1>

            <p className="text-lg md:text-xl text-[#d0d6e0] font-normal leading-relaxed mb-8 max-w-2xl">
              Founder and Managing Director of <strong className="text-white">Working for Health Limited</strong>. Combining clinical nursing expertise with strategic health and safety consulting to empower New Zealand businesses.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#5e6ad2] px-5 text-sm font-medium text-white transition-colors hover:bg-[#828fff] focus:outline-none focus:ring-2 focus:ring-[#5e69d1] focus:ring-offset-2 focus:ring-offset-[#010102]"
              >
                Get In Touch
              </a>
              <a
                href="https://www.linkedin.com/in/jessica-green-05505691"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#0f1011] border border-[#23252a] px-5 text-sm font-medium text-[#f7f8f8] transition-colors hover:bg-[#141516] hover:border-[#34343a]"
              >
                <svg className="mr-2 h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/jesshse-jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#0f1011] border border-[#23252a] px-5 text-sm font-medium text-[#f7f8f8] transition-colors hover:bg-[#141516] hover:border-[#34343a]"
              >
                <svg className="mr-2 h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>

          {/* Photo side */}
          <div className="flex-shrink-0 flex justify-center md:justify-end">
            <div className="relative h-56 w-56 md:h-72 md:w-72 rounded-full overflow-hidden border-2 border-[#23252a] ring-4 ring-[#5e6ad2]/20">
              <Image
                src="/profile-photo.jpg"
                alt="Jessica Green"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid Content */}
      <main className="mx-auto max-w-5xl px-6 pb-24 space-y-24">
        
        {/* Section 1: About Me */}
        <section id="about" className="grid grid-cols-1 gap-8 pt-8 border-t border-[#23252a] md:grid-cols-3">
          <div className="md:col-span-1">
            <h2 className="text-xs font-semibold tracking-widest text-[#8a8f98] uppercase">
              01 // Professional Bio
            </h2>
            <p className="mt-2 text-2xl font-medium tracking-tight text-[#f7f8f8] sm:text-3xl">
              The Philosophy
            </p>
          </div>
          <div className="md:col-span-2 space-y-6 text-[#d0d6e0] leading-relaxed text-base">
            <p>
              Jessica is the founder and Managing Director of Working for Health Limited. Wearing the hats of both <strong className="text-white">Occupational Health Nurse</strong> and <strong className="text-white">Health and Safety Consultant</strong>, she brings a multidimensional approach to health and safety management, with a commitment to <em className="italic text-white">"health not being safety's poor cousin."</em>
            </p>
            <p>
              Being able to empower individuals and businesses to look after their own health and safety is what Jessica enjoys most about working with her clients. However, what really motivates her is being able to mentor, support, and develop other health and safety practitioners into excellence. She is an avid learner and ensures both her and her team keep up to date with emerging research and changes to best practice.
            </p>
            <div className="p-4 bg-[#0f1011] border border-[#23252a] rounded-lg text-sm flex items-start gap-3">
              <svg className="h-5 w-5 text-[#5e6ad2] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <div>
                <span className="font-semibold text-[#f7f8f8]">Industry Leadership:</span> As a Graduate Member of the New Zealand Institute of Safety Management (NZISM), Jessica has represented the Taranaki region on both the National Executive Committee for NZISM and the New Zealand Occupational Health Nurses Association (NZOHNA).
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Featured Work (The Agency) */}
        <section id="featured" className="space-y-6 pt-8 border-t border-[#23252a]">
          <div>
            <h2 className="text-xs font-semibold tracking-widest text-[#8a8f98] uppercase">
              02 // Highlighted Work
            </h2>
            <p className="mt-2 text-2xl font-medium tracking-tight text-[#f7f8f8] sm:text-3xl">
              Working for Health Ltd
            </p>
          </div>

          <div className="relative rounded-xl border border-[#23252a] bg-[#0f1011] p-8 overflow-hidden hover:bg-[#141516] transition-all duration-300">
            {/* Lavender light bleed decoration (Linear style) */}
            <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-[#5e6ad2]/10 blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <span className="inline-flex items-center rounded-md bg-[#5e6ad2]/10 px-2.5 py-1 text-xs font-medium text-[#828fff] border border-[#5e6ad2]/20">
                  Featured Venture
                </span>
                <h3 className="text-3xl font-semibold tracking-tight text-[#f7f8f8]">
                  From Startup to 20+ Practitioners
                </h3>
                <p className="text-[#d0d6e0] leading-relaxed">
                  Jessica successfully established and grew Taranaki-based Working for Health Limited into a multi-faceted health and safety consultancy company. The business has scaled to employ over 20 specialized practitioners.
                </p>
                <div className="flex items-center gap-6">
                  <div>
                    <div className="text-2xl font-bold text-white">20+</div>
                    <div className="text-xs text-[#8a8f98]">Specialized Staff</div>
                  </div>
                  <div className="h-8 w-px bg-[#23252a]" />
                  <div>
                    <div className="text-2xl font-bold text-white">14+ Years</div>
                    <div className="text-xs text-[#8a8f98]">Operational Growth</div>
                  </div>
                </div>
                <div>
                  <a
                    href="http://www.workingforhealth.co.nz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-[#828fff] hover:text-white transition-colors"
                  >
                    Visit workingforhealth.co.nz
                    <svg className="ml-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Graphical UI Frame representing health & safety metrics (Simulating Linear screenshot card) */}
              <div className="border border-[#23252a] rounded-lg bg-[#010102] p-6 font-mono text-xs text-[#8a8f98]">
                <div className="flex items-center justify-between border-b border-[#23252a] pb-3 mb-4">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#5e6ad2]" />
                    <span className="text-[#f7f8f8] font-semibold">health_consultancy_metrics.config</span>
                  </div>
                  <span className="text-[10px] text-[#62666d]">EST. 2012</span>
                </div>
                <div className="space-y-3">
                  <div>
                    <span className="text-[#5e6ad2]">nurse_led_consulting:</span>
                    <span className="text-[#27a644]"> true</span>
                  </div>
                  <div>
                    <span className="text-[#5e6ad2]">multidimensional_approach:</span>
                    <span className="text-white"> "clinical_nursing + osh_consultation"</span>
                  </div>
                  <div>
                    <span className="text-[#5e6ad2]">practitioners:</span>
                    <span className="text-white"> [</span>
                    <div className="pl-4">
                      <span>"Occupational Health Nurses",</span><br />
                      <span>"Safety Consultants",</span><br />
                      <span>"Ergonomic Advisors"</span>
                    </div>
                    <span className="text-white">]</span>
                  </div>
                  <div>
                    <span className="text-[#5e6ad2]">region:</span>
                    <span className="text-white"> "Taranaki, New Zealand"</span>
                  </div>
                  <div className="border-t border-[#23252a] pt-3 mt-3 flex items-center justify-between">
                    <span className="text-[10px]">HEALTH_NOT_SAFETY_POOR_COUSIN</span>
                    <span className="text-[#27a644] font-bold">100% OK</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Work Experience */}
        <section id="experience" className="grid grid-cols-1 gap-8 pt-8 border-t border-[#23252a] md:grid-cols-3">
          <div className="md:col-span-1">
            <h2 className="text-xs font-semibold tracking-widest text-[#8a8f98] uppercase">
              03 // Career History
            </h2>
            <p className="mt-2 text-2xl font-medium tracking-tight text-[#f7f8f8] sm:text-3xl">
              Professional Timeline
            </p>
          </div>
          <div className="md:col-span-2 space-y-8">
            {/* Experience 1 */}
            <div className="group relative border-l-2 border-[#23252a] pl-6 hover:border-[#5e6ad2] transition-colors duration-300">
              <div className="absolute -left-[6px] top-1.5 h-2.5 w-2.5 rounded-full bg-[#23252a] group-hover:bg-[#5e6ad2] transition-colors duration-300" />
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                <h3 className="text-lg font-semibold text-[#f7f8f8]">
                  OccuSafe PTY Ltd
                </h3>
                <span className="text-xs text-[#8a8f98] font-medium bg-[#0f1011] px-2 py-0.5 border border-[#23252a] rounded">
                  2025 - Present
                </span>
              </div>
              <p className="text-sm font-medium text-[#828fff] mb-2">
                Principal Occupational Health Consultant
              </p>
              <p className="text-sm text-[#d0d6e0]">
                Providing senior advisory, clinical nursing program leadership, and high-level health and safety systems consultation for national corporate and industrial clients.
              </p>
            </div>

            {/* Experience 2 */}
            <div className="group relative border-l-2 border-[#23252a] pl-6 hover:border-[#5e6ad2] transition-colors duration-300">
              <div className="absolute -left-[6px] top-1.5 h-2.5 w-2.5 rounded-full bg-[#23252a] group-hover:bg-[#5e6ad2] transition-colors duration-300" />
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                <h3 className="text-lg font-semibold text-[#f7f8f8]">
                  HSE360 Ltd
                </h3>
                <span className="text-xs text-[#8a8f98] font-medium bg-[#0f1011] px-2 py-0.5 border border-[#23252a] rounded">
                  2025 - Present
                </span>
              </div>
              <p className="text-sm font-medium text-[#828fff] mb-2">
                Senior Health & Safety Consultant
              </p>
              <p className="text-sm text-[#d0d6e0]">
                Delivering complete risk audits, corporate health surveillance strategy design, and mentoring health and safety practitioners.
              </p>
            </div>

            {/* Experience 3 */}
            <div className="group relative border-l-2 border-[#23252a] pl-6 hover:border-[#5e6ad2] transition-colors duration-300">
              <div className="absolute -left-[6px] top-1.5 h-2.5 w-2.5 rounded-full bg-[#23252a] group-hover:bg-[#5e6ad2] transition-colors duration-300" />
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                <h3 className="text-lg font-semibold text-[#f7f8f8]">
                  Working for Health Ltd
                </h3>
                <span className="text-xs text-[#8a8f98] font-medium bg-[#0f1011] px-2 py-0.5 border border-[#23252a] rounded">
                  Jul 2012 - Present
                </span>
              </div>
              <p className="text-sm font-medium text-[#828fff] mb-2">
                Occupational Health Consultant | Managing Director
              </p>
              <p className="text-sm text-[#d0d6e0]">
                Established and scaled a premier occupational health and safety consultancy based in Taranaki, providing nurse-led services and strategic occupational health advising.
              </p>
            </div>

            {/* Experience 2 */}
            <div className="group relative border-l-2 border-[#23252a] pl-6 hover:border-[#5e6ad2] transition-colors duration-300">
              <div className="absolute -left-[6px] top-1.5 h-2.5 w-2.5 rounded-full bg-[#23252a] group-hover:bg-[#5e6ad2] transition-colors duration-300" />
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                <h3 className="text-lg font-semibold text-[#f7f8f8]">
                  DIALOG Fitzroy Ltd
                </h3>
                <span className="text-xs text-[#8a8f98] font-medium bg-[#0f1011] px-2 py-0.5 border border-[#23252a] rounded">
                  May 2013 - Dec 2014
                </span>
              </div>
              <p className="text-sm font-medium text-[#828fff] mb-2">
                Occupational Health Nurse
              </p>
              <p className="text-sm text-[#d0d6e0]">
                Provided workplace clinical services, ergonomic assessments, health surveillance, and safety advising for Dialog Fitzroy engineering and fabrication clients in New Zealand.
              </p>
            </div>

            {/* Experience 3 */}
            <div className="group relative border-l-2 border-[#23252a] pl-6 hover:border-[#5e6ad2] transition-colors duration-300">
              <div className="absolute -left-[6px] top-1.5 h-2.5 w-2.5 rounded-full bg-[#23252a] group-hover:bg-[#5e6ad2] transition-colors duration-300" />
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                <h3 className="text-lg font-semibold text-[#f7f8f8]">
                  Dow AgroSciences
                </h3>
                <span className="text-xs text-[#8a8f98] font-medium bg-[#0f1011] px-2 py-0.5 border border-[#23252a] rounded">
                  2011 - 2012
                </span>
              </div>
              <p className="text-sm font-medium text-[#828fff] mb-2">
                Occupational Health Nurse
              </p>
              <p className="text-sm text-[#d0d6e0]">
                Delivered workplace wellness programs, biological monitoring, chemical exposure screening, and injury care management inside a large industrial agrochemical facility.
              </p>
            </div>

            {/* Experience 4 */}
            <div className="group relative border-l-2 border-[#23252a] pl-6 hover:border-[#5e6ad2] transition-colors duration-300">
              <div className="absolute -left-[6px] top-1.5 h-2.5 w-2.5 rounded-full bg-[#23252a] group-hover:bg-[#5e6ad2] transition-colors duration-300" />
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                <h3 className="text-lg font-semibold text-[#f7f8f8]">
                  Dora Smith Ltd
                </h3>
                <span className="text-xs text-[#8a8f98] font-medium bg-[#0f1011] px-2 py-0.5 border border-[#23252a] rounded">
                  2006 - 2012
                </span>
              </div>
              <p className="text-sm font-medium text-[#828fff] mb-2">
                Occupational Health Nurse
              </p>
              <p className="text-sm text-[#d0d6e0]">
                Six years of foundational occupational health service delivery, health promotion activities, and ergonomic consultancy for local client organizations.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Skills */}
        <section id="skills" className="grid grid-cols-1 gap-8 pt-8 border-t border-[#23252a] md:grid-cols-3">
          <div className="md:col-span-1">
            <h2 className="text-xs font-semibold tracking-widest text-[#8a8f98] uppercase">
              04 // Skillset
            </h2>
            <p className="mt-2 text-2xl font-medium tracking-tight text-[#f7f8f8] sm:text-3xl">
              Key Capabilities
            </p>
          </div>
          <div className="md:col-span-2 space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-[#8a8f98] tracking-wider uppercase mb-3">Top Specialties</h3>
              <div className="flex flex-wrap gap-2.5">
                <span className="rounded-md border border-[#5e6ad2] bg-[#5e6ad2]/10 px-3 py-1.5 text-sm font-medium text-white">
                  Occupational Health
                </span>
                <span className="rounded-md border border-[#5e6ad2] bg-[#5e6ad2]/10 px-3 py-1.5 text-sm font-medium text-white">
                  Health Promotion
                </span>
                <span className="rounded-md border border-[#5e6ad2] bg-[#5e6ad2]/10 px-3 py-1.5 text-sm font-medium text-white">
                  Ergonomics
                </span>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-sm font-semibold text-[#8a8f98] tracking-wider uppercase mb-3">Other Competencies</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 rounded-md bg-[#0f1011] border border-[#23252a] flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#5e6ad2]" />
                  <span className="text-sm text-[#d0d6e0]">Occupational Hygiene Focus</span>
                </div>
                <div className="p-3 rounded-md bg-[#0f1011] border border-[#23252a] flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#5e6ad2]" />
                  <span className="text-sm text-[#d0d6e0]">Clinical Health Surveillance</span>
                </div>
                <div className="p-3 rounded-md bg-[#0f1011] border border-[#23252a] flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#5e6ad2]" />
                  <span className="text-sm text-[#d0d6e0]">Safety Management Systems</span>
                </div>
                <div className="p-3 rounded-md bg-[#0f1011] border border-[#23252a] flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#5e6ad2]" />
                  <span className="text-sm text-[#d0d6e0]">Practitioner Mentoring</span>
                </div>
                <div className="p-3 rounded-md bg-[#0f1011] border border-[#23252a] flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#5e6ad2]" />
                  <span className="text-sm text-[#d0d6e0]">Ergonomic Workplace Audits</span>
                </div>
                <div className="p-3 rounded-md bg-[#0f1011] border border-[#23252a] flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#5e6ad2]" />
                  <span className="text-sm text-[#d0d6e0]">Biological Monitoring</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Education */}
        <section id="education" className="grid grid-cols-1 gap-8 pt-8 border-t border-[#23252a] md:grid-cols-3">
          <div className="md:col-span-1">
            <h2 className="text-xs font-semibold tracking-widest text-[#8a8f98] uppercase">
              05 // Education
            </h2>
            <p className="mt-2 text-2xl font-medium tracking-tight text-[#f7f8f8] sm:text-3xl">
              Degrees & Credentials
            </p>
          </div>
          <div className="md:col-span-2 space-y-6">
            {/* Degree 1 */}
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[#23252a] bg-[#0f1011]">
                <svg className="h-5 w-5 text-[#8a8f98]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <div>
                <h4 className="text-base font-semibold text-[#f7f8f8]">Massey University</h4>
                <p className="text-sm text-[#d0d6e0]">Advanced Occupational Hygiene</p>
                <span className="text-xs text-[#8a8f98] mt-1 inline-block">2015</span>
              </div>
            </div>

            {/* Degree 2 */}
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[#23252a] bg-[#0f1011]">
                <svg className="h-5 w-5 text-[#8a8f98]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <h4 className="text-base font-semibold text-[#f7f8f8]">British Occupational Hygiene Society (BOHS)</h4>
                <p className="text-sm text-[#d0d6e0]">W503 Noise - Measurement and its Effects</p>
                <span className="text-xs text-[#8a8f98] mt-1 inline-block">2013</span>
              </div>
            </div>

            {/* Degree 3 */}
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[#23252a] bg-[#0f1011]">
                <svg className="h-5 w-5 text-[#8a8f98]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <div>
                <h4 className="text-base font-semibold text-[#f7f8f8]">Massey University</h4>
                <p className="text-sm text-[#d0d6e0]">PGDipOSH (Postgraduate Diploma in Occupational Safety & Health)</p>
                <span className="text-xs text-[#8a8f98] mt-1 inline-block">2007 - 2008</span>
              </div>
            </div>

            {/* Degree 4 */}
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[#23252a] bg-[#0f1011]">
                <svg className="h-5 w-5 text-[#8a8f98]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <div>
                <h4 className="text-base font-semibold text-[#f7f8f8]">UCOL (Universal College of Learning)</h4>
                <p className="text-sm text-[#d0d6e0]">Bachelor of Nursing</p>
                <span className="text-xs text-[#8a8f98] mt-1 inline-block">2004 - 2006</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Contact & Location */}
        <section id="contact" className="grid grid-cols-1 gap-8 pt-8 border-t border-[#23252a] md:grid-cols-3">
          <div className="md:col-span-1">
            <h2 className="text-xs font-semibold tracking-widest text-[#8a8f98] uppercase">
              06 // Get in Touch
            </h2>
            <p className="mt-2 text-2xl font-medium tracking-tight text-[#f7f8f8] sm:text-3xl">
              Contact Details
            </p>
          </div>
          
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Contact Method 1 */}
            <div className="rounded-xl border border-[#23252a] bg-[#0f1011] p-6 hover:bg-[#141516] transition-colors duration-300">
              <span className="text-xs text-[#8a8f98] block mb-1">EMAIL ADDRESS</span>
              <a href="mailto:jessica@workingforhealth.co.nz" className="text-base font-semibold text-white hover:text-[#828fff] transition-colors">
                jessica@workingforhealth.co.nz
              </a>
            </div>

            {/* Contact Method 2 */}
            <div className="rounded-xl border border-[#23252a] bg-[#0f1011] p-6 hover:bg-[#141516] transition-colors duration-300">
              <span className="text-xs text-[#8a8f98] block mb-1">PHONE NUMBER</span>
              <a href="tel:02746051399" className="text-base font-semibold text-white hover:text-[#828fff] transition-colors">
                027 4605 1399
              </a>
            </div>

            {/* Contact Method 3 */}
            <div className="rounded-xl border border-[#23252a] bg-[#0f1011] p-6 hover:bg-[#141516] transition-colors duration-300">
              <span className="text-xs text-[#8a8f98] block mb-1">LOCATION</span>
              <span className="text-base font-semibold text-white">
                New Plymouth, Taranaki, NZ
              </span>
              <span className="text-xs text-[#8a8f98] block mt-1">69 Corbett Road, Bell Block</span>
            </div>

            {/* Contact Method 4 */}
            <div className="rounded-xl border border-[#23252a] bg-[#0f1011] p-6 hover:bg-[#141516] transition-colors duration-300 flex flex-col justify-between">
              <div>
                <span className="text-xs text-[#8a8f98] block mb-1">PROFESSIONAL NETWORKS</span>
                <span className="text-base font-semibold text-white">LinkedIn Profile</span>
              </div>
              <a
                href="https://www.linkedin.com/in/jessica-green-05505691"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#828fff] hover:text-white mt-2 inline-flex items-center transition-colors"
              >
                Connect on LinkedIn
                <svg className="ml-1 h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-[#23252a] bg-[#010102]">
        <div className="mx-auto max-w-5xl px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-sm bg-[#5e6ad2] text-[10px] font-bold text-white">
              JG
            </span>
            <span className="text-xs text-[#8a8f98]">
              © {new Date().getFullYear()} Jessica Green. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs text-[#8a8f98]">
            <a href="https://www.linkedin.com/in/jessica-green-05505691" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="http://www.workingforhealth.co.nz" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Working for Health</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
