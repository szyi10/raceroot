import NewsCard from "./NewsCard"

import { news1, news2, news3, news4, news5, news6 } from "../../assets/images"
import { loadMore } from "../../assets/icons"
const DUMMY_NEWS = [
  {
    id: 1,
    tag: "Formula 1",
    title: "Aston Martin reveals revamped AMR24 F1 2024 car",
    subtitle:
      "Aston Martin has revealed its new AMR24 Formula 1 car, which it said is a “strong evolution” of its 2023 challenger.",
    img: news1,
    createdAt: "12/02/2024",
    minutesToRead: 3,
    isBigNews: false,
  },
  {
    id: 2,
    tag: "Endurance",
    title: "Porsche triumphs after epic duel with Cadillac",
    subtitle:
      "Porsche Penske Motorsport won the 62nd edition of the Daytona 24 Hours after a thrilling battle for victory with Cadillac.",
    img: news2,
    createdAt: "29/01/2024",
    minutesToRead: 3,
    isBigNews: false,
  },
  {
    id: 3,
    tag: "WRC",
    title: "FIA launches WRC fan survey",
    subtitle:
      "The FIA has commissioned a World Rally Championship fan survey to collect feedback as the governing body continues to evaluate the future pathway for the series.",
    img: news3,
    createdAt: "9/02/2024",
    minutesToRead: 3,
    isBigNews: false,
  },
  {
    id: 4,
    tag: "Formula 1",
    title: "RB reveals its new VCARB 01 Formula 1 car",
    subtitle:
      "The rebranded RB team has revealed its 2024 Formula 1 car at a special event on the Las Vegas Boulevard.",
    img: news4,
    createdAt: "9/02/2024",
    minutesToRead: 3,
    isBigNews: false,
  },
  {
    id: 5,
    tag: "Formula 1",
    title:
      "Red Bull launches investigation following F1 boss Horner allegations",
    subtitle:
      "Red Bull says it has launched an independent investigation into allegations against its Formula 1 team's boss Christian Horner.",
    img: news5,
    createdAt: "8/02/2024",
    minutesToRead: 3,
    isBigNews: false,
  },
  {
    id: 6,
    tag: "Endurance",
    title: "Aston Martin expects almost 30 new Vantage GT3s racing in 2024",
    subtitle:
      "Aston Martin expects to have approaching 30 of its Vantage GT3s racing in the new-for-2024 evo specification by the end of the year.",
    img: news6,
    createdAt: "12/02/2024",
    minutesToRead: 3,
    isBigNews: false,
  },
]

const NewsGrid = () => {
  return (
    <section className="max-container px-4 ">
      <div className=" grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {DUMMY_NEWS.map((news) => (
          <NewsCard key={news.id} data={news} />
        ))}
      </div>
      <button className="button-primary mx-auto my-6">
        <img
          src={loadMore}
          alt="Load more"
          width={20}
          height={20}
          className="mr-2"
        />
        Load more
      </button>
    </section>
  )
}

export default NewsGrid
