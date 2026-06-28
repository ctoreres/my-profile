import Navbar from '@/components/layout/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-primary-light">
      <Navbar />

      <main className="flex flex-col items-center w-full">
        {/* HERO SECTION */}
        <section
          id="hero"
          className="w-full min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold text-primary-dark mb-6 tracking-tight">
              Hi, I'm <span className="text-accent-green">Christan Toreres</span>.
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-accent-blue mb-8">
              AI & Machine Learning Engineer
            </h2>
            <p className="text-lg md:text-xl text-secondary-dark mb-10 max-w-3xl mx-auto leading-relaxed">
              I specialize in architecting intelligent data pipelines and training high-performing machine learning models. I transform massive datasets into actionable insights and deploy AI-driven solutions to the web.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#projects"
                className="w-full sm:w-auto px-8 py-4 bg-accent-green text-primary-light rounded-full font-bold text-lg hover:bg-accent-blue transition-colors duration-300 shadow-lg"
              >
                View Projects
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-accent-muted text-primary-dark rounded-full font-bold text-lg hover:border-primary-dark hover:bg-primary-dark hover:text-primary-light transition-all duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section
          id="about"
          className="w-full min-h-screen flex items-center justify-center bg-secondary-light px-4 sm:px-6 lg:px-8 py-20"
        >
          <div className="max-w-5xl mx-auto w-full">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-12 text-center">
              About Me
            </h2>
            <div className="text-lg text-secondary-dark leading-relaxed mb-12 text-center max-w-4xl mx-auto">
              <p className="mb-6">
                I am a Computer Engineering student at the Polytechnic University of the Philippines with a strong specialization in Data Science and Artificial Intelligence.
              </p>
              <p>
                My core expertise lies in building robust predictive models, engineering complex data features, and automating analytical pipelines. From tuning hyper-parameters to deploying real-time risk assessment interfaces, I am passionate about solving complex problems through data.
              </p>
            </div>
            
            {/* Tech Stack Chips Placeholder */}
            <div className="flex flex-wrap justify-center gap-3">
              {['Python', 'Scikit-learn', 'XGBoost', 'TypeScript', 'Next.js', 'Streamlit'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-primary-light text-primary-dark rounded-full font-medium shadow-sm border border-accent-muted/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section
          id="projects"
          className="w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
        >
          <div className="max-w-7xl mx-auto w-full">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-16 text-center">
              Featured Projects
            </h2>
            
            {/* Projects Grid Placeholder */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="bg-secondary-light rounded-2xl p-6 shadow-md border border-accent-muted/20 hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video bg-accent-muted/30 rounded-xl mb-6 flex items-center justify-center text-primary-dark font-medium">
                  [Video Preview Placeholder]
                </div>
                <h3 className="text-2xl font-bold text-primary-dark mb-3">Financial Fraud Detection</h3>
                <div className="flex gap-2 mb-4">
                  <span className="text-xs font-semibold px-2 py-1 bg-accent-blue/10 text-accent-blue rounded-md">Machine Learning</span>
                  <span className="text-xs font-semibold px-2 py-1 bg-accent-blue/10 text-accent-blue rounded-md">Python</span>
                </div>
                <p className="text-secondary-dark">
                  Real-time risk assessment pipeline analyzing a 6.3M transaction dataset. Achieved 94% recall using Logistic Regression.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-secondary-light rounded-2xl p-6 shadow-md border border-accent-muted/20 hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video bg-accent-muted/30 rounded-xl mb-6 flex items-center justify-center text-primary-dark font-medium">
                  [Video Preview Placeholder]
                </div>
                <h3 className="text-2xl font-bold text-primary-dark mb-3">Performance Predictor</h3>
                <div className="flex gap-2 mb-4">
                  <span className="text-xs font-semibold px-2 py-1 bg-accent-blue/10 text-accent-blue rounded-md">Full-Stack</span>
                  <span className="text-xs font-semibold px-2 py-1 bg-accent-blue/10 text-accent-blue rounded-md">Next.js</span>
                </div>
                <p className="text-secondary-dark">
                  Automated data ingestion and hyperparameter tuning pipeline evaluating 7+ models to attain an 88.04% R² score.
                </p>
              </div>
              
              {/* Add more cards here later */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
