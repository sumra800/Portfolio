import { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function ContactTerminal() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('sumram083@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl w-full">
      {/* Terminal Header */}
      <div className="border border-gray-800 bg-[#0a0a0a]/50">
        {/* Terminal Bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-gray-700"></div>
            <div className="w-3 h-3 rounded-full bg-gray-700"></div>
            <div className="w-3 h-3 rounded-full bg-gray-700"></div>
          </div>
          <div className="flex-1 text-center font-mono text-xs text-gray-600">
            contact.sh
          </div>
        </div>

        {/* Terminal Content */}
        <div className="p-8 font-mono text-sm space-y-4">
          <div className="text-gray-600">
            <span className="text-lime-400">$</span> ./init_contact.sh
          </div>

          <div className="text-gray-400">
            → Initializing connection protocol...
          </div>

          <div className="pt-4 space-y-6">
            <div>
              <div className="text-gray-600 mb-2">STATUS:</div>
              <div className="text-gray-300">
                Available for challenging backend projects, technical advisory, and architecture consultations.
              </div>
            </div>

            <div>
              <div className="text-gray-600 mb-2">CONTACT_METHODS:</div>
              <div className="space-y-3">
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-3 text-lime-400 hover:text-lime-300 transition-colors group"
                >
                  <Mail className="w-4 h-4" />
                  <span>[EMAIL_ADDRESS]</span>
                  <span className="text-xs text-gray-600 group-hover:text-gray-500">
                    {copied ? '✓ copied' : '[ click to copy ]'}
                  </span>
                </button>

                <a
                  href="https://github.com/sumra800"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-lime-400 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>github.com/sumra800</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/sumra-umar-1616b6252/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-lime-400 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>linkedin.com/in/sumra-umar-1616b6252/</span>
                </a>
              </div>
            </div>

            <div>
              <div className="text-gray-600 mb-2">RESPONSE_TIME:</div>
              <div className="text-gray-400">
                Usually within 24 hours. For urgent matters, mark subject with [URGENT].
              </div>
            </div>

            <div className="pt-4 border-t border-gray-800">
              <div className="text-gray-600">
                <span className="text-lime-400">$</span> <span className="animate-pulse">_</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 text-center font-mono text-xs text-gray-700">
        Designed & engineered with precision • 2024

      </div>
    </div>
  );
}
