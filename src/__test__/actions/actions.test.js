import actions from '../../actions';
import ProductMock from '../../__mocks__/productMock';

describe('Actions', () => {
  test('AddToCart Action', () => {
    const payload = ProductMock;
    const expected = {
      type: 'ADD_TO_CART',
      payload,
    };
    expect(actions.addToCart(payload)).toEqual(expected);
  });
});
