import Card from "./Card";
import { FcSearch } from "react-icons/fc";

const CardList = ({ count, items, increasePage, decreasePage }) => {
  const handleIncrease = () => {
    increasePage();
  };

  const handleDecrease = () => {
    decreasePage();
  };

  return (
    <div>
      {count > 0 ? (
        <div className="flex sm:flex-row flex-col sm:justify-between justify-center items-center mt-5 mb-10 gap-5">
          <p>
            Total <span className="font-semibold">{count}</span> user found
          </p>
          {/* <div className="flex flex-row gap-3 items-center justify-end">
          <button
            className="p-3 bg-white rounded shadow-sm"
            onClick={handleDecrease}
          >
            Previous
          </button>
          <button
            className="p-3 bg-white rounded shadow-sm"
            onClick={handleIncrease}
          >
            Next
          </button>
        </div> */}
        </div>
      ) : (
        <div className="flex flex-row gap-2 items-center justify-center my-3">
          <FcSearch size={24} />

          <p>Please type username to see results...</p>
        </div>
      )}

      <div className=" grid sm:grid-cols-3 gap-4">
        {items?.map((item) => {
          return <Card key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};
export default CardList;
