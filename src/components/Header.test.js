import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from './Header'

describe('Header component', () => {
  it('renders correctly', () => {
    const { getByText } = render (
      <Header />
    )

    expect(getByText('Busca Cep')).toBeInTheDocument()
  })
})