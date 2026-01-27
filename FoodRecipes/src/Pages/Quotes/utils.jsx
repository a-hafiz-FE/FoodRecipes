export function extractAuthorsList(quotes) {
  // login of extract
  const authors = [];
  quotes.map((quote) => {
    if (!authors.includes(quote.author)) {
      authors.push(quote.author);
    }
  });

  return authors;
}
