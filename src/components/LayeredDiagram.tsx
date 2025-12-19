import image_547f43680088def885d634463c109e49882e4464 from 'figma:asset/547f43680088def885d634463c109e49882e4464.png';
import image_afdcba2789fdf402b078be633ec69b0ad37bacef from 'figma:asset/afdcba2789fdf402b078be633ec69b0ad37bacef.png';
import newEacLogo from 'figma:asset/86d84d5926b5b62d51dfed53b05ec7b8edaed70d.png';
import { Sparkles, Cloud, Layers, Settings, Workflow, Package, Bot, Shield, Plug } from 'lucide-react';
import codeIcon from "figma:asset/a1d379aeee90dcd29d8547d31deb1979479509dc.png";
import cursorLogo from "figma:asset/bdc17287d7af698bb57079772292ff2152d9a22b.png";
import copilotLogo from "figma:asset/675f77f930cb80e700d4dc12637d1d14b817d2cd.png";
import windsurfLogo from "figma:asset/87d8070d490b2b5ec65b3e09e989781cf7d515de.png";
import devinLogo from "figma:asset/97d11e93dbf0fbf9b7371cc34240b7993fa1b3aa.png";
import codexLogo from "figma:asset/2e5554e4ed8c2b0fb48ee5d512a9b7a81e878c8e.png";
import azureLogo from "figma:asset/e477d8a89649b5f394417a1fd8b850acbacd1db6.png";
import denoLogo from "figma:asset/8fc90a24ec5f5e817385fafec20cc1b848e08005.png";
import kubernetesLogo from "figma:asset/1050f00fa9b6f9d84c57cae9810275ef849582be.png";

export function LayeredDiagram() {
  return (
    <div className="w-full max-w-5xl">
      <div className="text-center mb-12">
        <h1 className="text-white text-3xl mb-2">Everything as Code</h1>
        <p className="text-gray-400">Modern AI-native software orchestration and deployment</p>
      </div>

      {/* Top Layer - AI Code Generation */}
      <div className="relative mb-6">
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-xl">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-blue-500/10 p-2 rounded-lg">
              <Sparkles className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h3 className="text-white">AI Code Generation Tools</h3>
              <p className="text-gray-400 text-sm mt-1">
                Cursor, Copilot, Codex, Windsurf, Devin
              </p>
            </div>
          </div>
          
          {/* Logos */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <img src={cursorLogo} alt="Cursor" className="h-8 object-contain" />
            <img src={copilotLogo} alt="Copilot" className="h-8 object-contain" />
            <img src={codexLogo} alt="Codex" className="h-8 object-contain" />
            <img src={windsurfLogo} alt="Windsurf" className="h-8 object-contain" />
            <img src={devinLogo} alt="Devin" className="h-8 object-contain" />
          </div>
        </div>
        
        {/* Arrow */}
        <div className="flex justify-center py-3">
          <svg width="24" height="32" viewBox="0 0 24 32" className="text-gray-600">
            <line x1="12" y1="0" x2="12" y2="24" stroke="currentColor" strokeWidth="2" />
            <polygon points="12,32 18,22 6,22" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* Middle Layer - EaC Orchestration */}
      <div className="relative mb-6">
        <div className="bg-gray-900 border border-blue-500/30 rounded-xl p-8 shadow-2xl ring-1 ring-blue-500/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-500/10 p-2 rounded-lg">
              <img src={image_547f43680088def885d634463c109e49882e4464} alt="EaC" className="w-10 h-10 rounded-[0px] object-contain" />
            </div>
            <div>
              <h3 className="text-white text-xl">Everything as Code (EaC) Orchestration Layer</h3>
              <p className="text-gray-400 text-sm mt-1">Unified configuration and deployment orchestration</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Feature Card 1 */}
            <div className="bg-gray-950 border-l-2 border-purple-500 rounded-lg p-4 hover:bg-gray-900 transition-colors">
              <div className="flex items-start gap-3">
                <div className="bg-purple-500/10 p-2 rounded-lg">
                  <Settings className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-white text-sm mb-1">Declarative System Configuration</h4>
                  <p className="text-gray-500 text-xs">Define infrastructure, identity, and applications as code</p>
                </div>
              </div>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-gray-950 border-l-2 border-cyan-500 rounded-lg p-4 hover:bg-gray-900 transition-colors">
              <div className="flex items-start gap-3">
                <div className="bg-cyan-500/10 p-2 rounded-lg">
                  <Workflow className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-white text-sm mb-1">Runtime Composition</h4>
                  <p className="text-gray-500 text-xs">Assemble and configure runtimes dynamically</p>
                </div>
              </div>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-gray-950 border-l-2 border-green-500 rounded-lg p-4 hover:bg-gray-900 transition-colors">
              <div className="flex items-start gap-3">
                <div className="bg-green-500/10 p-2 rounded-lg">
                  <Package className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <h4 className="text-white text-sm mb-1">Deployment Context</h4>
                  <p className="text-gray-500 text-xs">Apply environment-specific deployment rules</p>
                </div>
              </div>
            </div>

            {/* Feature Card 4 */}
            <div className="bg-gray-950 border-l-2 border-orange-500 rounded-lg p-4 hover:bg-gray-900 transition-colors">
              <div className="flex items-start gap-3">
                <div className="bg-orange-500/10 p-2 rounded-lg">
                  <Bot className="w-4 h-4 text-orange-400" />
                </div>
                <div>
                  <h4 className="text-white text-sm mb-1">AI Agent Orchestration</h4>
                  <p className="text-gray-500 text-xs">Coordinate AI agents and workflows reliably</p>
                </div>
              </div>
            </div>

            {/* Feature Card 5 */}
            <div className="bg-gray-950 border-l-2 border-red-500 rounded-lg p-4 hover:bg-gray-900 transition-colors">
              <div className="flex items-start gap-3">
                <div className="bg-red-500/10 p-2 rounded-lg">
                  <Shield className="w-4 h-4 text-red-400" />
                </div>
                <div>
                  <h4 className="text-white text-sm mb-1">Multi-Tenant Governance</h4>
                  <p className="text-gray-500 text-xs">Enforce isolation, access control, and policies</p>
                </div>
              </div>
            </div>

            {/* Feature Card 6 */}
            <div className="bg-gray-950 border-l-2 border-blue-500 rounded-lg p-4 hover:bg-gray-900 transition-colors">
              <div className="flex items-start gap-3">
                <div className="bg-blue-500/10 p-2 rounded-lg">
                  <Plug className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white text-sm mb-1">MCP Integration</h4>
                  <p className="text-gray-500 text-xs">Expose system data and actions via Model Context Protocol</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Arrow */}
        <div className="flex justify-center py-3">
          <svg width="24" height="32" viewBox="0 0 24 32" className="text-gray-600">
            <line x1="12" y1="0" x2="12" y2="24" stroke="currentColor" strokeWidth="2" />
            <polygon points="12,32 18,22 6,22" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* Bottom Layer - Infrastructure */}
      <div>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="bg-gray-500/10 p-2 rounded-lg">
              <Cloud className="w-5 h-5 text-gray-400" />
            </div>
            <div>
              <h3 className="text-white">Infrastructure & Runtime Execution</h3>
              <p className="text-gray-400 text-sm mt-1">
                Azure, Edge, Deno Deploy, Containers, Serverless
              </p>
            </div>
          </div>
          
          {/* Logos */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <img src={azureLogo} alt="Azure" className="h-8 object-contain" />
            <img src={denoLogo} alt="Deno Deploy" className="h-8 object-contain" />
            <img src={kubernetesLogo} alt="Kubernetes" className="h-8 object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}