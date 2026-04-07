import { render, screen } from '@testing-library/react'
import { AttributionBridge } from '../attribution-bridge'

describe('AttributionBridge', () => {
  it('renders Passante brand attribution', () => {
    render(<AttributionBridge />)
    expect(screen.getByText('PathForward Tools is a Passante brand.')).toBeInTheDocument()
  })

  it('links to passante.io', () => {
    render(<AttributionBridge />)
    expect(screen.getByRole('link', { name: /passante\.io/i })).toHaveAttribute(
      'href',
      'https://passante.io'
    )
  })
})
