export type Author = {
  id: string;
  name: string;
};

export type Publisher = {
  id: string;
  name: string;
};

export type Book = {
  id: string;
  name: string;
  publisher: Publisher;
  authors: Author[];
};

export type BookProps = {
  book: Book;
};
