import { render, screen } from '@testing-library/react'
import { AppCards } from '../app-cards'

describe('AppCards', () => {
  it('renders all 5 app names', () => {
    render(<AppCards />)
    expect(screen.getByText('PathForward Mind')).toBeInTheDocument()
    expect(screen.getByText('PathForward Clear')).toBeInTheDocument()
    expect(screen.getByText('PathForward for Men')).toBeInTheDocument()
    expect(screen.getByText('PathForward Quantum')).toBeInTheDocument()
    expect(screen.getByText('PathForward Intelligence')).toBeInTheDocument()
  })

  it('renders 5 Coming Soon badges', () => {
    render(<AppCards />)
    const badges = screen.getAllByText('Coming Soon')
    expect(badges).toHaveLength(5)
  })

  it('renders @passante follow links for coming-soon apps', () => {
    render(<AppCards />)
    const links = screen.getAllByRole('link', { name: /follow @passante/i })
    expect(links.length).toBeGreaterThan(0)
    links.forEach(link => {
      expect(link).toHaveAttribute('href', 'https://x.com/passante')
    })
  })
})
