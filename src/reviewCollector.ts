/**
 * 评论收集类
 */
import ProductReview from './productReview';

export default class ReviewCollector {
  public reviewList: ProductReview[] = [];
  public productList: string[] = [];

  public addReview(productReview: ProductReview) {
    this.reviewList.push(productReview);
    let found = false;
    for (let i = 0; i < this.productList.length; i++) {
      if (this.productList[i] === productReview.name) {
        found = true;
        break;
      }
    }
    if (!found) {
      this.productList.push(productReview.name);
    }
  }
  /**
   * 获取产品好评论数量
   * @param productName 产品名称
   */
  public getNumGoodReviews(productName: string): number {
    let count = 0;
    for (let i = 0; i < this.reviewList.length; i++) {
      if (
        this.reviewList[i].name === productName &&
        this.reviewList[i].review.includes('好')
      ) {
        count++;
      }
    }
    return count;
  }
}
