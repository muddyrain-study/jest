import ProductReview from '../productReview';

const mockName = jest
  .spyOn(ProductReview.prototype, 'name', 'get')
  .mockImplementation(() => {
    return '产品A';
  });

const mockReview = jest
  .spyOn(ProductReview.prototype, 'review', 'get')
  .mockImplementation(() => {
    return '好用';
  });

const mockStatic = jest
  .spyOn(ProductReview, 'showInfo')
  .mockImplementation(() => {
    return '这是一个产品评论类';
  });

test('ProductReview', () => {
  const p = new ProductReview('', '');
  const result = ProductReview.showInfo();

  expect(mockStatic).toHaveBeenCalled();
  expect(result).toBe('这是一个产品评论类');

  expect(p.name).toBe('产品A');
  expect(p.review).toBe('好用');
  expect(mockName).toHaveBeenCalled();
  expect(mockReview).toHaveBeenCalled();
});
