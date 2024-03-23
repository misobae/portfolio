import { Html, useProgress } from "@react-three/drei";
function Loader() {
  const { progress } = useProgress()
  return (
    <Html
      center
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        backgroundColor: "#090b16"
      }}>
        <strong style={{ marginRight: '1em', fontWeight: 800 }}>{progress}%</strong> loaded
      </Html>
  )
}

export default Loader;