import React from 'react';
import SearchInput from '../components/SearchInput';
import renderer from 'react-test-renderer';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('SearchInput: ', () => {
    it('renders correctly', () => {
      const tree = renderer.create(<SearchInput />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('calls props handler with input value method after click', () => {
        const value = 'Sydney';
        const onClick = jest.fn();   
        const searchInputWrapper = mount(<SearchInput _getWeather={onClick} _getPicture={onClick} />);
        const input = searchInputWrapper.find('input');
        const button = searchInputWrapper.find('button');

        input.simulate('change', { target: { value } });
        button.simulate('click');      
        
        expect(onClick).toBeCalledWith(value);          
      });
  });