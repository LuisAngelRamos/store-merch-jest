import reducer from '../../reducers';
import ProductMock from '../../__mocks__/productMock';

describe('Reducer', () => {
  test('Retornar initial State', () => {
    expect(reducer({}, '')).toEqual({});
  });
  test('ADD_TO_CART', () => {
    const initialState = {
      cart: [
        {
          id: '1',
          image: 'https://arepa.s3.amazonaws.com/camiseta.png',
          title: 'Camiseta',
          price: 25,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
      ],
    };

    const payload = ProductMock;
    const action = {
      tyoe: 'ADD_TO_CART',
      payload,
    };
    const expected = {
      cart: [ProductMock],
    };

    expect(reducer(initialState, action)).toEqual(expected);
  });
});
