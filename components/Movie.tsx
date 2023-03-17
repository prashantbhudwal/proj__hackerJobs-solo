import Image from "next/image";

export function Movie({ state }: { state: string }) {
  const movieData = {
    thumbnailUrl: "/thumbnail.png",
    title: "Blade Runner",
    rating: "8.1",
    duration: "117 min",
    genre: "Action, Drama, Sci-fi",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque minus amet quod magni nihil facilis.",
  };

  const { thumbnailUrl, title, rating, duration, genre, description } =
    movieData;

  return (
    <div>
      <section>
        <Image
          src={thumbnailUrl}
          width={70}
          height={140}
          alt={"Movie Thumbnail"}
        />
      </section>
      <section>
        <div>
          <title>{title}</title>
          <>⭐️</>
          <p>{rating}</p>
        </div>
        <div>
          <p>{duration}</p>
          <p>{genre}</p>
          <button>{state === "added" ? "Remove" : "Watchlist"}</button>
        </div>
        <div>
          <p>{description}</p>
        </div>
      </section>
    </div>
  );
}

export default function MovieStorybook() {
  const states = ["added", "removed"];

  return (
    <div>
      {states.map((state) => (
        <Movie state={state} key={state} />
      ))}
    </div>
  );
}
