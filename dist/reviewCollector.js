export default class ReviewCollector {
    constructor() {
        this.reviewList = [];
        this.productList = [];
    }
    addReview(productReview) {
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
    getNumGoodReviews(productName) {
        let count = 0;
        for (let i = 0; i < this.reviewList.length; i++) {
            if (this.reviewList[i].name === productName &&
                this.reviewList[i].review.includes('好')) {
                count++;
            }
        }
        return count;
    }
}
