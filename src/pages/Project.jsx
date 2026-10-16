import projects from '../components/ProjectsData'

const Projects = () => {
  return (
    <main className="min-h-screen bg-white px-4 py-32 text-black lg:px-12">
      <div className="main-container">
        <h1 className="mb-8 font-heading text-4xl font-bold uppercase">
          Selected Projects
        </h1>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map(({ id, name, image, link }) => (
            <a
              key={id}
              href={link}
              className="group flex flex-col overflow-hidden rounded-2xl"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src={image}
                  alt={name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <span className="mt-4 font-heading text-lg uppercase leading-[1.4] lg:text-2xl">
                {name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Projects
