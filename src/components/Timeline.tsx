interface TimelineItem {
  year: string;
  company: string;
  role: string;
  responsibilities: string | string[];
  scale: string;
  type: 'work' | 'education';
}

const timelineData: TimelineItem[] = [
  {
    year: 'April 2026 - Present',
    company: 'XBot Labs',
    role: 'Associate Software Engineer',
    responsibilities: [
      'Engineered 8+ backend API endpoints in Node.js and PostgreSQL, enabling core feature delivery for US-based client products within the first month of joining.',
      'Resolved 20+ production and QA-reported bugs across a 6-person team, improving release stability and reducing regression cycle time.',
      'Contributed to PostgreSQL schema design across 5 modules, ensuring normalized data architecture for scalable client-facing features.',
      'Delivered full-stack features using React and Node.js in an Agile team, maintaining code quality standards through peer reviews and cross-functional collaboration.'
    ],
    scale: 'US-Based Client Products',
    type: 'work'
  },
  {
    year: '2023 - Present',
    company: 'Freelancer',
    role: 'Software Engineer',
    responsibilities: 'Developed and maintained web applications for clients across various industries. Built custom solutions tailored to specific business needs. Collaborated with clients to understand requirements and deliver high-quality results.',
    scale: 'Various Clients',
    type: 'work'
  },
  {
    year: '2022 - 2026',
    company: 'FAST NUCES Lahore',
    role: 'BS Computer Science',
    responsibilities: 'Focus: OOP, Data Structures, Algorithms, Operating Systems, Database Systems,Computer Networks, Distributed Systems, Information & Cyber Security, Machine Learning & Artifical Intelligence. Published research on Security Vulnerabilities and Risks in Cyber Physical Systems.',
    scale: 'Graduate',
    type: 'education'
  },
  {
    year: '2020 - 2022',
    company: 'Kips College',
    role: 'Pre Engineering Student',
    responsibilities: 'Focus: Physics, Chemistry, Mathematics, English, Urdu. Scored 94% in FSc Pre-Engineering.',
    scale: 'Intermediate',
    type: 'education'
  },
  {
    year: '2018 - 2020',
    company: 'Lahore College for Women University',
    role: 'Pre Medical Student',
    responsibilities: 'Focus: Biology, Chemistry, Physics, English, Urdu. Scored 92% in Pre-Medical.',
    scale: 'Pre-Medical',
    type: 'education'
  },

];

export function Timeline() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="mb-24">
        <div className="font-mono text-xs text-gray-600 mb-4 tracking-wider">
          04_PATH → EXPERIENCE_LOG
        </div>
        <h2 className="text-5xl lg:text-6xl">
          Professional
          <span className="block text-lime-400 mt-2">trajectory</span>
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-0 lg:left-40 top-0 bottom-0 w-[1px] bg-gray-800"></div>

        {/* Timeline Items */}
        <div className="space-y-16">
          {timelineData.map((item, index) => (
            <div key={index} className="relative">
              {/* Timeline Node */}
              <div className="absolute left-0 lg:left-40 -ml-[3px] w-[7px] h-[7px] bg-lime-400 rounded-full border-2 border-[#0a0a0a]"></div>

              {/* Content */}
              <div className="lg:grid lg:grid-cols-[10rem_1fr] lg:gap-12 space-y-4 lg:space-y-0">
                {/* Year */}
                <div className="font-mono text-xs text-gray-600 lg:text-right pt-1">
                  {item.year}
                </div>

                {/* Details */}
                <div className="lg:pl-12 pb-8 border-b border-gray-800 last:border-0">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl mb-1">{item.company}</h3>
                      <div className="font-mono text-xs text-lime-400">{item.role}</div>
                    </div>
                    <div className={`
                      px-3 py-1 font-mono text-[10px] border
                      ${item.type === 'work'
                        ? 'border-lime-400/30 text-lime-400'
                        : 'border-gray-700 text-gray-500'
                      }
                    `}>
                      {item.type === 'work' ? 'WORK' : 'EDU'}
                    </div>
                  </div>

                  {Array.isArray(item.responsibilities) ? (
                    <ul className="space-y-3 mb-4">
                      {item.responsibilities.map((responsibility) => (
                        <li
                          key={responsibility}
                          className="flex items-start gap-3 text-gray-400 leading-relaxed"
                        >
                          <span
                            aria-hidden="true"
                            className="w-1.5 h-1.5 mt-2 bg-lime-400 rounded-full flex-shrink-0"
                          ></span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {item.responsibilities}
                    </p>
                  )}

                  <div className="font-mono text-xs text-gray-600">
                    SCALE: <span className="text-gray-500">{item.scale}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
}
