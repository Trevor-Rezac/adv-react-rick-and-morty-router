import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App'
describe('App tests', () => {
  it('should render a list of characters. upon clicking character links, user should see an image of the character', async () => {
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

    screen.debug()
    const link = await screen.findByText('Rick Sanchez');
    
    userEvent.click(link);

    await screen.findByAltText('image of Rick Sanchez')
  })
})