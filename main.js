import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, ExternalLink, FileText, Github, Linkedin, Mail, User } from "lucide-react"

export default function PortfolioPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <User className="h-8 w-8 rounded-full bg-primary/10 p-1 text-primary" />
          <span className="text-xl font-bold">Sampreetha Shivalingu</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#about" className="text-sm font-medium hover:text-primary">
            About
          </Link>
          <Link href="#skills" className="text-sm font-medium hover:text-primary">
            Skills
          </Link>
          <Link href="#projects" className="text-sm font-medium hover:text-primary">
            Projects
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild variant="outline" size="sm" className="hidden md:inline-flex">
            <Link href="/resume.pdf" target="_blank">
              <FileText className="mr-2 h-4 w-4" />
              Resume
            </Link>
          </Button>
          <Button asChild size="sm">
            <Link href="#contact">Contact Me</Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

function HeroSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Hi, I'm Sampreetha Shivalingu</h1>
              <h2 className="text-2xl font-medium text-muted-foreground">Software Engineer</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                I'm passionate about building cloud-native and DevOps enabled automation solutions that support AI/ML and Software applications. My focus is on creating efficient, reliable systems that solve real-world problems
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="#projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative aspect-square overflow-hidden rounded-full border-8 border-muted w-[280px] h-[280px] md:w-[350px] md:h-[350px]">
              <Image
                src="/placeholder.svg?height=400&width=400"
                width={400}
                height={400}
                alt="Sampreetha Shivalingu"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillsSection() {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">Skills</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">My Technical Expertise</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Frontend Development",
              description: "React, TypeScript, Tailwind CSS, HTML5, CSS3, JavaScript",
              icon: <Code className="h-10 w-10 text-primary" />,
            },
            {
              title: "Backend Development",
              description: "Node.js, REST APIs, GraphQL",
              icon: <Code className="h-10 w-10 text-primary" />,
            },
            {
                title: "AI/ML",
                description: "python, Scikit-learn, TensorFlow, Pandas, Numpy, LangChain, OpenAI, crewAI",
                icon: <Code className="h-10 w-10 text-primary" />,
              },
            {
              title: "DevOps & Tools",
              description: "Git, GitHub, CI/CD, Docker, AWS, Jenkins",
              icon: <Code className="h-10 w-10 text-primary" />,
            },
            {
              title: "Testing",
              description: "Jest, TDD Methodology",
              icon: <Code className="h-10 w-10 text-primary" />,
            },
           
            {
              title: "Soft Skills",
              description: "Communication, Problem Solving, Team Collaboration, Project Management",
              icon: <Code className="h-10 w-10 text-primary" />,
            },
          ].map((skill, index) => (
            <div key={index} className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">{skill.icon}</div>
              <h3 className="text-xl font-bold">{skill.title}</h3>
              <p className="text-center text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Projects</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">My Recent Work</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Here are some of the projects I've worked on recently. Check out my GitHub for more.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
          {[
        
            {
              title: "Real time lying posture detection",
              description:
                "An application that determines lying posture using arduino nano and machine learning",
              image: "/placeholder.svg?height=300&width=500",
              tags: ["machine learning", "arduino nano"],
              liveLink: "#",
              githubLink: "#",
            },
            {
              title: "AI Blog Generator",
              description:
                "An application that uses crewAI to generate blog for cloud applications",
              image: "/placeholder.svg?height=300&width=500",
              tags: ["OpenAI API", "python", "AWS"],
              liveLink: "#",
              githubLink: "#",
            },
          ].map((project, index) => (
            <div key={index} className="flex flex-col overflow-hidden rounded-lg border shadow-sm">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between p-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex gap-2">
                  <Button asChild variant="outline" size="sm">
                    <Link href={project.githubLink} target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  {/* <Button asChild size="sm">
                    <Link href={project.liveLink} target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">Contact</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get In Touch</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Have a project in mind or just want to chat? Feel free to reach out!
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-3xl gap-8 py-12 md:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="h-6 w-6 text-primary" />
              <span>sampreetha.s1997@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Linkedin className="h-6 w-6 text-primary" />
              <span>linkedin.com/in/sampreetha-shivalingu</span>
            </div>
            <div className="flex items-center space-x-3">
              <Github className="h-6 w-6 text-primary" />
              <span>github.com/sampreethas</span>
            </div>
            
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <form className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Name
                </label>
                <input
                  id="name"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Your email"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Your message"
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="w-full border-t py-6">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <p className="text-center text-sm text-muted-foreground md:text-left">
          © {new Date().getFullYear()} Sampreetha Shivalingu. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link href="#" className="text-muted-foreground hover:text-foreground">
            <span className="sr-only">GitHub</span>
            <Github className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
