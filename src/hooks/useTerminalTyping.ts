import { useState, useEffect, useRef } from 'react'
import type { TerminalCommand } from '../data/content'

interface TerminalState {
  text: string
  isComplete: boolean
}

export function useTerminalTyping(
  commands: TerminalCommand[],
  reducedMotion: boolean,
  startDelay = 600
): TerminalState {
  const fullText = commands.map(c => c.text).join('\n')

  const [state, setState] = useState<TerminalState>(() => ({
    text: reducedMotion ? fullText : '',
    isComplete: reducedMotion,
  }))

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (reducedMotion) {
      setState({ text: fullText, isComplete: true })
      return
    }

    let ci = 0
    let chi = 0
    let built = ''

    function type() {
      if (ci >= commands.length) {
        setState({ text: built, isComplete: true })
        return
      }
      const line = commands[ci]
      if (line.type === 'blank') {
        built += '\n'
        ci++
        chi = 0
        setState({ text: built, isComplete: false })
        timeoutRef.current = setTimeout(type, 100)
        return
      }
      if (chi < line.text.length) {
        built += line.text.charAt(chi)
        chi++
        setState({ text: built, isComplete: false })
        timeoutRef.current = setTimeout(type, line.type === 'cmd' ? 30 : 12)
      } else {
        built += '\n'
        ci++
        chi = 0
        setState({ text: built, isComplete: false })
        timeoutRef.current = setTimeout(type, line.type === 'cmd' ? 300 : 80)
      }
    }

    timeoutRef.current = setTimeout(type, startDelay)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [commands, reducedMotion, startDelay, fullText])

  return state
}
