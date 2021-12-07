import React from 'react'
import tw, { css } from 'twin.macro'
import { CenteringLayout } from '../../layouts'

const RegisterConfirm: React.FC = () => (
  <CenteringLayout
    title="この落とし物を登録しますか?"
    headerProps={{ css: css(tw`underline`) }}
  >
  </CenteringLayout>
)

export {
  RegisterConfirm
}