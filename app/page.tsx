import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Github, Linkedin, Mail, GraduationCap, ArrowUpRight } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="text-sm font-medium tracking-tight">
              Navneet Yadav
            </Link>
            <div className="hidden md:flex items-center gap-8 text-sm">
              <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">about</Link>
              <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">projects</Link>
              <Link href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">experience</Link>
              <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="container mx-auto px-4 md:px-6 pt-32 pb-24 md:pt-48 md:pb-32">
        <div className="max-w-5xl">
          <div className="mb-4 text-sm text-muted-foreground">AI / ML & Agentic Systems</div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 leading-[0.95]">Navneet Yadav</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl leading-relaxed">
            Dual-degree AI/ML and Data Science student building end-to-end machine learning and agentic AI systems from
            RAG pipelines and LLM-powered analytics to production-grade FastAPI services.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="gap-2">
              <Link href="#projects">View Work <ArrowUpRight className="h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-border">
        <div className="container mx-auto px-4 md:px-6 py-24 md:py-32">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight sticky top-24">About</h2>
            </div>
            <div className="lg:col-span-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                I am pursuing a <span className="text-foreground font-medium">B.Tech in Computer Science (AI & ML)</span>
                at KIET Group of Institutions alongside a <span className="text-foreground font-medium">BS in Data Science</span>
                from IIT Madras.
              </p>
              <p>
                My work focuses on designing and deploying real-world AI systems — including agentic workflows,
                LLM-powered analytics engines, and real-time ML applications — with an emphasis on performance,
                interpretability, and scalability.
              </p>
              <p>
                I am particularly interested in building systems from first principles, optimizing inference latency,
                and integrating AI into production environments rather than isolated prototypes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="border-t border-border bg-muted/20">
        <div className="container mx-auto px-4 md:px-6 py-24 md:py-32">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">Selected work spanning agentic AI, LLM systems, and machine learning from scratch.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Link href="https://github.com/Naimishomar/MockPrep.ai" target="_blank" rel="noopener noreferrer" className="transform transition-transform duration-300 hover:scale-102 hover:shadow-lg">
              <Card className="p-8 border-border/50 ">
              
                <h3 className="text-2xl font-semibold mb-3 flex items-center">mockprep.ai
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  Real-time AI voice interview simulator with dynamic question generation, interruption handling, and
                  post-interview feedback analysis.
                </p>
                <p className="text-sm text-muted-foreground">React · Flask · Gemini API · ElevenLabs · Web Speech API</p>
                
              </Card>
            </Link>
            <Link href="https://github.com/navneetkumaryadav207001/QuickML" target="_blank" rel="noopener noreferrer" className="transform transition-transform duration-300 hover:scale-102 hover:shadow-lg">
              <Card className="p-8 border-border/50">
                <h3 className="text-2xl font-semibold mb-3 flex items-center">QuickML
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  Machine learning library built from scratch implementing classical and neural models including CNNs,
                  RNNs, LSTMs, Hopfield Networks, and LeNet.
                </p>
                <p className="text-sm text-muted-foreground">NumPy · PyTorch · Matplotlib</p>
              </Card>
            </Link>
            <Link href="https://huggingface.co/spaces/NavneetYadav207002/Confidence" target="_blank" rel="noopener noreferrer" className="transform transition-transform duration-300 hover:scale-102 hover:shadow-lg">
              <Card className="p-8 border-border/50">
                <h3 className="text-2xl font-semibold mb-3 flex items-center">Confidence Prediction Model
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </h3>
                <p className="text-muted-foreground mb-4">
                  Computer vision system predicting confidence levels from live webcam input using a CNN built on ResNet.
                </p>
                <p className="text-sm text-muted-foreground">PyTorch · OpenCV · Hugging Face Spaces</p>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <section id="experience" className="border-t border-border">
        <div className="container mx-auto px-4 md:px-6 py-24 md:py-32">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight sticky top-24">Experience</h2>
            </div>
            <div className="lg:col-span-8 space-y-12">
              <div>
                <h3 className="text-2xl font-semibold">LLM Intern — IIT Madras </h3><span className="text-muted-foreground not-italic">
  @ Sudha Gopal Krishnan Brain Centre
</span>
                <p className="text-sm text-muted-foreground mb-3">Aug 2025 – Dec 2025</p>
                <p className="text-muted-foreground leading-relaxed">
                  Contributed to agentic AI systems for large-scale research workflows, built CDN-integrated AI
                  assistants, enhanced conversational systems for neuroscience research, and developed FastAPI-based
                  analytics dashboards with integrated MCP chatbots.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-border bg-muted/20">
        <div className="container mx-auto px-4 md:px-6 py-24 md:py-32 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let’s Connect</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Open to research collaborations, internships, and discussions around AI systems and applied machine learning.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild><Link href="mailto:navneetyadaviitbombay@gmail.com"><Mail className="h-5 w-5" /></Link></Button>
            <Button asChild variant="outline"><Link href="https://github.com/navneetkumaryadav207001"><Github className="h-5 w-5" /></Link></Button>
            <Button asChild variant="outline"><Link href="https://www.linkedin.com/in/navneet-yadav-602b2a281"><Linkedin className="h-5 w-5" /></Link></Button>
          </div>
        </div>
      </section>
    </div>
  )
}