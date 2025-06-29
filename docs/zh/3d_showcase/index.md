# Three.js 3D 交互展示

这个页面展示了使用 Three.js 创建的交互式 3D 内容。Three.js 是一个强大的 JavaScript 库，可以在浏览器中创建和显示惊艳的 3D 图形。

## 旋转的彩色立方体

这是一个简单的 3D 立方体示例，您可以用鼠标拖动它来旋转查看。

<div id="cube-container" style="width: 100%; height: 400px; margin-bottom: 30px;"></div>

## 粒子系统

这个示例展示了 Three.js 创建的粒子系统，模拟了一个星系漩涡。

<div id="particles-container" style="width: 100%; height: 400px; margin-bottom: 30px;"></div>

## 关于 Three.js

Three.js 是一个跨浏览器的 JavaScript 库和 API，用于在网页浏览器中创建和显示 3D 计算机图形。Three.js 使用 WebGL，让开发者可以在现代浏览器中创建 GPU 加速的 3D 图形，而无需学习 WebGL 的复杂低级接口。

### 主要特性

- **3D 场景创建** - 轻松构建和管理 3D 场景
- **多种几何体** - 支持盒子、球体、圆柱体、圆环等多种预定义几何体
- **多种材质** - 支持基础、Lambert、Phong 等材质类型
- **灯光效果** - 环境光、平行光、点光源、聚光灯等
- **摄像机系统** - 包括透视和正交相机
- **动画支持** - 内置动画系统
- **加载器** - 可载入多种 3D 模型格式（如 OBJ, GLTF, FBX 等）
- **后期处理** - 各种视觉效果滤镜

### 在本站的应用

在思考代码 (Thinking In Code) 网站中，我们使用 Three.js 来：

1. **可视化展示编程概念** - 帮助读者理解复杂的编程抽象
2. **创建交互式学习体验** - 增强学习过程的互动性
3. **展示 Web 前端技术的能力** - 作为 JavaScript 高级应用的示例

## Three.js 与 WebGL 的关系

Three.js 是对底层 WebGL API 的抽象，大大简化了 3D 图形编程：

```
┌─────────────┐
│   您的代码   │
└───────┬─────┘
        │
┌───────▼─────┐
│   Three.js  │
└───────┬─────┘
        │
┌───────▼─────┐
│    WebGL    │
└───────┬─────┘
        │
┌───────▼─────┐
│ GPU 硬件加速 │
└─────────────┘
```

## 开始学习 Three.js

如果您对 Three.js 感兴趣，可以从以下资源开始：

- [Three.js 官方文档](https://threejs.org/docs/)
- [Three.js 官方示例](https://threejs.org/examples/)
- [Thinking In Code 3D编程教程](#) (即将推出)

<script src="https://cdn.jsdelivr.net/npm/three@0.132.2/build/three.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/three@0.132.2/examples/js/controls/OrbitControls.js"></script>

<script>
// 等待页面完全加载
document.addEventListener('DOMContentLoaded', function() {
    // 初始化立方体示例
    initCube();
    
    // 初始化粒子系统示例
    initParticles();
    
    // 处理窗口大小调整
    window.addEventListener('resize', function() {
        // 更新立方体场景
        if (cubeRenderer && cubeCamera && cubeContainer) {
            cubeCamera.aspect = cubeContainer.clientWidth / cubeContainer.clientHeight;
            cubeCamera.updateProjectionMatrix();
            cubeRenderer.setSize(cubeContainer.clientWidth, cubeContainer.clientHeight);
        }
        
        // 更新粒子场景
        if (particlesRenderer && particlesCamera && particlesContainer) {
            particlesCamera.aspect = particlesContainer.clientWidth / particlesContainer.clientHeight;
            particlesCamera.updateProjectionMatrix();
            particlesRenderer.setSize(particlesContainer.clientWidth, particlesContainer.clientHeight);
        }
    });
});

// 全局变量，以便在resize时可以访问
let cubeRenderer, cubeCamera, cubeContainer;
let particlesRenderer, particlesCamera, particlesContainer;

// 立方体示例初始化
function initCube() {
    // 获取容器
    cubeContainer = document.getElementById('cube-container');
    if (!cubeContainer) return;
    
    // 创建场景
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);
    
    // 创建相机
    cubeCamera = new THREE.PerspectiveCamera(
        75,
        cubeContainer.clientWidth / cubeContainer.clientHeight,
        0.1,
        1000
    );
    cubeCamera.position.z = 5;
    
    // 创建渲染器
    cubeRenderer = new THREE.WebGLRenderer({ antialias: true });
    cubeRenderer.setSize(cubeContainer.clientWidth, cubeContainer.clientHeight);
    cubeContainer.appendChild(cubeRenderer.domElement);
    
    // 创建轨道控制器
    const controls = new THREE.OrbitControls(cubeCamera, cubeRenderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    
    // 创建立方体几何体
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    
    // 创建多彩材质
    const materials = [
        new THREE.MeshBasicMaterial({ color: 0xff0000 }), // 红
        new THREE.MeshBasicMaterial({ color: 0x00ff00 }), // 绿
        new THREE.MeshBasicMaterial({ color: 0x0000ff }), // 蓝
        new THREE.MeshBasicMaterial({ color: 0xffff00 }), // 黄
        new THREE.MeshBasicMaterial({ color: 0xff00ff }), // 品红
        new THREE.MeshBasicMaterial({ color: 0x00ffff })  // 青
    ];
    
    // 创建网格
    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);
    
    // 添加一个简单旋转动画
    function animate() {
        requestAnimationFrame(animate);
        
        // 轻微自动旋转
        cube.rotation.x += 0.005;
        cube.rotation.y += 0.005;
        
        // 更新控制器
        controls.update();
        
        // 渲染场景
        cubeRenderer.render(scene, cubeCamera);
    }
    
    // 开始动画循环
    animate();
}

// 粒子系统示例初始化
function initParticles() {
    // 获取容器
    particlesContainer = document.getElementById('particles-container');
    if (!particlesContainer) return;
    
    // 创建场景
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000); // 黑色背景
    
    // 创建相机
    particlesCamera = new THREE.PerspectiveCamera(
        75,
        particlesContainer.clientWidth / particlesContainer.clientHeight,
        0.1,
        1000
    );
    particlesCamera.position.z = 50;
    
    // 创建渲染器
    particlesRenderer = new THREE.WebGLRenderer({ antialias: true });
    particlesRenderer.setSize(particlesContainer.clientWidth, particlesContainer.clientHeight);
    particlesContainer.appendChild(particlesRenderer.domElement);
    
    // 创建轨道控制器
    const controls = new THREE.OrbitControls(particlesCamera, particlesRenderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    
    // 创建粒子系统
    const particles = new THREE.Group();
    scene.add(particles);
    
    // 创建5000个粒子
    const particleCount = 5000;
    
    // 创建粒子材质
    const particleMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.5,
        transparent: true,
        opacity: 0.8
    });
    
    // 创建星系旋涡
    function createGalaxy() {
        // 创建粒子几何体
        const particleGeometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        
        // 星系参数
        const radius = 20;  // 星系半径
        const branches = 3;  // 星系旋臂数量
        const spin = 1;     // 旋臂旋转程度
        
        // 为每个粒子生成位置和颜色
        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;
            
            // 位置
            const distance = Math.random() * radius;
            const branchAngle = (i % branches) / branches * Math.PI * 2;
            const spinAngle = spin * distance;
            
            const randomX = (Math.random() - 0.5) * 2;
            const randomY = (Math.random() - 0.5) * 2;
            const randomZ = (Math.random() - 0.5) * 2;
            
            positions[i3] = Math.cos(branchAngle + spinAngle) * distance + randomX * (distance * 0.2);
            positions[i3 + 1] = randomY * (distance * 0.05);
            positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * distance + randomZ * (distance * 0.2);
            
            // 颜色 - 基于到中心的距离变化
            const colorIndex = distance / radius;
            
            // 蓝白色系
            colors[i3] = 0.5 + colorIndex * 0.5; // R
            colors[i3 + 1] = 0.5 + colorIndex * 0.5; // G
            colors[i3 + 2] = 1; // B 总是最大
        }
        
        particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        
        // 更新材质以使用顶点颜色
        particleMaterial.vertexColors = true;
        
        // 创建点云对象
        const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
        particles.add(particleSystem);
    }
    
    // 生成星系
    createGalaxy();
    
    // 动画循环
    function animate() {
        requestAnimationFrame(animate);
        
        // 旋转整个星系
        particles.rotation.y += 0.002;
        
        // 更新控制器
        controls.update();
        
        // 渲染场景
        particlesRenderer.render(scene, particlesCamera);
    }
    
    // 开始动画循环
    animate();
}
</script>
