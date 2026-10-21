import { motion } from 'framer-motion'

interface Node {
  id: string
  label: string
  branch: string
  x: number
  y: number
  color?: string
}

interface Edge {
  from: string
  to: string
  color?: string
}

interface GitGraphProps {
  nodes: Node[]
  edges: Edge[]
  width?: number
  height?: number
}

const branchColors: Record<string, string> = {
  main: '#238636',
  feature: '#58a6ff',
  hotfix: '#f85149',
  develop: '#a371f7',
}

/** Approximate text width for monospace-ish labels (used to size the box) */
function estimateTextWidth(text: string, fontSize = 11): number {
  // Rough average character width for the font we use
  return Math.max(text.length * (fontSize * 0.62), 24)
}

export default function GitGraph({ nodes, edges, width = 400, height = 300 }: GitGraphProps) {
  const getNode = (id: string) => nodes.find((n) => n.id === id)

  return (
    <div className="my-6 p-4 rounded-lg border border-[var(--color-github-border)] bg-[#0d1117] overflow-x-auto">
      <svg width={width} height={height} className="mx-auto">
        {/* Edges */}
        {edges.map((edge, i) => {
          const from = getNode(edge.from)
          const to = getNode(edge.to)
          if (!from || !to) return null
          const color = edge.color || branchColors[to.branch] || '#30363d'
          return (
            <motion.line
              key={i}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke={color}
              strokeWidth={2.5}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            />
          )
        })}

        {/* Nodes: circle + label inside a rounded box */}
        {nodes.map((node, i) => {
          const color = node.color || branchColors[node.branch] || '#238636'
          const hasLabel = Boolean(node.label && node.label.trim())

          // Box dimensions
          const paddingX = 8
          const paddingY = 4
          const fontSize = 11
          const textW = hasLabel ? estimateTextWidth(node.label, fontSize) : 0
          const boxW = textW + paddingX * 2
          const boxH = fontSize + paddingY * 2

          // Position the box to the right of the circle (with a small gap)
          const boxX = node.x + 16
          const boxY = node.y - boxH / 2

          return (
            <g key={node.id}>
              {/* Commit circle */}
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={10}
                fill={color}
                stroke="#0d1117"
                strokeWidth={3}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', delay: i * 0.08 }}
              />

              {/* Label box (only when there is a label) */}
              {hasLabel && (
                <motion.g
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', delay: i * 0.08 + 0.05 }}
                >
                  {/* Rounded rectangle background */}
                  <rect
                    x={boxX}
                    y={boxY}
                    width={boxW}
                    height={boxH}
                    rx={6}
                    ry={6}
                    fill="#161b22"
                    stroke={color}
                    strokeWidth={1.5}
                    opacity={0.95}
                  />
                  {/* Label text centered inside the box */}
                  <text
                    x={boxX + boxW / 2}
                    y={boxY + boxH / 2 + 1}
                    fill="#e6edf3"
                    fontSize={fontSize}
                    fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    {node.label}
                  </text>
                </motion.g>
              )}
            </g>
          )
        })}
      </svg>
    </div>
  )
}
