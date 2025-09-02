import * as THREE from 'https://esm.sh/three@0.160.0';
import { OrbitControls } from 'https://esm.sh/three@0.160.0/examples/jsm/controls/OrbitControls.js';

const canvas = document.getElementById('threeCanvas');

function setRendererSize(renderer, camera) {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    renderer.setPixelRatio(DPR);
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
}

try {
    const {
        Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshStandardMaterial, Mesh, Color, AmbientLight, DirectionalLight, sRGBEncoding, ACESFilmicToneMapping
    } = THREE;

    const scene = new Scene();
    scene.background = new Color('#0f1115');

    const camera = new PerspectiveCamera(60, 16 / 9, 0.1, 100);
    camera.position.set(1.4, 1.2, 2.2);
    camera.lookAt(0, 0, 0);

    const renderer = new WebGLRenderer({ canvas, antialias: true });
    renderer.outputEncoding = sRGBEncoding;
    renderer.toneMapping = ACESFilmicToneMapping;

    const cube = new Mesh(new BoxGeometry(1, 1, 1), new MeshStandardMaterial({
        color: '#7aa2ff', roughness: .35, metalness: .2
    }));
    scene.add(cube);

    scene.add(new AmbientLight(0xffffff, .6));
    const dir = new DirectionalLight(0xffffff, .9);
    dir.position.set(2, 2, 2);
    scene.add(dir);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.enablePan = false;
    controls.minDistance = 1.4;
    controls.maxDistance = 5;
    controls.minPolarAngle = 0.05;
    controls.maxPolarAngle = Math.PI - 0.05;
    controls.target.copy(cube.position);
    controls.update();

    const ro = new ResizeObserver(() => setRendererSize(renderer, camera));
    ro.observe(canvas);
    setRendererSize(renderer, camera);

    let t = 0;
    renderer.setAnimationLoop(() => {
        t += 0.01;
        cube.rotation.x = t * 0.8;
        cube.rotation.y = t * 1.1;

        controls.update();
        renderer.render(scene, camera);
    });

    window.addEventListener('resize', () => setRendererSize(renderer, camera));
    window.matchMedia('(orientation: portrait)').addEventListener?.('change', () => setRendererSize(renderer, camera));
} catch (err) {
    console.warn('Three.js 로드 실패 — 데모를 건너뜁니다.', err);
}