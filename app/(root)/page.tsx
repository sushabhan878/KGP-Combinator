import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const query = (await searchParams).query;
  const posts = [{
    _createdAt: Date.now(),
    views: 55,
    author: {
      _id: 1,
      name: "Elon Musk",
    },
    _id: 1,
    description: "First startup post",
    image: "https://tse4.mm.bing.net/th/id/OIP.UUD5ia8fx--kBVTt-Qu81wHaE8?rs=1&pid=ImgDetMain",
    category: "Robots",
    title: "We Robot"
  }]
  return (
    <>
      <section className="w-full bg-primary min-h-[530px] pattern flex justify-center items-center flex-col py-10 px-6">
        <h1 className="uppercase bg-black px-6 py-3 font-workSans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5;
">Pitch Your Startup, <br />Connect with Entrepreneurs</h1>
        <p className="font-medium mt-4 text-[20px] text-white max-w-3xl text-center break-words">Submit Ideas, Vote on Pitches, And Get Noticed in Virtual Comprtions.</p>
        <SearchForm query={query} />
      </section>
      <section className="px-6 py-10 max-w-7xl mx-auto">
        <p className="font-workSans font-semibold text-[30px] text-black">
          {query ? `Search Results for "${query}"` : "All Startups"}
        </p>
        <ul className="mt-7 grid md:grid-cols-3 sm:grid-cols-2 gap-5">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType, index: number) => (
              <StartupCard key={post._id} post={post} />
            ))
          ) : (
            <p className="text-black-100 text-sm font-normal">No Startup Found</p>
          )}
        </ul>
      </section>
    </>
  );
}
