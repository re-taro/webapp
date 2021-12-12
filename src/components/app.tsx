import { css, Global } from '@emotion/react'
import React from 'react'
import { GlobalStyles } from 'twin.macro'
// eslint-disable-next-line import/no-unresolved
import { useRegisterSW } from 'virtual:pwa-register/react'
import { Switch, Route, Redirect } from 'wouter'
import * as pages from '../pages'

const customStyles = css`
  * {
    user-select: none;
  }
  img {
    pointer-events: none;
  }
`

const App: React.FC = () => {
  useRegisterSW()

  return (
    <>
      <GlobalStyles />
      <Global styles={customStyles} />
      <Switch>
        <Route path="/" component={pages.Home} />
        <Route path="/lafs" component={pages.Lafs} />
        <Route path="/receive">
          <Redirect to="/receive/select-laf" replace={true} />
        </Route>
        <Route path="/receive/select-laf" component={pages.ReceiveSelectLaf} />
        <Route path="/receive/confirm" component={pages.ReceiveConfirm} />
        <Route path="/receive/send-letter" component={pages.ReceiveSendLetter} />
        <Route path="/receive/complete" component={pages.ReceiveComplete} />
        <Route path="/register">
          <Redirect to="/register/select-category" replace={true} />
        </Route>
        <Route path="/register/select-category" component={pages.RegisterSelectCategory} />
        <Route path="/register/overview" component={pages.RegisterOverview} />
        <Route path="/register/photograph" component={pages.RegisterPhotograph} />
        <Route path="/register/confirm" component={pages.RegisterConfirm} />
        <Route path="/register/complete" component={pages.RegisterComplete} />
        <Route component={pages.NotFound} />
      </Switch>
    </>
  )
}

export {
  App
}
