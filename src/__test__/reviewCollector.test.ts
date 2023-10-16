import ReviewCollector from '../reviewCollector';
import ProductReview from '../productReview';

jest.mock('../productReview', () => {
  return jest.fn().mockImplementation((name: string, review: string) => {
    return {
      name,
      review,
    };
  });
});

describe('ReviewCollector', () => {
  let collect: ReviewCollector;
  beforeEach(() => {
    collect = new ReviewCollector();
  });
  test('addReview', () => {
    const review = new ProductReview('产品A', '好用');
    collect.addReview(review);

    expect(collect.getNumGoodReviews('产品A')).toBe(1);
    expect(collect['productList']).toContain('产品A');
  });
  test('getNumGoodReviews', () => {
    const review = new ProductReview('产品A', '好用');
    const review2 = new ProductReview('产品A', '一般');
    const review3 = new ProductReview('产品B', '一般');
    collect.addReview(review);
    collect.addReview(review2);
    collect.addReview(review3);

    expect(collect.getNumGoodReviews('产品A')).toBe(1);
    expect(collect.getNumGoodReviews('产品B')).toBe(0);
  });
});
