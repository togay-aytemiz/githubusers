const Search = ({ getUserList, setInput, input, setPage, page }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Please enter a username");
      return;
    }
    getUserList(input, page);
    setInput("");
    setPage(1);
  };

  return (
    <div>
      <div>
        <form className="flex flex-row gap-3" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search any github user..."
            className="p-3 rounded-md shadow-sm font-light outline-none w-full"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="p-3 bg-purple-500 text-white rounded-md shadow-sm sm:w-[200px]">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};
export default Search;
