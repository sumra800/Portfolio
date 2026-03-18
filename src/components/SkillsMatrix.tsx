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
      { name: 'Go', context: 'High-performance APIs, microservices' },
      { name: 'Rust', context: 'Security-critical systems, CLI tools' },
      { name: 'Node.js/TypeScript', context: 'Event-driven architectures' },
      { name: 'Python', context: 'Data pipelines, automation' }
    ]
  },
  {
    layer: 'Data Layer',
    description: 'Storage, caching, and querying',
    skills: [
      { name: 'PostgreSQL', context: 'Primary relational DB, complex queries' },
      { name: 'Redis', context: 'Caching, pub/sub, rate limiting' },
      { name: 'MongoDB', context: 'Document storage, flexible schemas' },
      { name: 'Apache Kafka', context: 'Event streaming, log aggregation' }
    ]
  },
  {
    layer: 'Infrastructure',
    description: 'DevOps and cloud architecture',
    skills: [
      { name: 'Kubernetes', context: 'Container orchestration, auto-scaling' },
      { name: 'Docker', context: 'Containerization, local dev environments' },
      { name: 'AWS', context: 'Lambda, ECS, RDS, S3, CloudFront' },
      { name: 'Terraform', context: 'Infrastructure as code' }
    ]
  },
  {
    layer: 'Security',
    description: 'Authentication, encryption, compliance',
    skills: [
      { name: 'OAuth2/OIDC', context: 'Identity protocols, SSO integration' },
      { name: 'JWT/JWE', context: 'Token-based auth, encryption' },
      { name: 'TLS/mTLS', context: 'Transport security, certificate management' },
      { name: 'OWASP', context: 'Security best practices, penetration testing' }
    ]
  },
  {
    layer: 'Observability',
    description: 'Monitoring, logging, alerting',
    skills: [
      { name: 'Prometheus', context: 'Metrics collection, time-series DB' },
      { name: 'Grafana', context: 'Dashboards, visualization' },
      { name: 'ELK Stack', context: 'Log aggregation and search' },
      { name: 'OpenTelemetry', context: 'Distributed tracing' }
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
            Test-driven development, CI/CD pipelines, code review culture, documentation-first approach
          </p>
        </div>
        <div className="border border-gray-800 bg-[#0a0a0a]/50 p-6">
          <div className="font-mono text-xs text-gray-600 mb-3">LEARNING</div>
          <p className="text-sm text-gray-400">
            Currently exploring: WebAssembly, eBPF, distributed consensus algorithms
          </p>
        </div>
        <div className="border border-gray-800 bg-[#0a0a0a]/50 p-6">
          <div className="font-mono text-xs text-gray-600 mb-3">CERTIFICATIONS</div>
          <p className="text-sm text-gray-400">
            AWS Solutions Architect, HEC Generative AI Certificate
          </p>
        </div>
      </div>
    </div>
  );
}
