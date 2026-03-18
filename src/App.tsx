import { useState } from 'react';
import { SystemNav } from './components/SystemNav';
import { IntroModule } from './components/IntroModule';
import { AboutFlow } from './components/AboutFlow';
import { ProjectsGrid } from './components/ProjectsGrid';
import { SkillsMatrix } from './components/SkillsMatrix';
import { Timeline } from './components/Timeline';
import { ContactTerminal } from './components/ContactTerminal';

export default function App() {
  const [activeSection, setActiveSection] = useState('intro');

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 relative">
      {/* System Navigation */}
      <SystemNav activeSection={activeSection} onNavigate={setActiveSection} />
      
      {/* Main Content Flow */}
      <main className="relative">
        {/* Intro Module */}
        <section 
          id="intro" 
          className="min-h-screen flex items-center justify-center relative px-8"
          data-section="intro"
        >
          <IntroModule />
        </section>

        {/* About Flow */}
        <section 
          id="about" 
          className="min-h-screen py-32 px-8 relative"
          data-section="about"
        >
          <AboutFlow />
        </section>

        {/* Projects Grid */}
        <section 
          id="projects" 
          className="min-h-screen py-32 px-8 relative"
          data-section="projects"
        >
          <ProjectsGrid />
        </section>

        {/* Skills Matrix */}
        <section 
          id="skills" 
          className="min-h-screen py-32 px-8 relative"
          data-section="skills"
        >
          <SkillsMatrix />
        </section>

        {/* Timeline */}
        <section 
          id="experience" 
          className="min-h-screen py-32 px-8 relative"
          data-section="experience"
        >
          <Timeline />
        </section>

        {/* Contact Terminal */}
        <section 
          id="contact" 
          className="min-h-screen flex items-center justify-center px-8 relative"
          data-section="contact"
        >
          <ContactTerminal />
        </section>
      </main>

      {/* System Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02]">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(to right, #a3e635 1px, transparent 1px),
            linear-gradient(to bottom, #a3e635 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
    </div>
  );
}
