import { ProfileVisual } from './ProfileVisual';

export function IntroModule() {
  return (
    <div className="max-w-6xl w-full relative px-4">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-32 items-start lg:items-center justify-between">
        <div className="flex-1">
          {/* System Label */}
          <div className="font-mono text-xs text-gray-600 mb-8 tracking-wider">
            SYS_INIT → PORTFOLIO_v2.4.1
          </div>

          {/* Main Statement */}
          <div className="relative">
            <h1 className="text-6xl lg:text-7xl leading-[0.95] mb-8 max-w-4xl">
              I design and build
              <span className="block mt-2">
                <span className="text-lime-400">scalable systems</span>
              </span>
              <span className="block mt-2">
                with an obsession for
              </span>
              <span className="block mt-2">
                performance & security.
              </span>
            </h1>

            {/* Annotations */}
            <div className="absolute -left-4 -top-8 hidden xl:block">
              <div className="font-mono text-[10px] text-gray-700 border-l border-gray-800 pl-4 space-y-1">
                <div>CORE_ENG:STABLE</div>
                <div>SEC_PROTOCOL:ACTIVE</div>
              </div>
            </div>
          </div>

          {/* Metadata Footer */}
          <div className="mt-16 flex flex-wrap gap-8 font-mono text-xs text-gray-600">
            <div>
              <div className="text-gray-500 mb-1">ROLE</div>
              <div className="text-gray-300">Software Engineer</div>
            </div>
            <div>
              <div className="text-gray-500 mb-1">LOCATION</div>
              <div className="text-gray-300">Lahore, Pakistan</div>
            </div>
            <div>
              <div className="text-gray-500 mb-1">STATUS</div>
              <div className="text-lime-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-lime-400 rounded-full animate-pulse"></span>
                Available for select projects
              </div>
            </div>
          </div>
        </div>

        {/* Profile Visual Integration */}
        <div className="relative flex justify-center lg:justify-end">
          <ProfileVisual />
        </div>
      </div>

      {/* Flow Indicator */}
      <div className="mt-24 font-mono text-xs text-gray-700 flex items-center gap-2">
        <span>SCROLL TO EXPLORE</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
}