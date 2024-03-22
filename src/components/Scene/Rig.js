import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

function Rig() {
  // useFrame: 각 프레임마다 실행할 함수를 등록.
  // Three.js의 requestAnimationFrame 루프 내에서 동작
  // 애니메이션, 오브젝트의 위치/회전/크기 변경 등을 수행할 수 있음
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position, // 대상이 되는 벡터 (카메라의 위치)
      [Math.sin(-state.pointer.x) * 5, -state.pointer.y * 3.5, 15 + Math.cos(state.pointer.x) * 10], // 목표지점의 벡터(마우스 포인터의 위치)
      0.35, // 속도
      delta, // damping factor, delta: 프레임간의 시간 간격
    );
    state.camera.lookAt(0, 0, 1);
  });
};

export default Rig;