import { useRef, useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Text from 'ui-components/Text'
import { Button } from 'ui-components/Button'

function CanvasDrawing() {
  const [isDrawing, setIsDrawing] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const canvasContextRef = useRef<CanvasRenderingContext2D | null>(null)

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current
      const context = canvas?.getContext('2d')
      // pixels
      canvas.width = window.innerWidth * 2
      canvas.height = window.innerHeight * 2

      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`

      if (context) {
        context.scale(2, 2)
        context.strokeStyle = 'green'
        context.lineWidth = 3
        context.lineCap = 'round'
      }

      canvasContextRef.current = context
    }
  }, [])

  const startDrawing = ({ nativeEvent }: any) => {
    setIsDrawing(true)
    const { offsetX, offsetY } = nativeEvent
    if (canvasRef.current) {
      const canvas = canvasRef.current
      const context = canvas?.getContext('2d')
      if (context) {
        context.beginPath()
        context.moveTo(offsetX, offsetY)
      }
    }
  }

  const stopDrawing = () => {
    setIsDrawing(false)
    if (canvasRef.current) {
      const canvas = canvasRef.current
      const context = canvas?.getContext('2d')
      if (context) {
        context.closePath()
      }
    }
  }

  const draw = ({ nativeEvent }: any) => {
    if (!isDrawing) {
      return
    }

    if (canvasRef.current) {
      const canvas = canvasRef.current
      const context = canvas?.getContext('2d')
      if (context) {
        const { offsetX, offsetY } = nativeEvent
        context.lineTo(offsetX, offsetY)
        context.stroke()
      }
    }
  }

  const clearDrawingTable = () => {
    if (canvasRef.current) {
      const canvas = canvasRef.current
      const context = canvas?.getContext('2d')
      if (context) {
        context.fillStyle = 'white'
        context.fillRect(0, 0, canvas.width, canvas.height)
      }
    }
  }

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Text data-testid="drawing-header-text" option="subtitle" content="Dawing section" center />
            <Button label="Clear Table" onClick={clearDrawingTable} />
          </Col>
        </Row>

        <Row>
          <Col>
            <canvas data-testid="canvas-content" ref={canvasRef} onMouseDown={startDrawing} onMouseUp={stopDrawing} onMouseMove={draw} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CanvasDrawing
