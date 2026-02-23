import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function SedhuramanPortfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-800">
      {/* Hero Section */}
      <section className="py-20 px-6 text-center max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold tracking-tight"
        >
          Sedhuraman S
        </motion.h1>
        <p className="mt-4 text-lg md:text-xl text-slate-600">
          Software Developer | React Enthusiast | CSE Student
        </p>
        <p className="mt-6 text-base text-slate-500 max-w-2xl mx-auto">
          Passionate Computer Science student focused on building interactive
          applications and responsive web interfaces using Java, C#, and React.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Button asChild className="rounded-2xl px-6">
            <a href="https://github.com/Sedhuraman-1876" target="_blank">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </a>
          </Button>
          <Button asChild variant="outline" className="rounded-2xl px-6">
            <a
              href="https://www.linkedin.com/in/sedhuraman-s-08b9a8307"
              target="_blank"
            >
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </a>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">About Me</h2>
          <p className="text-slate-600 leading-relaxed">
            I am currently pursuing B.E in Computer Science and Engineering.
            I enjoy solving logical problems and building real-time interactive
            applications. I am continuously improving my frontend skills with
            React and focusing on writing clean, maintainable, and scalable code.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="rounded-2xl shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Programming</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>Java</li>
                  <li>C#</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="rounded-2xl shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Web Development</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="rounded-2xl shadow-sm hover:shadow-md transition">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Bricks to Break</h3>
                <p className="text-slate-600 mb-4">
                  Interactive brick-breaking game developed using Unity and C#.
                </p>
                <a
                  href="https://github.com/Sedhuraman-1876/Bricks-to-Break"
                  target="_blank"
                  className="text-blue-600 text-sm font-medium"
                >
                  View on GitHub →
                </a>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-sm hover:shadow-md transition">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Ping Pong</h3>
                <p className="text-slate-600 mb-4">
                  Classic ping pong game implementing movement control and
                  physics logic.
                </p>
                <a
                  href="https://github.com/Sedhuraman-1876/Ping-Pong"
                  target="_blank"
                  className="text-blue-600 text-sm font-medium"
                >
                  View on GitHub →
                </a>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-sm hover:shadow-md transition">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Personal Portfolio</h3>
                <p className="text-slate-600 mb-4">
                  Responsive portfolio website built using React to showcase my
                  skills and projects.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Contact</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-slate-600">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> 2023peccs484@gmail.com
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> 9626752342
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Sedhuraman S. All rights reserved.
      </footer>
    </div>
  );
}
