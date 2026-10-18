"use client";

import {
  BaseEdge,
  Handle,
  Position,
  ReactFlow,
  getBezierPath,
  type Edge,
  type EdgeProps,
  type Node,
  type NodeProps,
} from "@xyflow/react";
import { motion, useReducedMotion } from "framer-motion";
import { memo, useEffect, useMemo, useState, type CSSProperties } from "react";

type LayoutMode = "desktop" | "tablet" | "compact" | "mobile";
type FlowDirection = "horizontal" | "vertical";

type StudioNodeData = Record<string, unknown> & {
  direction: FlowDirection;
  eyebrow: string;
  meta: string;
  title: string;
  tone: "neutral" | "primary" | "secondary";
};

type StudioEdgeData = Record<string, unknown> & {
  delay?: number;
  tone: "primary" | "secondary";
};

type StudioNode = Node<StudioNodeData, "studioNode">;
type StudioEdge = Edge<StudioEdgeData, "studioEdge">;

const nodeCopy = {
  intake: { eyebrow: "TRIGGER", title: "Order received", meta: "6 fields", tone: "neutral" },
  logic: { eyebrow: "LOGIC", title: "Validation check", meta: "Rules matched", tone: "neutral" },
  output: { eyebrow: "OUTPUT", title: "Fulfilment job", meta: "Queued", tone: "secondary" },
  execute: { eyebrow: "EXECUTE", title: "Notify & record", meta: "Next", tone: "primary" },
} as const;

const horizontalPositions = {
  desktop: {
    intake: { x: 0, y: 40 },
    logic: { x: 350, y: 185 },
    output: { x: 760, y: 40 },
    execute: { x: 760, y: 330 },
  },
  tablet: {
    intake: { x: 0, y: 40 },
    logic: { x: 230, y: 185 },
    output: { x: 480, y: 40 },
    execute: { x: 480, y: 330 },
  },
} as const;

const compactPositions = {
  intake: { x: 110, y: 10 },
  logic: { x: 110, y: 145 },
  output: { x: 0, y: 320 },
  execute: { x: 220, y: 320 },
} as const;

const mobilePositions = {
  intake: { x: 66, y: 10 },
  logic: { x: 66, y: 145 },
  output: { x: 0, y: 320 },
  execute: { x: 132, y: 320 },
} as const;

function currentLayout(): LayoutMode {
  if (typeof window === "undefined") return "desktop";
  if (window.matchMedia("(max-width: 520px)").matches) return "mobile";
  if (window.matchMedia("(max-width: 760px)").matches) return "compact";
  if (window.matchMedia("(max-width: 1100px)").matches) return "tablet";
  return "desktop";
}

function useLayoutMode() {
  const [layout, setLayout] = useState<LayoutMode>(currentLayout);

  useEffect(() => {
    const updateLayout = () => setLayout(currentLayout());
    window.addEventListener("resize", updateLayout, { passive: true });
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  return layout;
}

function createNodes(layout: LayoutMode): StudioNode[] {
  const direction: FlowDirection = layout === "mobile" || layout === "compact" ? "vertical" : "horizontal";
  const positions = layout === "mobile"
    ? mobilePositions
    : layout === "compact"
      ? compactPositions
      : horizontalPositions[layout];

  return Object.entries(nodeCopy).map(([id, copy]) => ({
    id,
    type: "studioNode",
    position: positions[id as keyof typeof positions],
    data: { ...copy, direction },
    draggable: false,
    selectable: false,
    connectable: false,
  }));
}

const edges: StudioEdge[] = [
  { id: "intake-logic", source: "intake", sourceHandle: "out", target: "logic", targetHandle: "in", type: "studioEdge", data: { tone: "primary", delay: .08 } },
  { id: "logic-output", source: "logic", sourceHandle: "output", target: "output", targetHandle: "in", type: "studioEdge", data: { tone: "secondary" } },
  { id: "logic-execute", source: "logic", sourceHandle: "execute", target: "execute", targetHandle: "in", type: "studioEdge", data: { tone: "primary", delay: .38 } },
];

const StudioFlowNode = memo(function StudioFlowNode({ id, data }: NodeProps<StudioNode>) {
  const vertical = data.direction === "vertical";
  const targetPosition = vertical ? Position.Top : Position.Left;
  const sourcePosition = vertical ? Position.Bottom : Position.Right;
  const outputHandleStyle: CSSProperties = vertical ? { left: "30%" } : { top: "32%" };
  const executeHandleStyle: CSSProperties = vertical ? { left: "70%" } : { top: "68%" };
  const incomingTone = id === "logic" || data.tone === "primary" ? "primary" : "secondary";

  return (
    <div className={`studio-flow-node is-${data.tone}`}>
      {id !== "intake" && (
        <Handle
          id="in"
          type="target"
          position={targetPosition}
          className={`studio-flow-handle is-${incomingTone}`}
        />
      )}

      <small>{data.eyebrow}</small>
      <strong>{data.title}</strong>
      <span>{data.meta}</span>

      {id === "intake" && (
        <Handle id="out" type="source" position={sourcePosition} className="studio-flow-handle is-primary" />
      )}
      {id === "logic" && (
        <>
          <Handle id="output" type="source" position={sourcePosition} style={outputHandleStyle} className="studio-flow-handle is-secondary" />
          <Handle id="execute" type="source" position={sourcePosition} style={executeHandleStyle} className="studio-flow-handle is-primary" />
        </>
      )}
    </div>
  );
});

function StudioFlowEdge({
  id,
  sourceX,
  sourceY,
  sourcePosition,
  targetX,
  targetY,
  targetPosition,
  data,
}: EdgeProps<StudioEdge>) {
  const reduce = useReducedMotion();
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
    curvature: .32,
  });
  const primary = data?.tone === "primary";

  return (
    <>
      <BaseEdge
        id={id}
        path={edgePath}
        interactionWidth={0}
        vectorEffect="non-scaling-stroke"
        style={{ stroke: primary ? "#e34224" : "#b8aea2", strokeWidth: primary ? 2 : 1.5 }}
      />
      {primary && !reduce && (
        <motion.path
          d={edgePath}
          fill="none"
          stroke="#ff8e77"
          strokeWidth="3"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, .72, 0] }}
          transition={{ duration: 1.05, delay: data?.delay ?? 0, ease: "easeInOut" }}
        />
      )}
    </>
  );
}

const nodeTypes = { studioNode: StudioFlowNode };
const edgeTypes = { studioEdge: StudioFlowEdge };

export function StudioFlowVisual() {
  const layout = useLayoutMode();
  const nodes = useMemo(() => createNodes(layout), [layout]);
  const maxZoom = layout === "desktop" ? 1.18 : layout === "compact" ? 1.15 : 1;

  return (
    <div className="studio-flow-canvas">
      <ReactFlow<StudioNode, StudioEdge>
        key={layout}
        aria-label="Order sync workflow diagram"
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        fitViewOptions={{ padding: .02, minZoom: .8, maxZoom }}
        minZoom={.55}
        maxZoom={maxZoom}
        nodesDraggable={false}
        nodesConnectable={false}
        nodesFocusable={false}
        edgesFocusable={false}
        edgesReconnectable={false}
        elementsSelectable={false}
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        preventScrolling={false}
      />
    </div>
  );
}
