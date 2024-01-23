import{a as oe,b as C,c as f,d as ae,e as se}from"./chunk-XWA6ENJX.js";import{a as U}from"./chunk-NLQPGGR6.js";import{b as Q,c as W,d as $,e as G,f as D,g as H,h as j,i as q,j as J,k as K,m as X,o as Y,p as Z,q as ee,r as te,s as ie,t as ne,u as re}from"./chunk-6ADUSL2Y.js";import{$ as R,Ab as M,B as T,Cb as x,Ea as o,Fa as N,Ja as V,Qa as l,T as O,Wa as _,Y as I,Zb as F,_b as B,ac as z,cb as a,da as v,db as s,ea as y,eb as p,fb as b,jb as h,kb as m,m as A,ob as d,pb as E,qb as L,ub as k,wa as w,zb as P}from"./chunk-RRF2BGP3.js";var S=class{constructor(n=0,c=1,e="",i=[]){this.pageNum=n,this.pageSize=c,this.searchQuery=e,this.excludedCategories=i}toUrlParams(){let n=Object.assign({},this);return n.pageNum=this.pageNum,n.pageSize=this.pageSize,this.searchQuery.replace(/\s/g,"")!=""&&(n.searchQuery=this.searchQuery),this.excludedCategories.length!=0&&(n.excludedCategories=this.excludedCategories.toString()),n}};var le=(()=>{let n=class n{constructor(e){this.http=e,this.url=`${se.API_URL}/api/categories`}getCategories(e){let i=this.url,t=e.toUrlParams();return this.http.get(i,{params:t}).pipe(T(g=>(console.log(g),A(()=>new Error(`
          CategoryService.getCategories(params: CategoryRequestDTO): Observable<Page<Category>>;
          Error while attempting GET to ${i}.
          With params: ${JSON.stringify(t)}.
          ${g}
          `)))))}};n.\u0275fac=function(i){return new(i||n)(I(U))},n.\u0275prov=O({token:n,factory:n.\u0275fac,providedIn:"root"});let r=n;return r})();var ge=["accordion"],me=["first"];function pe(r,n){r&1&&(a(0,"div")(1,"h2"),d(2,"Selected Categories"),s(),p(3,"hr"),s())}function ue(r,n){if(r&1){let c=b();a(0,"div",23)(1,"button",24),h("click",function(){v(c);let i=m().$implicit,t=m(2);return y(t.unselectCategory(i))}),d(2),s()()}if(r&2){let c=m().$implicit;o(2),E(c.name)}}function _e(r,n){r&1&&p(0,"hr")}function he(r,n){if(r&1&&(a(0,"div"),_(1,ue,3,1,"div",22)(2,_e,1,0,"hr",19),s()),r&2){let c=n.$implicit,e=m(2);o(),l("ngIf",e.categoryIsClean(c)),o(),l("ngIf",!e.categoryIsLast(c))}}function Ce(r,n){if(r&1&&(a(0,"div"),_(1,pe,4,0,"div",19)(2,he,3,2,"div",21),s()),r&2){let c=m();o(),l("ngIf",c.categoryIsClean(c.categoryParams.excludedCategories[0])),o(),l("ngForOf",c.categoryParams.excludedCategories)}}function fe(r,n){r&1&&p(0,"br")}function Se(r,n){if(r&1){let c=b();a(0,"div")(1,"div",23)(2,"button",25),h("click",function(){v(c);let i=m().$implicit,t=m();return y(t.selectCategory(i))}),d(3),s()(),_(4,fe,1,0,"br",19),s()}if(r&2){let c=m().$implicit,e=m();o(3),E(c.name),o(),l("ngIf",!e.categoryIsLast(c))}}function ve(r,n){if(r&1&&(a(0,"div"),_(1,Se,5,2,"div",19),s()),r&2){let c=n.$implicit,e=m();o(),l("ngIf",e.categoryIsClean(c))}}var Qe=(()=>{let n=class n{constructor(e){this.categoryService=e,this.ordering={default:"NONE",MOST_POPULAR:"MOST_POPULAR",LEAST_POPULAR:"LEAST_POPULAR",MOST_REVIEWS:"MOST_REVIEWS",LEAST_REVIEWS:"LEAST_REVIEWS",MOST_RATINGS:"MOST_RATINGS",LEAST_RATINGS:"LEAST_RATINGS"},this.controlSubmitEvent=new V,this.params=new oe(0,6),this.categoryParams=new S(0,6),this.sortOrder=this.ordering.default,this.categoryPage=new ae}ngOnInit(){this.reloadAll()}setProductCategories(){this.params.categories=[...this.categoryParams.excludedCategories]}unselectCategory(e){let i=this.categoryParams.excludedCategories.filter(t=>t.id!==e.id&&t!==null&&t!==void 0);this.categoryParams.excludedCategories=i,this.reloadAll()}selectCategory(e){this.categoryParams.excludedCategories.push(e),this.reloadAll()}reloadAll(){this.reloadCategories(),this.updateOrdering(),this.emitEvent()}emitEvent(){this.setProductCategories(),this.controlSubmitEvent.emit(this.params)}reloadCategories(){this.categoryService.getCategories(this.categoryParams).subscribe({next:e=>{this.categoryPage=Object.assign({},e)}})}updateOrdering(){let e,i;switch(this.sortOrder){case this.ordering.MOST_POPULAR:e=C.popularity,i=f.descending;break;case this.ordering.LEAST_POPULAR:e=C.popularity,i=f.ascending;break;case this.ordering.MOST_REVIEWS:e=C.reviews,i=f.descending;break;case this.ordering.LEAST_REVIEWS:e=C.reviews,i=f.ascending;break;case this.ordering.MOST_RATINGS:e=C.ratings,i=f.descending;break;case this.ordering.LEAST_RATINGS:e=C.ratings,i=f.descending;break;default:e=null,i=null}this.params.groupBy=e,this.params.orderBy=i,this.emitEvent()}selectedIsEmpty(){return this.categoryParams.excludedCategories.length===0}categoryIsClean(e){return e!=null}categoryIsLast(e){return this.categoryPage.content[this.categoryPage.content.length-1]===e}isMobile(){return!window.matchMedia("(min-width: 768px)").matches}handleResize(e){let i=this.isMobile(),t=this.accordion.isExpanded("first");(!i&&!t||i&&t)&&this.accordion.toggle("first")}};n.\u0275fac=function(i){return new(i||n)(N(le))},n.\u0275cmp=R({type:n,selectors:[["app-products-controls-sidebar"]],viewQuery:function(i,t){if(i&1&&(M(ge,5),M(me,5)),i&2){let g;P(g=x())&&(t.accordion=g.first),P(g=x())&&(t.first=g.first)}},hostBindings:function(i,t){i&1&&h("resize",function(u){return t.handleResize(u)},!1,w)},outputs:{controlSubmitEvent:"controlSubmitEvent"},standalone:!0,features:[k],decls:54,vars:17,consts:[["ngbAccordion",""],["accordion","ngbAccordion"],["ngbAccordionItem","first",3,"collapsed"],["first","ngbAccordionItem"],["ngbAccordionHeader","",1,"p-sm-3"],["ngbAccordionButton","",3,"hidden"],["ngbAccordionCollapse",""],["ngbAccordionBody",""],["accordianBody",""],[1,"p-sm-3","p-2"],["name","displayFilters"],[1,"selector"],["for","formControlRange"],["name","displayAmount",1,"custom-select","form-control",3,"ngModel","ngModelChange"],[3,"ngValue"],["name","orderBy",1,"custom-select","form-control",3,"ngModel","ngModelChange"],["for","customRange3",1,"form-label"],["type","range","min","0","max","5","step","0.5","name","customRange3",1,"form-range",3,"ngModel","ngModelChange"],["id","categories",1,"p-sm-3","p-2"],[4,"ngIf"],[1,"mt-3"],[4,"ngFor","ngForOf"],["class","category",4,"ngIf"],[1,"category"],[1,"selected-category","category-selector",3,"click"],[1,"category-selector",3,"click"]],template:function(i,t){i&1&&(a(0,"div",0,1)(2,"div",2,3)(4,"h2",4)(5,"button",5),d(6,"Filter & Sort"),s()(),a(7,"div",6)(8,"div",7,8)(10,"div",9)(11,"form",10)(12,"div",11)(13,"label",12)(14,"small"),d(15,"Display Per Page"),s()(),p(16,"br"),a(17,"select",13),h("ngModelChange",function(u){return t.params.pageSize=u})("ngModelChange",function(){return t.emitEvent()}),a(18,"option",14),d(19,"6"),s(),a(20,"option",14),d(21,"9"),s(),a(22,"option",14),d(23,"18"),s(),a(24,"option",14),d(25,"32"),s()()(),p(26,"br"),a(27,"div",11)(28,"label",12)(29,"small"),d(30,"Sort By"),s()(),p(31,"br"),a(32,"select",15),h("ngModelChange",function(u){return t.sortOrder=u})("ngModelChange",function(){return t.updateOrdering()}),a(33,"option",14),d(34,"None"),s(),a(35,"option",14),d(36,"Most Popular"),s(),a(37,"option",14),d(38,"Least Popular"),s(),a(39,"option",14),d(40,"Most Reviews"),s(),a(41,"option",14),d(42,"Least Reviews"),s()()(),p(43,"br"),a(44,"div")(45,"label",16),d(46),s(),a(47,"input",17),h("ngModelChange",function(u){return t.params.minRating=u})("ngModelChange",function(){return t.emitEvent()}),s()()()(),a(48,"div",18),_(49,Ce,3,2,"div",19),a(50,"h2",20),d(51,"Categories"),s(),p(52,"hr"),_(53,ve,2,1,"div",21),s()()()()()),i&2&&(o(2),l("collapsed",t.isMobile()),o(3),l("hidden",!t.isMobile()),o(12),l("ngModel",t.params.pageSize),o(),l("ngValue",6),o(2),l("ngValue",9),o(2),l("ngValue",18),o(2),l("ngValue",32),o(8),l("ngModel",t.sortOrder),o(),l("ngValue",t.ordering.default),o(2),l("ngValue",t.ordering.MOST_POPULAR),o(2),l("ngValue",t.ordering.LEAST_POPULAR),o(2),l("ngValue",t.ordering.MOST_REVIEWS),o(2),l("ngValue",t.ordering.LEAST_REVIEWS),o(5),L("Min Rating:\xA0",t.params.minRating," Stars"),o(),l("ngModel",t.params.minRating),o(2),l("ngIf",!t.selectedIsEmpty()),o(4),l("ngForOf",t.categoryPage.content))},dependencies:[z,F,B,re,ee,ne,ie,te,Y,Z,X,H,J,K,Q,j,q,W,$,D,G],styles:[".category-selector[_ngcontent-%COMP%]{width:80%;word-wrap:break-word;background-color:inherit;border:none;font-size:large;font-weight:bolder}.category-selector[_ngcontent-%COMP%]:hover{font-size:1.3rem;transition:.2s;opacity:90%}.selected-category[_ngcontent-%COMP%]{color:purple}#categories[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{text-align:start}"]});let r=n;return r})();export{Qe as ProductsControlsSidebarComponent};