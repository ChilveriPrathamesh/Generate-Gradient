// Write your code here

import {
  GradientDirectionItemContainer,
  GenerateButton,
} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientDirectionDetails, isActive, clickGradientDirectionItem} = props

  const {displayText, value} = gradientDirectionDetails
  const onClickGradientDirectionItem = () => {
    clickGradientDirectionItem(value)
  }
  return (
    <GradientDirectionItemContainer>
      <GenerateButton
        isActive={isActive}
        type="button"
        onClick={onClickGradientDirectionItem}
      >
        {displayText}
      </GenerateButton>
    </GradientDirectionItemContainer>
  )
}

export default GradientDirectionItem
