// хук, который позволяет доставать нам удобно все actions без использование dispatch
import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'

// забираем все actions
import { rootAction } from '../store/rootActions'

export const useActions = () => {
  const dispatch = useDispatch()

  return useMemo(() => bindActionCreators(rootAction, dispatch), [dispatch])
}
