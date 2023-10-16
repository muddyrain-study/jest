/**
 * 产品评论类
 */

export default class ProductReview {
  private _name: string;
  private _review: string;

  constructor(name: string, review: string) {
    this._name = name;
    this._review = review;
  }

  get name() {
    return this._name;
  }
  get review() {
    return this._review;
  }

  static showInfo(): string {
    return '这是一个产品评论类';
  }
}
