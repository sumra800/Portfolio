import { useState } from 'react';
import { ChevronRight, ExternalLink, Github } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  summary: string;
  role: string;
  stack: string[];
  architecture: string;
  decisions: string[];
  impact: string;
  year: string;
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    id: 'AI-Assisted Collaborative Platform',
    title: 'Study Buddy',
    summary: 'A real-time collaborative platform that boosts student productivity with chat, AI assistance, and analytics.',
    role: 'Lead Full Stack Engineer',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'RAG', 'transformer inference', 'Analytics pipelines', 'DynamoDB'],
    architecture: 'MERN-stack collaborative study platform solving fragmented student productivity by integrating real-time chat, AI-powered academic assistance, and progress analytics into a unified system.',
    decisions: [
      'Adopted WebSockets (Socket.IO) for low-latency, real-time communication.',
      'Integrated transformer-based RAG for context-aware AI assistance.',
      'Event-driven architecture to handle chat, AI responses, and analytics efficiently.',
      'Chose MERN stack to leverage full-stack JavaScript for rapid development.',
      'Modular AI services for scalability'
    ],
    impact: 'More than 50+ active university student signups in the first phase. Improved student productivity by centralizing collaboration, enabling real-time interaction, and providing intelligent academic assistance.',
    year: '2025',
    github: 'https://github.com/sumra800/FYP.git'
  },
  {
    id: 'Multi-Service Booking Platform',
    title: 'ServEase',
    summary: 'A seamless service booking system simplifying discovery, scheduling, and real-time updates.',
    role: 'Lead Engineer',
    stack: ['Node.js', 'Express', 'MongoDB', 'React.js', 'JWT', 'Docker', 'REST APIs', 'Polling'],
    architecture: 'Developed with MERN stack, REST APIs, JWT authentication, and real-time booking updates. Followed a layered architecture with clear separation between frontend, API layer, and database services with centralized admin control',
    decisions: [
      'Used layered architecture separating frontend, API, and database services for maintainability.',
      'Optimized database schema for smooth booking workflows and fast queries.',
      'Secured APIs with JWT authentication to protect user data.',
      'Implemented real-time updates to improve user experience and reduce scheduling conflicts.',
      'Used Docker for containerization to ensure consistent development and production environments.'
    ],
    impact: 'ServEase streamlined service discovery and booking, reducing scheduling conflicts and improving user experience. The source code version of platform was then sold to overseas client in 2024 and helped provide seamless experience to the users to this day with no secuirty breaches or crashes.',
    year: '2024',
    link: 'https://serv-ease-roan.vercel.app/'
  },
  {
    id: 'Campus Food Guide',
    title: 'FastBites',
    summary: 'A campus food discovery app providing fast search, filtering, and centralized listings.',
    role: 'Lead Engineer',
    stack: ['Node.js', 'MySQL', 'Docker', 'React.js', 'REST APIs', 'JWT', 'Google Maps API'],
    architecture: 'Adopted a client-server architecture with structured REST APIs and normalized database design. Focused on efficient querying and indexing to enable fast filtering and search functionality. Enhanced campus food accessibility by centralizing listings and improving discovery through responsive UI and fast queries.',
    decisions: [
      'Normalized database design to optimize queries and reduce redundancy.',
      'Focused on efficient indexing and query optimization to ensure fast search/filter functionality.',
      'Designed responsive UI to improve accessibility and enhance campus food discovery.',
      'Selected React and Node.js to leverage reusable components and JavaScript consistency.',
      'Implemented JWT authentication for secure user sessions and role-based access control.',
      'Used Docker for containerization to ensure consistent development and production environments.',
      'Integrated Google Maps API for location-based search and navigation.',
      'Implemented REST APIs for seamless communication between frontend and backend.'
    ],
    impact: 'FastBites improved campus food discovery by centralizing listings and enhancing search functionality. The platform enabled students to quickly find food options, access menus, and view location details, significantly improving accessibility and convenience.',
    year: '2024'
  },
  {
    id: 'Real-Time Sign Language Recognition System',
    title: 'SignSync',
    summary: 'A computer vision system that translates sign language gestures into real-time predictions.',
    role: 'Project Team Lead',
    stack: ['Python', 'OpenCV', 'CNN', 'TensorFlow', 'AWS Lambda', 'DynamoDB'],
    architecture: 'Implemented using Python, OpenCV, and CNN-based deep learning models for gesture classification. Designed a real-time computer vision pipeline including preprocessing, feature extraction, and inference stages.',
    decisions: [
      'Implemented real-time computer vision pipeline including preprocessing, feature extraction, and inference.',
      'Optimized preprocessing and model inference to minimize latency for real-time usability.',
      'Selected CNN models for accurate gesture classification.',
      'Designed a system to translate gestures into predictions to improve accessibility.',
      'Chose Python and OpenCV for rapid prototyping and strong ecosystem support in computer vision.',
      'Used AWS Lambda for auto-scaling compute and DynamoDB for scalable data storage.'
    ],
    impact: 'SignSync achieved 92% accuracy in real-time gesture recognition, enabling seamless communication for deaf and hard-of-hearing individuals. The system was deployed to active users, significantly improving accessibility and inclusion.',
    year: '2023',
    github: 'https://github.com/sumra800/signsync.git'
  },
  {
    id: 'Employee Attendance and Leave Management System',
    title: 'Employee Attendance and Leave Management System',
    summary: 'A C++ based console application designed to manage employees, track their daily attendance, and process leave applications through a hierarchical approval workflow.',
    role: 'Software Engineer',
    stack: ['C++', 'OOP', 'File I/O'],
    architecture: 'Object-Oriented console application utilizing polymorphic FileManager classes for local data persistence in CSV format. Implemented Role-Based Access Control logic supporting hierarchical approvals and automatic unmarked absence reconciliation.',
    decisions: [
      'Used Object-Oriented principles like Polymorphism and Inheritance to manage diverse user roles and behaviors.',
      'Implemented file-based storage using polymorphic FileManager classes for persistent data keeping.',
      'Designed a multi-tier authorization hierarchy (Supervisor, Director, Admin) for leave approvals.',
      'Automated leave reconciliation to seamlessly handle unmarked absences by deducting available Casual Leaves.'
    ],
    impact: 'Provided a comprehensive CLI system capable of managing daily attendance and configurable, multi-tiered leave approvals. Maintained persistent records efficiently without the need for an external database.',
    year: '2023',
    github: 'https://github.com/sumra800/Employeees-attendance-and-leave-managment-system.git'
  },
  {
    id: 'Custom Compiler Implementation in C++',
    title: 'Custom Compiler Implementation in C++',
    summary: 'A multi-phase compiler converting high-level code into executable instructions using C++ and TAC.',
    role: 'Lead Engineer',
    stack: ['C++', 'DFA for lexical analysis', 'LL(1) parsing using syntax analysis', 'TAC'],
    architecture: 'Followed a multi-phase compiler architecture: lexical analysis, syntax parsing, semantic analysis, and code generation. Layers included using recursive descent parsing for simplicity and structured TAC for clarity in intermediate representation.',
    decisions: [
      'Used recursive descent parsing for simplicity in syntax analysis.',
      'Structured multi-phase compiler architecture: lexical, syntax, semantic, code generation.',
      'Adopted TAC (Three-Address Code) for clear intermediate representation.',
      'Implemented DFA for lexical analysis to efficiently tokenize source code.',
      'Focused on compiling high-level constructs into executable code to demonstrate language processing mastery'
    ],
    impact: 'Successfully converted high-level code into executable instructions using C++ and TAC, demonstrating mastery of compiler design principles and language processing techniques.',
    year: '2023'
  }
];

export function ProjectsGrid() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-24">
        <div className="font-mono text-xs text-gray-600 mb-4 tracking-wider">
          02_WORK → SELECTED_PROJECTS
        </div>
        <h2 className="text-5xl lg:text-6xl">
          Systems I've
          <span className="block text-lime-400 mt-2">architected & built</span>
        </h2>
      </div>

      {/* Projects */}
      <div className="space-y-6">
        {projects.map((project) => {
          const isExpanded = expandedId === project.id;

          return (
            <div
              key={project.id}
              className="border border-gray-800 bg-[#0a0a0a]/50 hover:border-lime-400/30 transition-all duration-300"
            >
              {/* Project Header - Always Visible */}
              <button
                onClick={() => setExpandedId(isExpanded ? null : project.id)}
                className="w-full p-8 text-left flex items-start justify-between gap-8"
              >
                <div className="flex-1">
                  <div className="flex items-start gap-6 mb-3">
                    <div className="font-mono text-xs text-gray-600">{project.year}</div>
                    <div className="flex-1">
                      <h3 className="text-3xl mb-2">{project.title}</h3>
                      <p className="text-gray-400">{project.summary}</p>
                    </div>
                  </div>
                  <div className="font-mono text-xs text-lime-400 ml-[4.5rem]">
                    {project.role}
                  </div>
                </div>
                <ChevronRight
                  className={`w-6 h-6 text-gray-600 flex-shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-90 text-lime-400' : ''
                    }`}
                />
              </button>

              {/* Expanded Content */}
              {isExpanded && (
                <div className="px-8 pb-8 border-t border-gray-800">
                  {(project.link || project.github) && (
                    <div className="pt-8 -mb-4 flex flex-wrap gap-4">
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-lime-400 hover:text-lime-300 font-mono text-sm border border-lime-400/30 px-4 py-2 hover:bg-lime-400/10 transition-colors">
                          <ExternalLink className="w-4 h-4" />
                          VIEW_LIVE_DEMO
                        </a>
                      )}
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-lime-400 hover:text-lime-300 font-mono text-sm border border-lime-400/30 px-4 py-2 hover:bg-lime-400/10 transition-colors">
                          <Github className="w-4 h-4" />
                          VIEW_SOURCE_CODE
                        </a>
                      )}
                    </div>
                  )}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-8">
                    {/* Left Column */}
                    <div className="space-y-8">
                      {/* Stack */}
                      <div>
                        <div className="font-mono text-xs text-gray-600 mb-3">TECH_STACK</div>
                        <div className="flex flex-wrap gap-2">
                          {project.stack.map((tech) => (
                            <div
                              key={tech}
                              className="px-3 py-1 border border-gray-800 font-mono text-xs text-gray-300"
                            >
                              {tech}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Architecture */}
                      <div>
                        <div className="font-mono text-xs text-gray-600 mb-3">ARCHITECTURE</div>
                        <p className="text-gray-400 leading-relaxed">{project.architecture}</p>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                      {/* Key Decisions */}
                      <div>
                        <div className="font-mono text-xs text-gray-600 mb-3">KEY_DECISIONS</div>
                        <div className="space-y-2">
                          {project.decisions.map((decision, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <div className="w-1 h-1 bg-lime-400 rounded-full mt-2 flex-shrink-0"></div>
                              <div className="text-gray-400 text-sm">{decision}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Impact */}
                      <div>
                        <div className="font-mono text-xs text-gray-600 mb-3">IMPACT</div>
                        <p className="text-lime-400">{project.impact}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer Note */}
      <div className="mt-12 font-mono text-xs text-gray-600">
        → More projects available upon request
      </div>
    </div>
  );
}
