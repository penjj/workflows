/* @refresh reload */
import type { Component } from 'solid-js'

import { throttle } from 'lodash-es'
import { render } from 'solid-js/web'
import { invoke } from '@tauri-apps/api/tauri'
import coding from '@/assets/coding.png'

import '@/tailwind.pcss'
import {
  closeDialogWindow,
  startDialogWindow,
  setMainWinPosition,
} from '@/channel/invoke'

let abcedfg

interface DragInfo {
  dragging: boolean
  startX: number
  startY: number
}

const useDrag = () => {
  const dragInfo = {} as DragInfo

  // const setWinPosition = throttle(setMainWinPosition)

  const onMouseDown = (e: MouseEvent) => {
    dragInfo.dragging = true
    dragInfo.startX = e.screenX - e.pageX
    dragInfo.startY = e.screenY - e.pageY
  }

  const onMouseMove = (e: MouseEvent) => {
    if (dragInfo.dragging) {
      const x = e.screenX - e.pageX
      const y = e.screenY - e.pageY
      // setWinPosition(winPosX, winPosY)
      // closeDialogWindow()
      invoke('greet', { x, y })
    }
  }

  const onMouseUp = (e: MouseEvent) => {
    dragInfo.dragging = false
    const { startX: x1, startY: y1 } = dragInfo
    const x2 = e.screenX - e.pageX
    const y2 = e.screenY - e.pageY
    const d = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2))
    if (d === 0) {
      // startDialogWindow()
    }
  }

  return {
    onMouseDown,
    onMouseMove,
    onMouseUp,
  }
}
