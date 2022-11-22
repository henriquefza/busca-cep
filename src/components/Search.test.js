import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Search from './Search'

jest.mock('../services/api', () => {
  return {
   response: '/'
  }
})

describe('Search component', () => {
  it('renders correctly', () => {
    const { getByText } = render (
      <Search />
    )

    expect(getByText('Buscar')).toBeInTheDocument()
  })
})