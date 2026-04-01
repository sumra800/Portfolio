interface SkillLayer {
  layer: string;
  description: string;
  skills: { name: string; context: string }[];
}

const skillLayers: SkillLayer[] = [
  {
    layer: 'Backend Systems',
    description: 'Core server-side engineering',
    skills: [
      { name: 'Node.js & Express', context: 'Event-driven architectures, REST APIs' },
      { name: 'C++', context: 'OOP, Custom Compilers, File I/O' },
      { name: 'Python', context: 'Data pipelines, script execution' },
      { name: 'WebSockets', context: 'Real-time bidirectional data flow' }
    ]
  },
  {
    layer: 'Frontend & UI',
    description: 'Client-side applications and integrations',
    skills: [
      { name: 'React.js', context: 'Component-based SPAs, responsive design' },
      { name: 'TypeScript', context: 'Type-safe frontend development' },
      { name: 'Google Maps API', context: 'Location-based capabilities' },
      { name: 'Polling Strategies', context: 'Real-time client synchronization' }
    ]
  },
  {
    layer: 'AI & Machine Learning',
    description: 'Models, vision, and contextual AI',
    skills: [
      { name: 'TensorFlow', context: 'CNN-based deep learning classification' },
      { name: 'OpenCV', context: 'Real-time computer vision pipelines' },
      { name: 'RAG Systems', context: 'Transformer inference, context-aware AI' },
      { name: 'Analytics Pipelines', context: 'Data processing and visualization' }
    ]
  },
  {
    layer: 'Data Layer',
    description: 'Storage, schemas, and persistence',
    skills: [
      { name: 'MongoDB', context: 'NoSQL document storage, flexible schema' },
      { name: 'MySQL', context: 'Relational DBs, normalized querying' },
      { name: 'AWS DynamoDB', context: 'Highly scalable key-value storage' },
      { name: 'File-based Data', context: 'Local CSV and TAC generation' }
    ]
  },
  {
    layer: 'Infrastructure & Security',
    description: 'DevOps, cloud, and authentication',
    skills: [
      { name: 'Docker', context: 'Containerization, standard environments' },
      { name: 'AWS Lambda', context: 'Serverless compute execution' },
      { name: 'JWT Auth', context: 'Token-based user session security' },
      { name: 'RESTful Architecture', context: 'Structured communication interfaces' }
    ]
  }
];

export function SkillsMatrix() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-24">
        <div className="font-mono text-xs text-gray-600 mb-4 tracking-wider">
          03_STACK → TECHNICAL_LAYERS
        </div>
        <h2 className="text-5xl lg:text-6xl">
          Technology organized
          <span className="block text-lime-400 mt-2">by system layer</span>
        </h2>
      </div>

      {/* Skills Grid */}
      <div className="space-y-16">
        {skillLayers.map((layer, layerIndex) => (
          <div key={layerIndex} className="relative">
            {/* Layer Header */}
            <div className="mb-8 flex items-start gap-6">
              <div className="font-mono text-xs text-gray-600 mt-1 w-20">
                LAYER_{layerIndex + 1}
              </div>
              <div className="flex-1">
                <h3 className="text-3xl mb-2">{layer.layer}</h3>
                <p className="text-gray-600 font-mono text-xs">{layer.description}</p>
              </div>
            </div>

            {/* Skills */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-[7.5rem]">
              {layer.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="border border-gray-800 bg-[#0a0a0a]/50 p-6 hover:border-lime-400/30 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="font-mono text-sm text-lime-400 group-hover:text-lime-300 transition-colors">
                      {skill.name}
                    </div>
                    <div className="w-1.5 h-1.5 bg-gray-700 rounded-full group-hover:bg-lime-400 transition-colors"></div>
                  </div>
                  <div className="text-sm text-gray-500">{skill.context}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Context */}
      <div className="mt-24 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="border border-gray-800 bg-[#0a0a0a]/50 p-6">
          <div className="font-mono text-xs text-gray-600 mb-3">METHODOLOGY</div>
          <p className="text-sm text-gray-400">
            Agile development, Layered system architecture, full-stack CI/CD, documentation-first approach
          </p>
        </div>
        <div className="border border-gray-800 bg-[#0a0a0a]/50 p-6">
          <div className="font-mono text-xs text-gray-600 mb-3">LEARNING</div>
          <p className="text-sm text-gray-400">
            Currently exploring: Advanced AI/LLM architectures, deep learning optimizations, and scalable cloud deployments
          </p>
        </div>
        <div className="border border-gray-800 bg-[#0a0a0a]/50 p-6">
          <div className="font-mono text-xs text-gray-600 mb-3">CORE FOCUS</div>
          <p className="text-sm text-gray-400">
            Bridging complex backend logic, machine learning, and intuitive frontend experiences
          </p>
        </div>
      </div>
    </div>
  );
}
