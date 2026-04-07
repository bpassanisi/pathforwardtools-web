import { render, screen } from '@testing-library/react'
import { SiteFooter } from '../site-footer'

describe('SiteFooter', () => {
  it('renders PathForward Tools™', () => {
    render(<SiteFooter />)
    expect(screen.getByText('PathForward Tools™')).toBeInTheDocument()
  })

  it('renders copyright with Passante attribution', () => {
    render(<SiteFooter />)
    expect(screen.getByText(/A Passante brand/i)).toBeInTheDocument()
    expect(screen.getByText(/© 2026/i)).toBeInTheDocument()
  })

  it('links to pathforwardmind.com', () => {
    render(<SiteFooter />)
    expect(screen.getByRole('link', { name: /mind/i })).toHaveAttribute(
      'href',
      'https://pathforwardmind.com'
    )
  })
})
