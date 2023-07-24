import Nav from "@/components/Nav";
import Results from "@/components/Results";
import requests from "@/utils/requests";

const fetchMovies = async (genre) => {
  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchSciFi.url
    }`
  );

  const data = request.json();
  return data;
};

export default async function Page({ params, searchParams }) {
  const genre = searchParams?.genre;
  const data = await fetchMovies(genre);
  const { results } = data;

  return (
    <div>
      <div className="text-center mx-4">
        <h1 className="text-fuchsia-900 font-extrabold text-[60px]">
          MovieHub
        </h1>
        <p className="mb-20 mx-auto text-center font-medium">
          Welcome to MovieHub where your favorite movies are one click away.
        </p>
      </div>

      <Nav />
      <Results results={results} />
    </div>
  );
}
