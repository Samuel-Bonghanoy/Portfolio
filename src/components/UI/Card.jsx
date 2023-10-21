function Card({ project }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={`../../../public/${project.imageUrl}`} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {project.title}
          {project.new && <div className="badge badge-secondary">NEW</div>}
        </h2>
        <p>{project.description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-primary">{project.tagOne}</div>
          <div className="badge badge-accent">{project.tagTwo}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
