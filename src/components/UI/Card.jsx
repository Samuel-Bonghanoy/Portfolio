function Card({ project }) {
  return (
    <div className="rounded-md w-96 bg-maindark shadow-xl flex flex-col">
      <div className="h-52 bg">
        <img
          src={`../../../public/${project.imageUrl}`}
          alt="Shoes"
          className="object-fit h-full"
        />
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {project.title}
          {project.new && <div className="badge bg-crimson">NEW</div>}
        </h2>
        <p>{project.description}</p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
}

export default Card;
