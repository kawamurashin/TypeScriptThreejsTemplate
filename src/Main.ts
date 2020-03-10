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
    }
    private resizeHandler():void
    {
        this._viewManager.resize();
    }
}

window.addEventListener("load", () => {
    main = new Main();
});