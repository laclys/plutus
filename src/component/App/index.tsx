import React from 'react'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader/root'
import { ConfigProvider, message } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import store from '@/store'


import './styles.styl'


message.config({
  maxCount: 1
})

const App = () => (
  <ConfigProvider locale={zhCN} autoInsertSpaceInButton={false}>
    <Provider store={store}>
      <ListWrapper />
    </Provider>
  </ConfigProvider>
)

export default hot(App)
