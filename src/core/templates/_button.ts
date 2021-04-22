import styled from 'styled-components/macro'

interface ITemplates_ButtonsStylesProps {
  'background-color'?: string
  height?: string
}

const _button = styled.button<ITemplates_ButtonsStylesProps>`
  height: ${props => props.height ? props.height : '35px'};
  background-color: ${props => props['background-color'] ? props['background-color'] : props.theme.colors.primaryColor}
`

export default _button