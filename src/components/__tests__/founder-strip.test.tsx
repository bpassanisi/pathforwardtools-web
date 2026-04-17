import { render, screen } from '@testing-library/react'
import { FounderStrip } from '../founder-strip'

describe('FounderStrip', () => {
  it('renders founder name', () => {
    render(<FounderStrip />)
    expect(screen.getByText('Brandon Passanisi')).toBeInTheDocument()
  })

  it('renders location and context', () => {
    render(<FounderStrip />)
    expect(screen.getByText(/northern california/i)).toBeInTheDocument()
  })

  it('links to passante.io', () => {
    render(<FounderStrip />)
    const link = screen.getByRole('link', { name: /passante\.io/i })
    expect(link).toHaveAttribute('href', 'https://passante.io')
  })
})
