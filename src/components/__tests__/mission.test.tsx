import { render, screen } from '@testing-library/react'
import { Mission } from '../mission'

describe('Mission', () => {
  it('renders first mission line', () => {
    render(<Mission />)
    expect(screen.getByText('Some people are rebuilding.')).toBeInTheDocument()
  })

  it('renders closing line', () => {
    render(<Mission />)
    expect(screen.getByText('PathForward Tools exists for all of them.')).toBeInTheDocument()
  })
})
