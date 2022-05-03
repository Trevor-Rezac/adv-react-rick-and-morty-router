import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App'
describe('App tests', () => {
  it('should render a list of characters on load', async () => {
    render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
    )

    screen.getByText(/loading/i)

    await screen.findByText('Rick Sanchez')

    const headers = await screen.findAllByRole('heading', {
      level: 4
    })
    
    expect(headers.length).toEqual(20)
  })
})