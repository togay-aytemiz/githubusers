import { RiExternalLinkLine } from "react-icons/ri";

const Card = ({ item }) => {
  const { login, id, avatar_url, html_url } = item;
  return (
    <div>
      <div className="flex flex-col gap-3 justify-center items-center p-6 bg-white mb-4 rounded-lg ">
        <img
          src={avatar_url}
          alt=""
          className="w-36 rounded-full mb-4 shadow-lg"
        />
        <p className="text-lg font-bold">{login}</p>
        <p className=" bg-purple-100 text-purple-800 p-1 px-4 font-semibold rounded-full">
          {id}
        </p>
        <hr />
        <button>
          <div className="flex flex-row justify-center items-center gap-2 p-3 border rounded-md">
            <a href={html_url} target="_blank">
              See Profile
            </a>

            <RiExternalLinkLine size={20} />
          </div>
        </button>
      </div>
    </div>
  );
};
export default Card;
