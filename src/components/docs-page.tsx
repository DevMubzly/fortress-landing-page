import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CloudLightning, Download, Server, Key, Monitor, GitBranch, Copy, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

function CodeBlock({ children, language = "bash" }: { children: string; language?: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
        <code className="text-muted-foreground font-mono">{children}</code>
      </pre>
      <button
        onClick={copyToClipboard}
        className="copy-button"
        title="Copy to clipboard"
      >
        {copied ? (
          <CheckCircle className="h-4 w-4 text-fortress-accent" />
        ) : (
          <Copy className="h-4 w-4 text-muted-foreground hover:text-foreground" />
        )}
      </button>
    </div>
  );
}

export function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <CloudLightning className="h-8 w-8 text-fortress-primary" />
            <h1 className="text-4xl font-bold">Fortress Stack Documentation</h1>
          </div>
          <p className="text-xl text-fortress-muted">
            Deploy your private AI infrastructure in minutes
          </p>
        </div>

        {/* Quick Start */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Download className="h-6 w-6 text-fortress-primary" />
              Quick Start
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3">1. Clone the repository</h4>
              <CodeBlock>git clone https://github.com/your-org/fortress-stack.git</CodeBlock>
            </div>
            <div>
              <h4 className="font-semibold mb-3">2. Build and start all services</h4>
              <CodeBlock>{`cd fortress-stack
docker compose build
docker compose up`}</CodeBlock>
            </div>
            <div>
              <h4 className="font-semibold mb-3">3. Access your apps</h4>
              <ul className="text-muted-foreground space-y-2">
                <li>
                  <Badge>Model Server</Badge> <code className="bg-muted px-2 py-1 rounded">http://localhost:8000</code>
                </li>
                <li>
                  <Badge>API Backend</Badge> <code className="bg-muted px-2 py-1 rounded">http://localhost:5000</code>
                </li>
                <li>
                  <Badge>Demo Application</Badge> <code className="bg-muted px-2 py-1 rounded">http://localhost:1000</code>
                </li>
                <li>
                  <Badge>Admin Dashboard</Badge> <code className="bg-muted px-2 py-1 rounded">http://localhost:3000</code>
                </li>
                {/* <li>
                  <Badge>Grafana</Badge> <code className="bg-muted px-2 py-1 rounded">http://localhost:4000</code>
                </li>
                <li>
                  <Badge>Prometheus</Badge> <code className="bg-muted px-2 py-1 rounded">http://localhost:9090</code>
                </li> */}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">4. Test the platform</h4>
              <p>
                Open <code className="bg-muted px-2 py-1 rounded">http://localhost:1000</code> in your browser to interact with the Demo Application and test your AI platform.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Docker Compose */}
        {/* <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Server className="h-6 w-6 text-fortress-accent" />
              Production Deployment with Docker Compose
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              For production deployments, use Docker Compose with persistent storage and proper networking:
            </p>
            <CodeBlock language="yaml">{`version: '3.9'
    ...docker compose yaml...
    `}</CodeBlock>
          </CardContent>
        </Card> */}

        {/* API Usage */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Key className="h-6 w-6 text-fortress-primary" />
              API Usage
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3">Generate Text</h4>
              <CodeBlock>{`curl -X POST http://localhost:8000/generate \\
  -H "Content-Type: application/json" \\
  -d '{"prompt": ["What is the capital of France?"], "max_new_tokens": 32}'`}</CodeBlock>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Check Model Server Health</h4>
              <CodeBlock>{`curl http://localhost:8000/health`}</CodeBlock>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Example: Generate Text with API Key</h4>
              <CodeBlock>{`curl -X POST http://localhost:5000/generate \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: <your-api-key>" \\
  -d '{"prompt": ["What is the capital of France?"], "max_new_tokens": 32}'`}</CodeBlock>
              <p className="text-muted-foreground mt-2">
                Replace <code>{"<your-api-key>"}</code> with your actual API key. You can create an API key via the Admin Dashboard at <code>http://localhost:3000</code>.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Available Models */}
        {/* <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Monitor className="h-6 w-6 text-fortress-accent" />
              Available Models
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">TinyLlama 1.1B</h4>
                    <Badge variant="secondary">Default</Badge>
                  </div>
                  <CodeBlock>docker pull TinyLlama/TinyLlama-1.1B-Chat-v1.0</CodeBlock>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">Custom Model</h4>
                    <Badge variant="outline">Local</Badge>
                  </div>
                  <CodeBlock>Place your model files in <code>model-server/models/</code></CodeBlock>
                </div>
              </div>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">Llama 3</h4>
                    <Badge variant="outline">Popular</Badge>
                  </div>
                  <CodeBlock>docker pull meta-llama/Llama-3-8B</CodeBlock>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">Mistral 7B</h4>
                    <Badge variant="outline">Supported</Badge>
                  </div>
                  <CodeBlock>docker pull mistralai/Mistral-7B-v0.2</CodeBlock>
                </div>
              </div>
            </div>
          </CardContent>
        </Card> */}

        {/* Environment Variables */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Server className="h-6 w-6 text-fortress-primary" />
              Configuration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Configure Fortress Stack using environment variables:
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-muted rounded">
                <code className="text-sm">MODEL_BASE_DIR</code>
                <span className="text-sm text-muted-foreground">Path to model files (model-server)</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded">
                <code className="text-sm">DB_URL</code>
                <span className="text-sm text-muted-foreground">Database connection string (fastapi)</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded">
                <code className="text-sm">MODEL_SERVER_URL</code>
                <span className="text-sm text-muted-foreground">Model server endpoint (fastapi)</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}