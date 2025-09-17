import Form from "next/form";
import { Search } from "lucide-react";
import SearchFormReset from "./SearchFormReset";

const SearchForm = ({ query }: { query?: string }) => {

  return (
    <Form action="/" className="search-form" scroll={false}>
      <input
        type="text"
        placeholder="Search Startups"
        name="query"
        className="search-input text-xl pl-5"
        defaultValue={query}
      />
      {query && <SearchFormReset />}
      <button type="submit" className="search-btn text-white">
        <Search className="size-5" />
      </button>
    </Form>
  );
};

export default SearchForm;
