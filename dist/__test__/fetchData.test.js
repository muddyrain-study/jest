var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import tools from '../tools';
import 'jest-fetch-mock';
const { fetchData } = tools;
describe('测试fetchData', () => {
    // 测试返回的数据是否有对应的属性
    test('测试返回的数据是否有对应的属性', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield fetchData(1);
        expect(result).toHaveProperty('userId');
        expect(result).toHaveProperty('id');
        expect(result).toHaveProperty('title');
        expect(result).toHaveProperty('completed');
    }));
    // 测试返回的数据对应的值是否正确
    test('测试返回的数据对应的值是否正确', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield fetchData(1);
        expect(result).toEqual({
            userId: 1,
            id: 1,
            title: 'delectus aut autem',
            completed: false,
        });
    }));
});
