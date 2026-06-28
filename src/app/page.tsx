import Navbar from '@/components/layout/Navbar';
import TechStack from '@/components/sections/TechStack';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import FadeIn from '@/components/ui/FadeIn';

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-primary transition-colors duration-300">
      <Navbar />

      <main className="flex flex-col items-center w-full overflow-x-hidden">
        {/* HERO SECTION */}
        <section
          id="hero"
          className="w-full min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl text-center">
            <FadeIn delay={100}>
              <h1 className="text-5xl md:text-7xl font-extrabold text-text-secondary mb-6 tracking-tight">
                Hi, I'm <span className="text-accent-green">Christan Toreres</span>.
              </h1>
            </FadeIn>
            <FadeIn delay={300}>
              <h2 className="text-2xl md:text-3xl font-semibold text-accent-blue mb-8">
                AI & Machine Learning Engineer
              </h2>
            </FadeIn>
            <FadeIn delay={500}>
              <p className="text-lg md:text-xl text-text-primary mb-10 max-w-3xl mx-auto leading-relaxed">
                I specialize in architecting intelligent data pipelines and training high-performing machine learning models. I transform massive datasets into actionable insights and deploy AI-driven solutions to the web.
              </p>
            </FadeIn>
            <FadeIn delay={700}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#projects"
                  className="w-full sm:w-auto px-8 py-4 bg-accent-green text-bg-primary rounded-full font-bold text-lg hover:bg-accent-blue transition-colors duration-300 shadow-lg"
                >
                  View Projects
                </a>
                <a
                  href="/resume.pdf"
                  download="Christan_Toreres_Resume.pdf"
                  className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-border-subtle text-text-secondary rounded-full font-bold text-lg hover:border-text-secondary hover:bg-text-secondary hover:text-bg-primary transition-all duration-300 text-center"
                >
                  Download Resume
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section
          id="about"
          className="w-full py-20 flex flex-col items-center justify-center bg-bg-secondary transition-colors duration-300"
        >
          <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold text-text-secondary mb-12 text-center">
                About Me
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="text-lg text-text-primary leading-relaxed text-center">
                <p className="mb-6">
                  I am a Computer Engineering student at the Polytechnic University of the Philippines with a strong specialization in Data Science and Artificial Intelligence.
                </p>
                <p>
                  My core expertise lies in building robust predictive models, engineering complex data features, and automating analytical pipelines. From tuning hyper-parameters to deploying real-time risk assessment interfaces, I am passionate about solving complex problems through data.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* TECH STACK SECTION (Extracted to its own section below About Me) */}
        <TechStack />

        {/* PROJECTS SECTION */}
        <Projects />

        {/* CONTACT SECTION */}
        <Contact />
      </main>

      {/* Minimal Footer */}
      <footer className="w-full py-8 bg-bg-primary text-center border-t border-border-subtle/20">
        <p className="text-text-primary text-sm">
          &copy; {new Date().getFullYear()} Christan Jireh Toreres. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
