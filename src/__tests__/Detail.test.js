import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Detail from '../components/Detail';
import store from '../redux/configureStore';

describe('test Detail component', () => {
  test('should contain a section element', () => {
    render(
      <Provider store={store}>
        <Router>
          <Detail />
        </Router>
      </Provider>,
    );
    return expect(screen.getByTestId('section')).toBeInTheDocument;
  });
});

describe('test with jest snapshot', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Detail />
          </Router>
        </Provider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
