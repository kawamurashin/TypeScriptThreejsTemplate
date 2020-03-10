var View;
(function (View) {
    class ViewManager {
        constructor() {
            this._camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
            this._camera.position.z = 1;
            this._scene = new THREE.Scene();
            let geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
            let material = new THREE.MeshNormalMaterial();
            this._mesh = new THREE.Mesh(geometry, material);
            this._scene.add(this._mesh);
            this._renderer = new THREE.WebGLRenderer({ antialias: true });
            this._renderer.setSize(window.innerWidth, window.innerHeight);
            document.body.appendChild(this._renderer.domElement);
            this.resize();
        }
        ;
        resize() {
            const width = window.innerWidth;
            const height = window.innerHeight;
            this._renderer.setPixelRatio(window.devicePixelRatio);
            this._renderer.setSize(width, height);
            this._camera.aspect = width / height;
            this._camera.updateProjectionMatrix();
        }
        enterFrame() {
            this._mesh.rotation.x += 0.01;
            this._mesh.rotation.y += 0.02;
            this._renderer.render(this._scene, this._camera);
        }
        ;
    }
    View.ViewManager = ViewManager;
})(View || (View = {}));
///<reference path="View/ViewManager.ts"/>
var ViewManager = View.ViewManager;
let main;
class Main {
    constructor() {
        const resize = () => {
            this.resizeHandler();
        };
        this._viewManager = new ViewManager();
        window.addEventListener('resize', resize);
        this.enterFrame();
    }
    enterFrame() {
        const animation = () => {
            this.enterFrame();
        };
        this._viewManager.enterFrame();
        window.requestAnimationFrame(animation);
    }
    resizeHandler() {
        this._viewManager.resize();
    }
}
window.addEventListener("load", () => {
    main = new Main();
});
//# sourceMappingURL=ts.js.map