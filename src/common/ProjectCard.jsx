const ProjectCard = ({ img ,name, desc, link}) => {
  return (
    <a href={link} className="flex flex-col justify-center items-center hover:hover">
        <img src={img} alt={name} className="bg-white rounded-3xl" />
        <h3 className="text-xl lg:text-2xl tracking-wider font-medium mt-2">{name}</h3>
        <p className="text-lg font-light tracking-widest">{desc}</p>
    </a>
  )
}

export default ProjectCard