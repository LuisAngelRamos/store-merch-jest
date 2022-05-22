// Travis sirve para validar los test en un entorno
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
global.fetch = require('jest-fetch-mock');
