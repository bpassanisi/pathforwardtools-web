import { render, screen } from '@testing-library/react'
import { AppCards } from '../app-cards'

describe('AppCards', () => {
  it('renders all 6 app names', () => {
    render(<AppCards />)
    expect(screen.getByText('PathForward Intelligence')).toBeInTheDocument()
    expect(screen.getByText('PathForward Quantum')).toBeInTheDocument()
    expect(screen.getByText('PathForward for Men')).toBeInTheDocument()
    expect(screen.getByText('PathForward Mind')).toBeInTheDocument()
    expect(screen.getByText('PathForward Clear')).toBeInTheDocument()
    expect(screen.getByText('PathForward Family')).toBeInTheDocument()
  })

  it('renders correct status badges', () => {
    render(<AppCards />)
    expect(screen.getByText('Live')).toBeInTheDocument()
    expect(screen.getAllByText('Beta Soon')).toHaveLength(3)
    expect(screen.getByText('In Build')).toBeInTheDocument()
    expect(screen.getByText('Research')).toBeInTheDocument()
  })

  it('Intelligence card links to activate.sagetools.dev', () => {
    render(<AppCards />)
    const link = screen.getByRole('link', { name: /open app/i })
    expect(link).toHaveAttribute('href', 'https://activate.sagetools.dev')
  })

  it('non-live, non-research cards link to @passante for updates', () => {
    render(<AppCards />)
    const links = screen.getAllByRole('link', { name: /follow for updates/i })
    expect(links.length).toBeGreaterThan(0)
    links.forEach(link => {
      expect(link).toHaveAttribute('href', 'https://x.com/passante')
    })
  })
})
