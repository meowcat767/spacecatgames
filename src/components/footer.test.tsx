/*
 * Copyright (c) Starry Systems and Nijika Softworks.
 */

import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import Footer from './footer'

// Mock document.createElement and appendChild for script injection
describe('Footer', () => {
  beforeEach(() => {
    // Clear any existing scripts
    document.body.innerHTML = ''
    vi.clearAllMocks()
  })

  it('renders copyright text', () => {
    render(<Footer />)
    expect(screen.getByText(/© 2025 Nijika Softworks & Neuron Technologies/i)).toBeInTheDocument()
  })

  it('renders React and Vite images', () => {
    render(<Footer />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(2)
  })

  it('renders uptime tickcounter element', () => {
    render(<Footer />)
    const uptimeElement = screen.getByTitle('Uptime')
    expect(uptimeElement).toBeInTheDocument()
    expect(uptimeElement).toHaveAttribute('data-type', 'countup')
    expect(uptimeElement).toHaveAttribute('data-id', '367698')
  })

  it('injects TickCounter script on mount', () => {
    render(<Footer />)
    const script = document.getElementById('tickcounter-sdk')
    expect(script).toBeInTheDocument()
    expect(script).toHaveAttribute('src', '//www.tickcounter.com/static/js/loader.js')
  })

  it('does not inject duplicate scripts on re-render', () => {
    const { rerender } = render(<Footer />)
    const initialScripts = document.querySelectorAll('#tickcounter-sdk').length
    
    rerender(<Footer />)
    const afterRerenderScripts = document.querySelectorAll('#tickcounter-sdk').length
    
    expect(afterRerenderScripts).toBe(initialScripts)
  })
})

