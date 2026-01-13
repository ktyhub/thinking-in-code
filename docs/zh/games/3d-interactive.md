# 🌟 Three.js 3D 交互展示

这个页面展示了使用 Three.js 创建的交互式 3D 内容。Three.js 是一个强大的 JavaScript 库，可以在浏览器中创建和显示 3D 图形。

## 旋转的彩色立方体

下面展示的是一个可以用鼠标交互的3D立方体示例。您可以拖动鼠标来旋转立方体，使用滚轮缩放。

<div id="3d-container" style="width: 100%; height: 400px;"></div>

<script src="https://cdn.jsdelivr.net/npm/three@0.132.2/build/three.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/three@0.132.2/examples/js/controls/OrbitControls.js"></script>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // 初始化场景
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);
    
    // 初始化相机
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    
    // 初始化渲染器
    const container = document.getElementById('3d-container');
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);
    
    // 添加轨道控制
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    
    // 创建立方体
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    
    // 创建多个面的材质
    const materials = [
        new THREE.MeshBasicMaterial({color: 0xff0000}),  // 红色
        new THREE.MeshBasicMaterial({color: 0x00ff00}),  // 绿色
        new THREE.MeshBasicMaterial({color: 0x0000ff}),  // 蓝色
        new THREE.MeshBasicMaterial({color: 0xffff00}),  // 黄色
        new THREE.MeshBasicMaterial({color: 0xff00ff}),  // 品红色
        new THREE.MeshBasicMaterial({color: 0x00ffff})   // 青色
    ];
    
    // 创建网格
    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);
    
    // 添加环境光
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    // 添加平行光
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);
    
    // 动画循环
    function animate() {
        requestAnimationFrame(animate);
        
        // 更新控制器
        controls.update();
        
        // 渲染场景
        renderer.render(scene, camera);
    }
    
    // 窗口大小调整处理
    window.addEventListener('resize', function() {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });
    
    // 开始动画
    animate();
});
</script>

## Three.js 的基本概念

Three.js 是构建 3D 网页应用程序的流行选择，它封装了 WebGL 的复杂性，提供了更简单的 API。以下是一些核心概念：

### 1. 场景 (Scene)

场景是所有 3D 对象存在的空间。它就像一个容器，可以添加、移除和组织各种对象。

```javascript
const scene = new THREE.Scene();
```

### 2. 相机 (Camera)

相机定义了观察场景的视角。最常用的是透视相机 (PerspectiveCamera)，它模拟人眼的视觉。

```javascript
const camera = new THREE.PerspectiveCamera(
    75,                              // 视场角度
    window.innerWidth / window.innerHeight,  // 宽高比
    0.1,                             // 近裁剪面
    1000                             // 远裁剪面
);
```

### 3. 渲染器 (Renderer)

渲染器负责将场景和相机的信息绘制到 HTML 页面上。

```javascript
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
```

### 4. 网格 (Mesh)

网格由几何体和材质组成，是可见的 3D 对象。

```javascript
// 几何体定义形状
const geometry = new THREE.BoxGeometry(1, 1, 1);

// 材质定义外观
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

// 网格结合了几何体和材质
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
```

### 5. 控制器 (Controls)

控制器允许用户与 3D 场景交互，例如旋转、平移和缩放。

```javascript
const controls = new THREE.OrbitControls(camera, renderer.domElement);
```

### 6. 动画循环

动画循环不断更新和渲染场景，创建流畅的动画效果。

```javascript
function animate() {
    requestAnimationFrame(animate);
    
    // 更新对象
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    
    // 渲染场景
    renderer.render(scene, camera);
}
animate();
```

## Three.js 应用场景

Three.js 在许多领域有广泛应用：

- **产品展示**：3D 产品可视化
- **数据可视化**：复杂数据的 3D 表示
- **游戏开发**：浏览器内的 3D 游戏
- **建筑和室内设计**：3D 建筑模型展示
- **教育**：交互式学习工具

## 在编程学习中的价值

学习 Three.js 不仅能够让您的网站更具吸引力，还能帮助您理解多个编程概念：

1. **3D 数学和图形编程**：向量、矩阵和图形渲染原理
2. **面向对象编程**：Three.js 使用类和对象构建复杂系统
3. **事件驱动编程**：处理用户交互和动画循环
4. **性能优化**：学习 3D 图形的性能考量

## 下一步探索

如果您对 Three.js 感兴趣，可以尝试以下进阶概念：

- 加载外部 3D 模型 (.obj, .gltf)
- 实现物理效果
- 添加粒子系统
- 创建后期处理效果

Three.js 为 Web 开发者打开了 3D 世界的大门，结合您现有的 JavaScript 知识，您可以创建令人惊叹的交互式体验！
