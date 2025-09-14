import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Download, Terminal, ArrowLeft } from "lucide-react";

export function DocsPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <Button variant="ghost" size="sm" asChild className="mr-4">
            <a href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </a>
          </Button>
          <h1 className="text-4xl font-bold">Fortress Documentation</h1>
        </div>

        <div className="grid gap-8">
          {/* Quick Start */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Terminal className="h-6 w-6 mr-3 text-fortress-primary" />
                Quick Start
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-fortress-muted">
                Get Fortress running in minutes with Docker. Perfect for development and testing.
              </p>
              
              <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                <div className="mb-2"># Pull the latest Fortress image</div>
                <div className="text-fortress-primary">docker pull fortress/platform:latest</div>
                <br />
                <div className="mb-2"># Run Fortress with default configuration</div>
                <div className="text-fortress-primary">docker run -p 8080:8080 fortress/platform:latest</div>
              </div>

              <p className="text-sm text-fortress-muted">
                Access your Fortress instance at <code className="bg-muted px-2 py-1 rounded">http://localhost:8080</code>
              </p>
            </CardContent>
          </Card>

          {/* Docker Compose */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code className="h-6 w-6 mr-3 text-fortress-accent" />
                Production Setup
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-fortress-muted">
                Deploy Fortress in production with persistent storage and load balancing.
              </p>
              
              <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-2">
                <div className="text-fortress-muted"># docker-compose.yml</div>
                <div><span className="text-blue-400">version:</span> <span className="text-green-400">'3.8'</span></div>
                <div><span className="text-blue-400">services:</span></div>
                <div className="pl-4">
                  <div><span className="text-blue-400">fortress:</span></div>
                  <div className="pl-4">
                    <div><span className="text-blue-400">image:</span> <span className="text-green-400">fortress/platform:latest</span></div>
                    <div><span className="text-blue-400">ports:</span></div>
                    <div className="pl-4"><span className="text-green-400">- "8080:8080"</span></div>
                    <div><span className="text-blue-400">environment:</span></div>
                    <div className="pl-4">
                      <div><span className="text-green-400">- FORTRESS_DB_HOST=postgres</span></div>
                      <div><span className="text-green-400">- FORTRESS_REDIS_HOST=redis</span></div>
                    </div>
                    <div><span className="text-blue-400">volumes:</span></div>
                    <div className="pl-4"><span className="text-green-400">- ./data:/app/data</span></div>
                  </div>
                  <div><span className="text-blue-400">postgres:</span></div>
                  <div className="pl-4">
                    <div><span className="text-blue-400">image:</span> <span className="text-green-400">postgres:15</span></div>
                    <div><span className="text-blue-400">environment:</span></div>
                    <div className="pl-4">
                      <div><span className="text-green-400">- POSTGRES_DB=fortress</span></div>
                      <div><span className="text-green-400">- POSTGRES_PASSWORD=secure_password</span></div>
                    </div>
                  </div>
                  <div><span className="text-blue-400">redis:</span></div>
                  <div className="pl-4">
                    <div><span className="text-blue-400">image:</span> <span className="text-green-400">redis:7-alpine</span></div>
                  </div>
                </div>
              </div>

              <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                <div className="mb-2"># Start the full stack</div>
                <div className="text-fortress-primary">docker-compose up -d</div>
              </div>
            </CardContent>
          </Card>

          {/* Configuration */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Download className="h-6 w-6 mr-3 text-fortress-accent" />
                Available Images
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Core Platform</h4>
                  <code className="text-sm bg-muted px-2 py-1 rounded block mb-2">
                    fortress/platform:latest
                  </code>
                  <p className="text-sm text-fortress-muted">Main application with API gateway and UI</p>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Model Runtime</h4>
                  <code className="text-sm bg-muted px-2 py-1 rounded block mb-2">
                    fortress/runtime:latest
                  </code>
                  <p className="text-sm text-fortress-muted">Optimized runtime for model inference</p>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Llama 2 7B</h4>
                  <code className="text-sm bg-muted px-2 py-1 rounded block mb-2">
                    fortress/llama2-7b:latest
                  </code>
                  <p className="text-sm text-fortress-muted">Ready-to-use Llama 2 7B model</p>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Code Llama</h4>
                  <code className="text-sm bg-muted px-2 py-1 rounded block mb-2">
                    fortress/codellama:latest
                  </code>
                  <p className="text-sm text-fortress-muted">Code generation and completion model</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card>
            <CardHeader>
              <CardTitle>Next Steps</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Configure Models</h4>
                  <p className="text-sm text-fortress-muted mb-3">
                    Add your own models or fine-tune existing ones
                  </p>
                  <Button variant="outline" size="sm">
                    Model Guide
                  </Button>
                </div>
                
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">API Reference</h4>
                  <p className="text-sm text-fortress-muted mb-3">
                    Integrate with OpenAI-compatible endpoints
                  </p>
                  <Button variant="outline" size="sm">
                    API Docs
                  </Button>
                </div>
                
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Security Setup</h4>
                  <p className="text-sm text-fortress-muted mb-3">
                    Configure authentication and compliance
                  </p>
                  <Button variant="outline" size="sm">
                    Security Guide
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}