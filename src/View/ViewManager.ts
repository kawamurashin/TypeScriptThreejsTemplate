namespace View
{
    //@ts-ignore
    import * as THREE from 'three';
    export class ViewManager {
        private readonly _camera:THREE.PerspectiveCamera;
        private readonly _scene:THREE.Scene;
        private readonly _renderer:THREE.WebGLRenderer;
        private readonly _mesh:THREE.Mesh;
        constructor() {
            this._camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
            this._camera.position.z = 1;
            this._scene = new THREE.Scene();
            let geometry:THREE.Geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
            let material:THREE.Material = new THREE.MeshNormalMaterial();
            this._mesh = new THREE.Mesh( geometry, material );
            this._scene.add( this._mesh );
            this._renderer = new THREE.WebGLRenderer( { antialias: true } );
            this._renderer.setSize( window.innerWidth, window.innerHeight );
            document.body.appendChild( this._renderer.domElement );
            this.resize();
        };
        public resize():void
        {
            const width = window.innerWidth;
            const height = window.innerHeight;
            this._renderer.setPixelRatio(window.devicePixelRatio);
            this._renderer.setSize(width, height);
            this._camera.aspect = width / height;
            this._camera.updateProjectionMatrix();
        }
        public enterFrame():void {
            this._mesh.rotation.x += 0.01;
            this._mesh.rotation.y += 0.02;
            this._renderer.render( this._scene, this._camera );
        };
    }
}