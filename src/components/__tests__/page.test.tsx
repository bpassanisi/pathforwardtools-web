import { render } from '@testing-library/react'
import Page from '../../app/page'

describe('Page', () => {
  it('renders without crashing', () => {
    const { container } = render(<Page />)
    expect(container.querySelector('main')).toBeTruthy()
  })
})
