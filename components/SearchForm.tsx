import Form from "next/form"
import SearchFormReset from "./SearchFormReset"
import { SearchIcon } from "lucide-react"
const SearchForm = ({ query }: { query?: string }) => {

    return (
        <Form action="/" scroll={false} className="max-w-3xl w-full min-h-[80px] bg-white border-[5px] border-black rounded-[80px] text-[24px] mt-8 px-5 flex flex-row items-center gap-5 search-form">
            <input type="text" name="query" defaultValue={query} className="flex-1 font-bold placeholder:font-semibold placeholder:text-black-100 w-full h-auto outline-none" placeholder="Search Startups" />
            <div className="flex gap-2">
                {query && (
                    <SearchFormReset />
                )}
                <button type="submit" className="size-[50px] rounded-full bg-black flex justify-center items-center !important text-white">
                    <SearchIcon />
                </button>
            </div>
        </Form>
    )
}

export default SearchForm
