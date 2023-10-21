import SendToMobileIcon from "@mui/icons-material/SendToMobile";

function Card({ project }) {
  return (
    <div className="rounded-md w-96 bg-maindark shadow-xl flex flex-col text-mainwhite hover:scale-[1.03] transition-all duration-300 hover:shadow-gray-400">
      <div className="h-52 bg">
        <img
          src={`../../../public/static/${project.imageUrl}`}
          alt="App Logo"
          className="object-fit w-full h-full"
        />
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {project.title}
          {project.new && (
            <div className="badge bg-crimson text-mainwhite h-full">NEW</div>
          )}
        </h2>
        <p>{project.description}</p>
        <div className="card-actions justify-end">
          <a href={project.repo}>
            <SendToMobileIcon
              sx={{
                width: "2rem",
                height: "2rem",
                fill: "#f4f4f4",
                "&:hover": { fill: "#961418" },
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
