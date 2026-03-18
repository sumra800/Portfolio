export function AboutFlow() {
  const nodes = [
    {
      label: 'INPUT',
      title: 'Problem Space',
      content: 'I thrive on complex technical challenges, systems that need to handle hundreds of requests, data pipelines that must never fail, and architectures that scale gracefully.'
    },
    {
      label: 'PROCESS',
      title: 'Design Philosophy',
      content: 'Every line of code is a trade-off. I believe in simplicity over cleverness, observability over assumptions, and building systems that future engineers will understand.'
    },
    {
      label: 'OUTPUT',
      title: 'Engineering Impact',
      content: 'I enjoy building systems that go beyond prototypes and function as complete, usable products. My work focuses on developing full-stack web applications where the front end, backend, and data layer work together to solve real problems. My goal is to build reliable systems, write maintainable code, and continuously improve the way products are engineered.'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="mb-24">
        <div className="font-mono text-xs text-gray-600 mb-4 tracking-wider">
          01_ABOUT → SYSTEM_OVERVIEW
        </div>
        <h2 className="text-5xl lg:text-6xl">
          How I approach
          <span className="block text-lime-400 mt-2">engineering problems</span>
        </h2>
      </div>

      {/* Flow Nodes */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
        {/* Connection Lines */}
        <div className="hidden lg:block absolute top-8 left-0 right-0 h-[1px] bg-gradient-to-r from-gray-800 via-lime-400/20 to-gray-800"></div>

        {nodes.map((node, index) => (
          <div key={index} className="relative">
            {/* Node Point */}
            <div className="absolute left-0 -top-2 w-4 h-4 bg-lime-400 rounded-full border-4 border-[#0a0a0a] z-10 hidden lg:block"></div>

            {/* Node Content */}
            <div className="border border-gray-800 bg-[#0a0a0a]/50 p-8 hover:border-lime-400/30 transition-all duration-300">
              <div className="font-mono text-xs text-lime-400 mb-4 tracking-wider">
                {node.label}
              </div>
              <h3 className="text-2xl mb-4">{node.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {node.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Timeline Fragments */}
      <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <div className="font-mono text-xs text-gray-600 mb-4">BACKGROUND</div>
          <div className="space-y-4 text-gray-400">
            <p>My journey into programming began during my Computer Science degree, where I discovered how powerful software can be in solving real problems.</p>
            <p>I focused on distributed systems and security, realizing that the most interesting challenges often lie where complexity and scale meet.</p>
            <p>Now, I architect systems that handle real-world complexity, from financial transactions to real-time data processing.</p>
          </div>
        </div>

        <div>
          <div className="font-mono text-xs text-gray-600 mb-4">PRINCIPLES</div>
          <div className="space-y-3">
            {[
              'Measure everything, assume nothing',
              'Optimize for readability first, performance second',
              'Security is not a feature, it\'s a foundation',
              'Fail fast, recover faster',
              'Documentation is love for future you'
            ].map((principle, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-1 h-1 bg-lime-400 rounded-full mt-2 flex-shrink-0"></div>
                <div className="text-gray-400">{principle}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
