const BooksService = require('./books.service');

const dataFake = [
  {
    _id: '5f5b986f6f6b9854f4a4c4f4',
    title: 'The Pragmatic Programmer',
  },
  {
    _id: '5f5b986f6f6b9854f4a4c4f5',
    title: 'Clean Code',
  },
];

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
      mockGetAll.mockResolvedValue(dataFake);

      const books = await service.getBooks({});
      console.log(books);
      expect(books.length).toBe(2);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });

    it('should return one book', async () => {
      mockGetAll.mockResolvedValue([{
        _id: '6f5b986f6f6b9854f4a4c4f4',
        title: 'JavaScript The Good Parts',
      }]);

      const books = await service.getBooks({});
      console.log(books);
      expect(books[0].title).toBe('JavaScript The Good Parts');
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });
  });
});
