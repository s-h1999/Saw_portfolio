// 1. Define the data array outside the component
const projectData = [
  {
    id: 1,
    title: "My Portfolio Website",
    description: "This is a personal portfolio project built with React and Tailwind CSS. It showcases my skills, experiences, and projects in a modern and responsive design.",
    imageSrc: "/slo.png",
    imageAlt: "Project Preview: My Portfolio Website",
    // add links here later:
    liveLink: "https://saw-portfolio.vercel.app/",
    // repoLink: "https://github.com/your/repo",
  },
  {
    id: 2,
    title: "School Management Systemm (in progress)",
    description: "A comprehensive web application for managing school operations, including student enrollment, attendance tracking, and grade management.",
    imageSrc: "/slo.png", // Replace with a different image source later
    imageAlt: "Project Preview: School Management System",
    liveLink: "#",
  },
  {
    id: 3,
    title: "Teacher Campass (in progress)",
    description: "A plafrom for teachers to manage their classes, assignments, and student progress. Developed using MERN stack with JWT authentication and RESTful APIs.",
    imageSrc: "/slo.png", // Replace with a different image source later
    imageAlt: "Project Preview: Task Management App",
    liveLink: "#",
  },
];

// 2. Define a reusable component using props
function ProjectItem({ title, description, imageSrc, imageAlt, liveLink }) {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-6 bg-neutral-800 p-4 rounded-lg border border-neutral-700 border-3 mb-6">

      {/* Image (uniform for all projects) */}
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-28 h-28 md:w-32 md:h-32 object-cover rounded-lg mb-4 md:mb-0"
      />

      {/* Text beside the photo */}
      <div className="text-center md:text-left">
        <h3 className="text-xl text-gray-300 font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 mb-3">{description}</p>

        {/* Live link button */}
        {liveLink && (
          <a
            href={liveLink || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-sky-600 text-gray-100 rounded hover:bg-sky-800 transition-colors text-sm font-medium"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
// 3. Refactor the main component to use the data and the reusable component
export default function Project() {
  return (
    <section id="PROJECT" className="p-4">
      <div className="max-w-3xl mx-auto px-1 lg:px-0">

        <h2 className="text-gray-100 text-xl md:text-3xl font-medium relative mb-12">
          What I Create

          <div className="pt-2">
            <span className="p-b absolute left-0 w-35 md:w-45 lg:w-48 h-[3px] bg-neutral-600">
              <span className="block h-full bg-sky-500 w-1/3"></span>
            </span>
          </div>
        </h2>

        {/* Map over the array to render the project items */}
        {projectData.map((project) => (
          <ProjectItem
            key={project.id} // Essential for list rendering in React
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            imageAlt={project.imageAlt}
            liveLink={project.liveLink}
          />
        ))}

        {/* Note: I removed the 'mb-6' from the last item in the map, 
             which was present in your original structure's last item's parent div.
             The ProjectItem component now handles 'mb-6', which may result in an 
             extra margin at the bottom of the section. If you need to remove the 
             bottom margin on the very last item, you would need a slightly more 
             complex conditional className check within the map. */}
      </div>
    </section>
  );
}