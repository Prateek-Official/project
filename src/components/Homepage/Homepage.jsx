import { Link } from "react-router";

const linksList = [
  { name: "Virtualization (or Windowing)", link: "virtualization" },
  { name: "Chips", link: "chips" },
  { name: "Autocomplete Search Bar", link: "searchbar" },
];

const Homepage = () => {
  return (
    <div className="py-10">
      <h1 className="text-3xl font-semibold text-center">Homepage</h1>
      <div className=" flex mt-10 justify-around">
        {linksList.map(({ name, link }) => {
          return (
            <Link
              key={name}
              to={"/" + link}
              className="border p-4 w-xs text-center hover:bg-black hover:text-white rounded-3xl"
            >
              {name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Homepage;
