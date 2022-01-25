import { FC } from "react";

import CanvasDrawing from "components/CanvasDrawing";

import { DrawingContainer } from "./DrawingSection.styles";

const DrawingSection: FC = () => {
  return (
    <>
      <DrawingContainer>
        <CanvasDrawing />
      </DrawingContainer>
    </>
  );
};

export default DrawingSection;
