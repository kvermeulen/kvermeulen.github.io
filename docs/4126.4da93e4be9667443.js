"use strict";(self.webpackChunkangular_anb=self.webpackChunkangular_anb||[]).push([[4126],{54126:(P,r,t)=>{t.r(r),t.d(r,{default:()=>M});var i=t(15861),e=t(17626),o=t(63290),E=t(10699),n=t(77712),h=(t(85931),t(8314),t(90912),t(76898)),d=t(91757),D=t(37384),l=t(67802),y=t(45611),C=t(94421);const c=o.Z.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D");let s=class extends((0,C.y)((0,D.y)(y.Z))){update(_){this.strategy.update(_).catch(a=>{(0,E.D_)(a)||c.error(a)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new d.c,this.container.addChild(this._bitmapContainer),this.strategy=new l.Z({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(_,a,O){return this.layer.fetchImage(_,a,O)}doRefresh(){var _=this;return(0,i.Z)(function*(){_.requestUpdate()})()}isUpdating(){return this.strategy.updating||this.updateRequested}};(0,e._)([(0,n.Cb)()],s.prototype,"strategy",void 0),(0,e._)([(0,n.Cb)()],s.prototype,"updating",void 0),s=(0,e._)([(0,h.j)("esri.views.2d.layers.BaseDynamicLayerView2D")],s);const M=s}}]);