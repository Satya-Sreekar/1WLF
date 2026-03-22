import { useTerminalTyping } from '../../hooks/useTerminalTyping'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { terminalCommands } from '../../data/content'

export function Terminal() {
  const reducedMotion = useReducedMotion()
  const { text, isComplete } = useTerminalTyping(terminalCommands, reducedMotion)

  return (
    <div className="terminal">
      <div className="terminal-bar">
        <span className="terminal-dot" style={{ background: '#ff5f57' }} />
        <span className="terminal-dot" style={{ background: '#febc2e' }} />
        <span className="terminal-dot" style={{ background: '#28c840' }} />
        <span className="terminal-title">satya@1wlf ~</span>
      </div>
      <div
        className="terminal-body"
        role="img"
        aria-label="Terminal showing profile: AI Engineer, Full-Stack Builder, Researcher at ThinkOMega IT Solutions. Focus areas include AI, Healthcare Systems, Full-Stack Engineering, and Cloud Infrastructure."
      >
        <pre>{text}</pre>
        {isComplete && (
          <span className="cursor" aria-hidden="true" />
        )}
      </div>
    </div>
  )
}
