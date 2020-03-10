///<reference path="View/ViewManager.ts"/>
import ViewManager = View.ViewManager;
let main:Main;
class Main {
    private _viewManager:ViewManager;
    constructor() {
        const resize =() =>
        {
            this.resizeHandler();
        };
        this._viewManager = new ViewManager();
        window.addEventListener('resize', resize);
        this.enterFrame();
    }
    private enterFrame():void
    {
        const animation = () =>
        {
            this.enterFrame();
        };
        this._viewManager.enterFrame();
        window.requestAnimationFrame( animation );
    }
    private resizeHandler():void
    {
        this._viewManager.resize();
    }
}

window.addEventListener("load", () => {
    main = new Main();
});