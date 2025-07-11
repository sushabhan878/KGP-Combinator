import StartupCard, { StartupCardType } from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";
import { STARTUP_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
// import { auth } from "@/auth";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const query = (await searchParams).query;
  const params = { search: query || null }
  // const session = await auth()
  // console.log(session?.id)
  const { data: posts } = await sanityFetch({
    query: STARTUP_QUERY,
    params
  })
  return (
    <>
      <section className="w-full bg-primary min-h-[530px] flex pattern justify-center items-center flex-col py-10 px-6">
        <h1 className="uppercase bg-black px-6 py-3 font-workSans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5">Pitch Your Startup, <br />Connect with Entrepreneurs</h1>
        <p className="font-workSans font-medium mt-4 text-[20px] text-white max-w-3xl text-center break-words">Submit Ideas, Vote on Pitches, And Get Noticed in Virtual Comprtions.</p>
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
      <SanityLive />
    </>
  );
}
