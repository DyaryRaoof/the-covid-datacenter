import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';

describe('test Header component', () => {
  test('should contain a link element', () => {
    render(
      <Router>
        <Header />
      </Router>,
    );
    return expect(screen.getByRole('link')).toBeInTheDocument;
  });
});

describe('test with jest snapshot', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <Header />
        </Router>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
