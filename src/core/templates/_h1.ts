import styled from 'styled-components/macro'

interface ITemplates_H1StylesProps {
  'font-size'?: string
}

const _h1 = styled.h1<ITemplates_H1StylesProps>`
  font-size: ${props => props['font-size'] ? props['font-size'] : '15px'};
`

export default _h1