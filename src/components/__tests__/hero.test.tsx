import { render, screen } from '@testing-library/react'
import { Hero } from '../hero'

describe('Hero', () => {
  it('renders primary headline', () => {
    render(<Hero />)
    expect(screen.getByText('Done standing still.')).toBeInTheDocument()
  })

  it('renders subhead', () => {
    render(<Hero />)
    expect(
      screen.getByText('PathForward Tools builds apps for people navigating what comes next.')
    ).toBeInTheDocument()
  })

  it('has Explore CTA that scrolls to app cards', () => {
    render(<Hero />)
    const link = screen.getByRole('link', { name: /explore the apps/i })
    expect(link).toHaveAttribute('href', '#apps')
  })
})
