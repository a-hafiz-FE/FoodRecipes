import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { extractAuthorsList } from "./utils";
import DropDown from "./DropDown";

const Quotes = () => {
  const initialQuotes = useSelector((state) => state.quotes.quotes);
  const [quotes, setQuotes] = useState(initialQuotes);

  const [authors, setAuthors] = useState(extractAuthorsList(quotes));
  const [selectedAuthor, setSelectedAuthor] = useState("All");
  const [text, setText] = useState("");

  // extract authors list
  // map through quotes and get authors list array
  // create authors dropdown

  // step2: filter quotes by author and have an "all" filter

  const updateQuotes = (authorName) => {
    setSelectedAuthor(authorName);
    const filteredQuotes =
      authorName == "All"
        ? initialQuotes
        : initialQuotes.filter((quote) => {
            return quote.author == authorName;
          });
    setQuotes(filteredQuotes);
  };

  const handleInput = (text) => {
    if (text.length == 0) {
      updateQuotes(selectedAuthor);
      return;
    }
    // need to iterate through the array to find the text inside each object
    // const searchedQuotes = quotes?.find((_mappedQuote) =>
    //   _mappedQuote?.quote.includes(text),
    // );

    // handel or save the orignal copy of quotes
    // const searchedQuotes = quotes.filter((_mappedQuote) =>
    //   _mappedQuote.quote?.includes(text),
    // );
    // --Problem: quotes stays empty if no quotes found doesn't reset even if input valid
    // searchedQuotes filter based on input it iteriats over the state array then sets the array empty if no text found
    // initialQuotes is the original full quotes

    // text is valid => setQuotes quotes.filter
    // text is invalid => setquotes []
    // text id valid again => setQuotes quotes.filter but quotes is empty

    if (initialQuotes.map((quote) => quote.quote.includes(text))) {
      updateQuotes(selectedAuthor);

      const searchedQuotes = quotes.filter((quote) =>
        quote.quote.includes(text),
      );

      if (!searchedQuotes) {
        setQuotes([]);
        return;
      }

      setQuotes(searchedQuotes);
    }
  };

  useEffect(() => {
    const t = text.trim().toLowerCase();

    // const filtered = initialQuotes.filter((q) => {
    //   const authorMatch =
    //     selectedAuthor === "All" || q.author === selectedAuthor;

    //   const textMatch = t === "" || (q.quote ?? "").toLowerCase().includes(t);

    //   return authorMatch && textMatch;
    // });

    const filtered = initialQuotes
      .filter((q) => selectedAuthor == "All" || q.author == selectedAuthor)
      .filter((q) => t.length == 0 || q.quote.trim().toLowerCase().includes(t));

    console.log(filtered);
    setQuotes(filtered);
  }, [initialQuotes, selectedAuthor, text]);

  const initialValue = 0;
  const totalLikes = initialQuotes.reduce((total, q) => {
    return total + q.totalLikes;
  }, initialValue);

  return (
    <div className="bg-gray-400 px-20 py-20">
      {/* drop down with authors */}
      <div className="flex justify-between">
        <DropDown
          authors={authors}
          value={selectedAuthor}
          onChange={setSelectedAuthor}
        />

        <p>{totalLikes}</p>

        <input
          type="text"
          className="bg-white/95 rounded-2xl px-2"
          placeholder="Search..."
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-3 gap-8 py-20">
        {quotes.length > 0 ? (
          quotes?.map((quote) => (
            <div
              key={quote.id}
              className="text-black bg-gray-200/40 p-4 h-70 rounded-2xl flex flex-col justify-between gap-4"
            >
              <p>{quote.quote}</p>
              <p>{quote.author}</p>
            </div>
          ))
        ) : (
          <div>no data</div>
        )}
      </div>
    </div>
  );
};

export default Quotes;
