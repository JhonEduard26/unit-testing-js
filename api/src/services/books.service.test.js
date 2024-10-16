const { generateManyBooks } = require('../data/books.fake');
const BooksService = require('./books.service');

const mockGetAll = jest.fn();
// const mongoLibStub = {
//   getAll: mockGetAll,
//   create: () => {},
// };

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},
})));

describe('test for BooksService', () => {
  let service;

  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe('test for getBooks', () => {
    it('should return an array of books', async () => {
      const fakeBooks = generateManyBooks();
      mockGetAll.mockResolvedValue(fakeBooks);

      const books = await service.getBooks({});
      console.log(books);
      expect(books.length).toBe(fakeBooks.length);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });

    it('should return one book', async () => {
      const fakeBooks = generateManyBooks(4);
      mockGetAll.mockResolvedValue(fakeBooks);

      const books = await service.getBooks({});
      console.log(books);
      expect(books[0].name).toBe(fakeBooks[0].name);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });
  });
});
