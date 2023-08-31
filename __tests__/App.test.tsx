import {render, screen} from '@testing-library/react-native';
import App from '../src/App';

test('render app correctly', () => {
  render(<App />);
  const text = screen.queryByText('Welcome to React Native');
  expect(text).toHaveTextContent('Welcome to React Native');
});
