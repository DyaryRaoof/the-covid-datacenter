import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../components/Home';
import store from '../redux/configureStore';

describe('test Home component', () => {
  test('should contain a image emelement', () => {
    render(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>,
    );
    return expect(screen.getByTestId('image')).toBeInTheDocument;
  });
});

describe('test with jest snapshot', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Home />
          </Router>
        </Provider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
