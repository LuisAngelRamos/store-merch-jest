import getData from '../../utils/getData';
// En estos test se usa jest-fetch-mock para simular una llamada al api
describe('Fetch API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  test('Llamar a una API y retornar datos', () => {
    // Siimulacion de un fetch aqui contiene lo que deberia retornar la peticion
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
    // Se hace el fetch esperando simulado
    getData('https://google.com').then(response => {
      return expect(response.data).toEqual('12345');
    });

    expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
  });
});
