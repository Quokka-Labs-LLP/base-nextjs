import React from 'react'
import ForceGraph3D from 'react-force-graph-3d'
import { Object3D } from 'three'

export interface GraphData {
  nodes: NodeObject[]
  links: LinkObject[]
}

export type NodeObject = {
  id?: string | number
  x?: number
  y?: number
  z?: number
  vx?: number
  vy?: number
  vz?: number
  fx?: number
  fy?: number
  fz?: number
  // eslint-disable-next-line
  [key: string]: any
}

export type LinkObject = {
  source?: string | number | NodeObject
  target?: string | number | NodeObject
}

export type Accessor<In, Out> = Out | string | ((obj: In) => Out)
export type NodeAccessor<T> = Accessor<NodeObject, T>
export type LinkAccessor<T> = Accessor<LinkObject, T>
export type Coords = { x: number; y: number; z: number }
export type LinkPositionUpdateFn = (
  // eslint-disable-next-line
  obj: Object3D,
  coords: { start: Coords; end: Coords },
  link: LinkObject,
) => null | boolean

export interface FGProps {
  // Data Input
  // ============================================================
  /**
   * Graph data structure (see below for syntax details). Can also
   * be used to apply incremental updates.
   */
  graphData?: GraphData
  /**
   * Node object accessor attribute for unique node id (used in
   * link objects source/target).
   */
  nodeId?: string
  /**
   * Link object accessor attribute referring to id of source node.
   */
  linkSource?: string
  /**
   * Link object accessor attribute referring to id of target node.
   */
  linkTarget?: string

  // Container Layout
  // ============================================================
  /**
   * Canvas width, in px.
   */
  width?: number
  /**
   * Canvas height, in px.
   */
  height?: number
  /**
   * Chart background color.
   */
  backgroundColor?: string
  /**
   * Whether to show the navigation controls footer info.
   */
  showNavInfo?: boolean

  // Node Styling
  // ============================================================
  /**
   * Ratio of node circle area (square px) [2D] or sphere volume
   * (cubic px) [3D] per value unit.
   */
  nodeRelSize?: number
  /**
   * Node object accessor function, attribute or a numeric constant
   * for the node numeric value (affects node size).
   */
  nodeVal?: NodeAccessor<number>
  /**
   * Node object accessor function or attribute for name
   * (shown in label). Supports plain text or HTML content
   * (except in VR).
   */
  nodeLabel?: NodeAccessor<string>
  /**
   * Node object accessor function, attribute or a boolean constant
   * for whether to display the node.
   */
  nodeVisibility?: NodeAccessor<boolean>
  /**
   * Node object accessor function or attribute for node color.
   */
  nodeColor?: NodeAccessor<string>
  /**
   * Node object accessor function or attribute to automatically
   * group colors by. Only affects nodes without a color attribute.
   */
  nodeAutoColorBy?: NodeAccessor<string | null>
  /**
   * Nodes sphere opacity, between [0,1].
   */
  nodeOpacity?: number
  /**
   * Geometric resolution of each node's sphere, expressed in how
   * many slice segments to divide the circumference. Higher values
   * yield smoother spheres. Only applicable to 3D modes.
   */
  nodeResolution?: number
  /**
   * Node object accessor function or attribute for generating a
   * custom 3d object to render as graph nodes. Should return an
   * instance of ThreeJS Object3d. If a falsy value is returned,
   * the default 3d object type will be used instead for that node.
   */
  nodeThreeObject?: NodeAccessor<any> // eslint-disable-line
  /**
   * Node object accessor function, attribute or a boolean value for
   * whether to replace the default node when using a custom
   * nodeThreeObject (false) or to extend it (true).
   */
  nodeThreeObjectExtend?: NodeAccessor<boolean>

  // Link styling
  // ============================================================
  /**
   * Link object accessor function or attribute for name (shown in
   * label). Supports plain text or HTML content (except in VR).
   */
  linkLabel?: LinkAccessor<string>
  /**
   * Link object accessor function, attribute or a boolean constant
   * for whether to display the link line.
   */
  linkVisibility?: LinkAccessor<boolean>
  /**
   * Link object accessor function or attribute for line color.
   */
  linkColor?: LinkAccessor<string>
  /**
   * Link object accessor function or attribute to automatically group
   * colors by. Only affects links without a color attribute.
   */
  linkAutoColorBy?: LinkAccessor<string | null>
  /**
   * Link object accessor function, attribute or a numeric constant
   * for the link line width.
   */
  linkWidth?: LinkAccessor<number>
  /**
   * Line opacity of links, between [0,1].
   */
  linkOpacity?: number
  /**
   * Geometric resolution of each link 3D line, expressed in how many
   * radial segments to divide the cylinder. Higher values yield
   * smoother cylinders. Applicable only to links with positive width.
   */
  linkResolution?: number
  /**
   * Link object accessor function, attribute or a numeric constant for
   * the curvature radius of the link line. A value of 0 renders a straight
   * line. 1 indicates a radius equal to half of the line length, causing
   * the curve to approximate a semi-circle. For self-referencing links
   * (source equal to target) the curve is represented as a loop around
   * the node, with length proportional to the curvature value.
   */
  linkCurvature?: LinkAccessor<number>
  /**
   * Link object accessor function, attribute or a numeric constant for
   * the rotation along the line axis to apply to the curve. Has no effect
   * on straight lines. At 0 rotation, the curve is oriented in the direction
   * of the intersection with the XY plane. The rotation angle (in radians)
   * will rotate the curved line clockwise around the "start-to-end" axis
   * from this reference orientation.
   */
  linkCurveRotation?: LinkAccessor<number>
  /**
   * Link object accessor function or attribute for specifying a custom
   * material to style the graph links with. Should return an instance of
   * ThreeJS Material. If a falsy value is returned, the default material
   * will be used instead for that link.
   */
  linkMaterial?: LinkAccessor<any | boolean | null> // eslint-disable-line
  /**
   * Link object accessor function or attribute for generating a custom 3d
   * object to render as graph links. Should return an instance of ThreeJS
   * Object3d. If a falsy value is returned, the default 3d object type will
   * be used instead for that link.
   */
  linkThreeObject?: LinkAccessor<any> // eslint-disable-line
  /**
   * Link object accessor function, attribute or a boolean value for whether
   * to replace the default link when using a custom linkThreeObject (false)
   * or to extend it (true).
   */
  linkThreeObjectExtend?: LinkAccessor<boolean>
  /**
   * Custom function to call for updating the position of links at every
   * render iteration. It receives the respective link ThreeJS Object3d, the
   * start and end coordinates of the link ({x,y,z} each), and the link's data.
   * If the function returns a truthy value, the regular position update
   * function will not run for that link.
   */
  linkPositionUpdate?: LinkPositionUpdateFn | null
  /**
   * Link object accessor function, attribute or a numeric constant for the
   * length of the arrow head indicating the link directionality. The arrow
   * is displayed directly over the link line, and points in the direction
   * of source > target. A value of 0 hides the arrow.
   */
  linkDirectionalArrowLength?: LinkAccessor<number>
  /**
   * Link object accessor function or attribute for the color of the arrow
   * head.
   */
  linkDirectionalArrowColor?: LinkAccessor<string>
  /**
   * Link object accessor function, attribute or a numeric constant for the
   * longitudinal position of the arrow head along the link line, expressed
   * as a ratio between 0 and 1, where 0 indicates immediately next to the
   * source node, 1 next to the target node, and 0.5 right in the middle.
   */
  linkDirectionalArrowRelPos?: LinkAccessor<number>
  /**
   * Geometric resolution of the arrow head, expressed in how many slice
   * segments to divide the cone base circumference. Higher values yield
   * smoother arrows.
   */
  linkDirectionalArrowResolution?: number
  /**
   * Link object accessor function, attribute or a numeric constant for
   * the number of particles (small spheres) to display over the link line.
   * The particles are distributed equi-spaced along the line, travel in
   * the direction source > target, and can be used to indicate link
   * directionality.
   */
  linkDirectionalParticles?: LinkAccessor<number>
  /**
   * Link object accessor function, attribute or a numeric constant for
   * the directional particles speed, expressed as the ratio of the link
   * length to travel per frame. Values above 0.5 are discouraged.
   */
  linkDirectionalParticleSpeed?: LinkAccessor<number>
  /**
   * Link object accessor function, attribute or a numeric constant for
   * the directional particles width. Values are rounded to the nearest
   * decimal for indexing purposes.
   */
  linkDirectionalParticleWidth?: LinkAccessor<number>
  /**
   * Link object accessor function or attribute for the directional
   * particles color.
   */
  linkDirectionalParticleColor?: LinkAccessor<string>
  /**
   * Geometric resolution of each 3D directional particle, expressed
   * in how many slice segments to divide the circumference. Higher
   * values yield smoother particles.
   */
  linkDirectionalParticleResolution?: number

  /**
   * An alternative mechanism for generating particles, this method emits
   * a non-cyclical single particle within a specific link. The emitted
   * particle shares the styling (speed, width, color) of the regular
   * particle props. A valid link object that is included in graphData
   * should be passed as a single parameter.
   */
  emitParticle?: any // eslint-disable-line

  /**
   * Configuration parameters to pass to the ThreeJS WebGLRenderer
   * constructor. This prop only has an effect on component mount.
   */
  rendererConfig?: any // eslint-disable-line
  /**
   * If you wish to include custom objects that require a dedicated
   * renderer besides WebGL, such as CSS3DRenderer, include in this
   * array those extra renderer instances.
   */
  extraRenderers?: any[] // eslint-disable-line
  /**
   * Pauses the rendering cycle of the component, effectively freezing
   * the current view and cancelling all user interaction. This method
   * can be used to save performance in circumstances when a static
   * image is sufficient.
   */
  pauseAnimation?: any // eslint-disable-line
  /**
   * Resumes the rendering cycle of the component, and re-enables the
   * user interaction. This method can be used together with pauseAnimation
   * for performance optimization purposes.
   */
  resumeAnimation?: any // eslint-disable-line
  /**
   * Automatically zooms/pans the canvas so that all of the nodes fit
   * inside it. If no nodes are found no action is taken. It accepts
   * two optional arguments: the first defines the duration of the transition
   * (in ms) to animate the canvas motion (default: 0ms). The second argument
   * is the amount of padding (in px) between the edge of the canvas and the
   * outermost node (default: 10px). The third argument specifies a custom
   * node filter: node => <boolean>, which should return a truthy value if
   * the node is to be included. This can be useful for focusing on a portion
   * of the graph.
   */
  zoomToFit?: any // eslint-disable-line
  /**
   * Re-position the camera, in terms of x, y, z coordinates. Each of the
   * coordinates is optional, allowing for motion in just some dimensions.
   * The optional second argument can be used to define the direction that
   * the camera should aim at, in terms of an {x,y,z} point in the 3D space.
   * The 3rd optional argument defines the duration of the transition (in ms)
   * to animate the camera motion. A value of 0 (default) moves the camera
   * immediately to the final position. By default the camera will face the
   * center of the graph at a z distance proportional to the amount of nodes
   * in the system.
   */
  cameraPosition?: any // eslint-disable-line
  /**
   * Access the internal ThreeJS Scene.
   */
  scene?: any // eslint-disable-line
  /**
   * Access the internal ThreeJS Camera.
   */
  camera?: any // eslint-disable-line
  /**
   * Access the internal ThreeJS WebGL renderer.
   */
  render?: any // eslint-disable-line
  /**
   * Access the post-processing composer. Use this to add post-processing
   * rendering effects to the scene. By default the composer has a single
   * pass (RenderPass) that directly renders the scene without any effects.
   */
  postProcessingComposer?: any // eslint-disable-line
  /**
   * Access the internal ThreeJS controls object.
   */
  controls?: any // eslint-disable-line
  /**
   * Redraws all the nodes/links.
   */
  refresh?: any // eslint-disable-line

  // Force engine (d3-force) configuration
  // ============================================================
  /**
   * Which force-simulation engine to use (d3 or ngraph).
   */
  forceEngine?: string
  /**
   * Not applicable to 2D mode. Number of dimensions to run the force
   * simulation on.
   */
  numDimensions?: 1 | 2 | 3
  /**
   * Apply layout constraints based on the graph directionality. Only
   * works correctly for DAG graph structures (without cycles). Choice
   * between td (top-down), bu (bottom-up), lr (left-to-right), rl
   * (right-to-left), zout (near-to-far), zin (far-to-near), radialout
   * (outwards-radially) or radialin (inwards-radially).
   */
  dagMode?: string
  /**
   * If dagMode is engaged, this specifies the distance between the
   * different graph depths.
   */
  dagLevelDistance?: number | null
  /**
   * Node accessor function to specify nodes to ignore during the DAG
   * layout processing. This accessor method receives a node object
   * and should return a boolean value indicating whether the node
   * is to be included. Excluded nodes will be left unconstrained
   * and free to move in any direction.
   */
  dagNodeFilter?: (node: NodeObject) => boolean
  /**
   * Callback to invoke if a cycle is encountered while processing
   * the data structure for a DAG layout. The loop segment of the
   * graph is included for information, as an array of node ids.
   * By default an exception will be thrown whenever a loop is
   * encountered. You can override this method to handle this case
   * externally and allow the graph to continue the DAG processing.
   * Strict graph directionality is not guaranteed if a loop is
   * encountered and the result is a best effort to establish a
   * hierarchy.
   */
  onDagError?: ((loopNodeIds: (string | number)[]) => void) | undefined
  /**
   * Sets the simulation alpha min parameter. Only applicable if
   * using the d3 simulation engine.
   */
  d3AlphaMin?: number
  /**
   * Sets the simulation intensity decay parameter. Only applicable
   * if using the d3 simulation engine.
   */
  d3AlphaDecay?: number
  /**
   * Nodes' velocity decay that simulates the medium resistance.
   * Only applicable if using the d3 simulation engine.
   */
  d3VelocityDecay?: number
  /**
   * Specify custom physics configuration for ngraph, according to
   * its configuration object syntax. Only applicable if using the
   * ngraph simulation engine.
   */
  ngraphPhysics?: any // eslint-disable-line
  /**
   * Number of layout engine cycles to dry-run at ignition before
   * starting to render.
   */
  warmupTicks?: number
  /**
   * How many build-in frames to render before stopping and freezing
   * the layout engine.
   */
  cooldownTicks?: number
  /**
   * How long (ms) to render for before stopping and freezing the
   * layout engine.
   */
  cooldownTime?: number
  /**
   * Callback function invoked at every tick of the simulation engine.
   */
  onEngineTick?: () => void
  /**
   * Callback function invoked when the simulation engine stops
   * and the layout is frozen.
   */
  onEngineStop?: () => void

  /**
   * Access to the internal forces that control the d3 simulation
   * engine. Follows the same interface as d3-force-3d's simulation.force.
   * Three forces are included by default: 'link' (based on forceLink),
   * 'charge' (based on forceManyBody) and 'center' (based on forceCenter).
   * Each of these forces can be reconfigured, or new forces can be added
   * to the system. Only applicable if using the d3 simulation engine.
   */
  d3Force?: () => void | string
  /**
   * Reheats the force simulation engine, by setting the alpha value to
   * 1. Only applicable if using the d3 simulation engine.
   */
  d3ReheatSimulation?: () => void

  // Interaction
  // ============================================================
  /**
   * Callback function for node (left-button) clicks. The node object
   * and the event object are included as arguments onNodeClick(node, event).
   */
  onNodeClick?: (node: NodeObject, event: MouseEvent) => void
  /**
   * Callback function for node right-clicks. The node object and
   * the event object are included as arguments onNodeRightClick(node, event).
   */
  onNodeRightClick?: (node: NodeObject, event: MouseEvent) => void
  /**
   * Callback function for node mouse over events. The node object
   * (or null if there's no node under the pointer line of sight) is
   * included as the first argument, and the previous node object
   * (or null) as second argument: onNodeHover(node, prevNode).
   */
  onNodeHover?: (node: NodeObject | null, previousNode: NodeObject | null) => void
  /**
   * Callback function for node drag interactions. This function is
   * invoked repeatedly while dragging a node, every time its position
   * is updated. The node object is included as the first argument,
   * and the change in coordinates since the last iteration of this
   * function are included as the second argument in format
   * {x,y,z}: onNodeDrag(node, translate).
   */
  onNodeDrag?: (node: NodeObject, translate: { x: number; y: number }) => void
  /**
   * Callback function for the end of node drag interactions. This
   * function is invoked when the node is released. The node object
   * is included as the first argument, and the change in coordinates
   * from the node's initial postion are included as the second argument
   * in format {x,y,z}: onNodeDragEnd(node, translate).
   */
  onNodeDragEnd?: (node: NodeObject, translate: { x: number; y: number }) => void
  /**
   * Callback function for link (left-button) clicks. The link object
   * and the event object are included as arguments onLinkClick(link, event).
   */
  onLinkClick?: (link: LinkObject, event: MouseEvent) => void
  /**
   * Callback function for link right-clicks. The link object and the
   * event object are included as arguments onLinkRightClick(link, event).
   */
  onLinkRightClick?: (link: LinkObject, event: MouseEvent) => void
  /**
   * Callback function for link mouse over events. The link object
   * (or null if there's no link under the pointer line of sight) is
   * included as the first argument, and the previous link object
   * (or null) as second argument: onLinkHover(link, prevLink).
   */
  onLinkHover?: (link: LinkObject | null, previousLink: LinkObject | null) => void
  /**
   * Whether to display the link label when gazing the link closely
   * (low value) or from far away (high value).
   */
  linkHoverPrecision?: number
  /**
   * Callback function for click events on the empty space between the
   * nodes and links. The event object is included as single argument
   * onBackgroundClick(event).
   */
  onBackgroundClick?: (event: MouseEvent) => void
  /**
   * Callback function for right-click events on the empty space between
   * the nodes and links. The event object is included as single argument
   * onBackgroundRightClick(event).
   */
  onBackgroundRightClick?: (event: MouseEvent) => void
  /**
   * Which type of control to use to control the camera on 3D mode.
   * Choice between trackball, orbit or fly.
   */
  controlType?: string
  /**
   * Whether to enable the trackball navigation controls used to move
   * the camera using mouse interactions (rotate/zoom/pan).
   */
  enableNavigationControls?: boolean
  /**
   * Whether to enable the mouse tracking events. This activates an
   * internal tracker of the canvas mouse position and enables the
   * functionality of object hover/click and tooltip labels, at the
   * cost of performance. If you're looking for maximum gain in your
   * graph performance it's recommended to switch off this property.
   */
  enablePointerInteraction?: boolean
  /**
   * Whether to enable the user interaction to drag nodes by click-dragging.
   * If enabled, every time a node is dragged the simulation is re-heated
   * so the other nodes react to the changes. Only applicable if
   * enablePointerInteraction is true.
   */
  enableNodeDrag?: boolean
  /**
   * Callback function for painting a canvas area used to detect
   * node pointer interactions. The provided paint color uniquely
   * identifies the node and should be used to perform drawing
   * operations on the provided canvas context. This painted area
   * will not be visible, but instead be used to detect pointer
   * interactions with the node. The callback function has the
   * signature: nodePointerAreaPaint(<node>, <color>, <canvas context>,
   * <current global scale>).
   */
  nodePointerAreaPaint?: () => void
  /**
   * Callback function for painting a canvas area used to detect
   * link pointer interactions. The provided paint color uniquely
   * identifies the link and should be used to perform drawing
   * operations on the provided canvas context. This painted area
   * will not be visible, but instead be used to detect pointer
   * interactions with the link. The callback function has the
   * signature: linkPointerAreaPaint(<link>, <color>, <canvas context>,
   * <current global scale>).
   */
  linkPointerAreaPaint?: () => void

  // Utility
  // ============================================================
  /**
   * Returns the current bounding box of the nodes in the graph,
   * formatted as { x: [<num>, <num>], y: [<num>, <num>],
   * z: [<num>, <num>] }. If no nodes are found, returns null.
   * Accepts an optional argument to define a custom node
   * filter: node => <boolean>, which should return a truthy
   * value if the node is to be included. This can be useful
   * to calculate the bounding box of a portion of the graph.
   */
  getGraphBbox?(nodeFilter?: (node: NodeObject) => boolean): {
    x: [number, number]
    y: [number, number]
    z: [number, number]
  }
  /**
   * Utility method to translate viewport coordinates to the
   * graph domain. Given a pair of x,y screen coordinates, and
   * optionally distance from camera for 3D mode, returns the
   * current equivalent {x, y (, z)} in the domain of graph
   * node coordinates.
   */
  screen2GraphCoords?(x: number, y: number, distance: number): Coords
  /**
   * Utility method to translate node coordinates to the viewport
   * domain. Given a set of x,y(,z) graph coordinates, returns
   * the current equivalent {x, y} in viewport coordinates.
   */
  graph2ScreenCoords?(x: number, y: number, z: number): Coords
}

export default function ForceGraph(props: FGProps): JSX.Element {
  // eslint-disable-next-line
  // @ts-ignore
  return <ForceGraph3D {...props} />
}
