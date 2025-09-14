import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Download, Server, Key, Monitor, GitBranch, Copy, CheckCircle } from "lucide-react";
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
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Shield className="h-8 w-8 text-fortress-primary" />
            <h1 className="text-4xl font-bold">Fortress Documentation</h1>
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
              <h4 className="font-semibold mb-3">1. Pull the Docker image</h4>
              <CodeBlock>docker pull fortress-ai/core:latest</CodeBlock>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">2. Run Fortress</h4>
              <CodeBlock>{`docker run -d \\
  --name fortress \\
  -p 8080:8080 \\
  -v fortress-data:/data \\
  fortress-ai/core:latest`}</CodeBlock>
            </div>

            <div>
              <h4 className="font-semibold mb-3">3. Access the dashboard</h4>
              <p className="text-muted-foreground">
                Open your browser and navigate to <code className="bg-muted px-2 py-1 rounded">http://localhost:8080</code>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Docker Compose */}
        <Card className="mb-8">
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
            <CodeBlock language="yaml">{`version: '3.8'
services:
  fortress:
    image: fortress-ai/core:latest
    ports:
      - "8080:8080"
    volumes:
      - fortress-data:/data
      - ./config:/config
    environment:
      - FORTRESS_ENV=production
      - FORTRESS_API_KEYS_FILE=/config/api-keys.yml
    restart: unless-stopped
  
  postgres:
    image: postgres:15
    environment:
      POSTGRES_DB: fortress
      POSTGRES_USER: fortress
      POSTGRES_PASSWORD: your-secure-password
    volumes:
      - postgres-data:/var/lib/postgresql/data
    restart: unless-stopped

volumes:
  fortress-data:
  postgres-data:`}</CodeBlock>
          </CardContent>
        </Card>

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
              <h4 className="font-semibold mb-3">Generate API Key</h4>
              <CodeBlock>{`curl -X POST http://localhost:8080/api/keys \\
  -H "Content-Type: application/json" \\
  -d '{"name": "my-app-key", "permissions": ["read", "write"]}'`}</CodeBlock>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Use OpenAI-compatible endpoint</h4>
              <CodeBlock>{`curl http://localhost:8080/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer your-api-key" \\
  -d '{
    "model": "llama-3.1-8b",
    "messages": [
      {"role": "user", "content": "Hello, Fortress!"}
    ]
  }'`}</CodeBlock>
            </div>
          </CardContent>
        </Card>

        {/* Available Models */}
        <Card className="mb-8">
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
                    <h4 className="font-semibold">Llama 3.1 8B</h4>
                    <Badge variant="secondary">Latest</Badge>
                  </div>
                  <CodeBlock>docker pull fortress-ai/llama-3.1-8b:latest</CodeBlock>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">Code Llama 7B</h4>
                    <Badge variant="outline">Code</Badge>
                  </div>
                  <CodeBlock>docker pull fortress-ai/codellama-7b:latest</CodeBlock>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">Mistral 7B</h4>
                    <Badge variant="outline">Popular</Badge>
                  </div>
                  <CodeBlock>docker pull fortress-ai/mistral-7b:latest</CodeBlock>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">Phi-3 Mini</h4>
                    <Badge variant="outline">Lightweight</Badge>
                  </div>
                  <CodeBlock>docker pull fortress-ai/phi3-mini:latest</CodeBlock>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

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
              Configure Fortress using environment variables:
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-muted rounded">
                <code className="text-sm">FORTRESS_PORT</code>
                <span className="text-sm text-muted-foreground">Server port (default: 8080)</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded">
                <code className="text-sm">FORTRESS_MODELS_PATH</code>
                <span className="text-sm text-muted-foreground">Path to model files</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded">
                <code className="text-sm">FORTRESS_API_KEYS_FILE</code>
                <span className="text-sm text-muted-foreground">API keys configuration file</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded">
                <code className="text-sm">FORTRESS_LOG_LEVEL</code>
                <span className="text-sm text-muted-foreground">Logging level (debug, info, warn, error)</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}