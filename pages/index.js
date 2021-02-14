import styled from 'styled-components'
import Menu from '../src/components/commons/Menu'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return ( 
    <div>
      <Menu/>
      My page
    </div>
  )
}
