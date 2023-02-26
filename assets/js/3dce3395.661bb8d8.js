"use strict";(self.webpackChunkdockview_docs=self.webpackChunkdockview_docs||[]).push([[5282],{7455:(e,t,n)=>{n.d(t,{M:()=>l});var a=n(2784);const l=e=>{const t=a.useRef();return a.useLayoutEffect((()=>{t.current&&(t.current.scrollTop=Math.max(0,t.current.scrollHeight-t.current.clientHeight))}),[e.lines]),a.createElement("div",{ref:t,className:"console-container"},e.lines.map(((e,t)=>a.createElement("div",{key:t,className:"console-line"},a.createElement("span",{className:"console-line-timestamp"},(e=>{const t=e=>e<10?`0${e}`:`${e}`;return`${t(e.getHours())}:${t(e.getMinutes())}:${t(e.getSeconds())}.${e.getMilliseconds()}`})(e.timestamp)),a.createElement("span",{className:"console-line-text",style:e.css},e.text)))))}},2538:(e,t,n)=>{n.d(t,{$:()=>d});var a=n(3407),l=n(2784);const r={default:e=>l.createElement("div",{style:{padding:"10px",height:"100%",backgroundColor:"rgb(60,60,60)"}},e.params.title)},i={myHeaderComponent:e=>{const[t,n]=l.useState(e.api.isExpanded);l.useEffect((()=>{const t=e.api.onDidExpansionChange((e=>{n(e.isExpanded)}));return()=>{t.dispose()}}),[]);return l.createElement("div",{style:{padding:"0px 8px",height:"100%",backgroundColor:"rgb(60,60,60)"}},l.createElement("span",null,`Custom header for ${e.title}`),l.createElement("button",{onClick:()=>{e.api.setExpanded(!t)}},t?"Collapse":"Expand"))}},d=()=>l.createElement(a.Vm,{components:r,headerComponents:i,onReady:e=>{e.api.addPanel({id:"panel_1",component:"default",headerComponent:"myHeaderComponent",params:{title:"Panel 1"},title:"Panel 1"}),e.api.addPanel({id:"panel_2",component:"default",headerComponent:"myHeaderComponent",params:{title:"Panel 2"},title:"Panel 2"}),e.api.addPanel({id:"panel_3",component:"default",headerComponent:"myHeaderComponent",params:{title:"Panel 3"},title:"Panel 3"})},className:"dockview-theme-abyss"})},4691:(e,t,n)=>{n.d(t,{l:()=>i});var a=n(3407),l=n(2784);const r={default:e=>l.createElement("div",{style:{padding:"10px",height:"100%",backgroundColor:"rgb(60,60,60)"}},e.params.title)},i=()=>l.createElement("div",null,l.createElement("div",null,l.createElement("div",{style:{backgroundColor:"orange",padding:"0px 8px",borderRadius:"4px",width:"100px",cursor:"pointer"},draggable:!0},"Drag me")),l.createElement("div",{style:{height:"300px",backgroundColor:"rgb(30,30,30)",color:"white",margin:"20px 0px"}},l.createElement(a.Vm,{components:r,onReady:e=>{e.api.addPanel({id:"panel_1",component:"default",params:{title:"Panel 1"},title:"Panel 1"}),e.api.addPanel({id:"panel_2",component:"default",params:{title:"Panel 2"},title:"Panel 2"}),e.api.addPanel({id:"panel_3",component:"default",params:{title:"Panel 3"},title:"Panel 3"})},onDidDrop:e=>{const t=e.api.panels.indexOf(e.panel);e.api.addPanel({id:"panel_4",component:"default",params:{title:"Panel 4"},title:"Panel 4",index:t})},className:"dockview-theme-abyss"})))},3036:(e,t,n)=>{n.d(t,{o:()=>d});var a=n(3407),l=n(2784),r=n(7455);const i={default:e=>l.createElement("div",{style:{padding:"10px",height:"100%",backgroundColor:"rgb(60,60,60)"}},e.params.title)},d=()=>{const[e,t]=l.useState(!1),[n,d]=l.useState([]),p=e=>{e.api.addPanel({id:"panel_1",component:"default",params:{title:"Panel 1"},title:"Panel 1"}),e.api.addPanel({id:"panel_2",component:"default",params:{title:"Panel 2"},title:"Panel 2"}),e.api.addPanel({id:"panel_3",component:"default",params:{title:"Panel 3"},title:"Panel 3"})},o=t=>e,m=e=>{const t=`onDidDrop ${e.position} ${e.panel.id}`;d((e=>[...e,{text:t,timestamp:new Date}]))};return l.createElement("div",{style:{height:"300px",margin:"20px 0px",display:"flex",flexDirection:"column"}},l.createElement("div",{style:{height:"25px"}},l.createElement("label",null,l.createElement("span",null,"Enable external events"),l.createElement("input",{type:"checkbox",checked:e,onChange:e=>{t(e.target.checked)}}))),l.createElement("div",{style:{height:"250px",display:"flex"}},l.createElement(a.Vm,{components:i,onReady:p,className:"dockview-theme-abyss paneview-side-by-side",showDndOverlay:o,onDidDrop:m}),l.createElement(a.Vm,{components:i,onReady:p,className:"dockview-theme-abyss paneview-side-by-side",showDndOverlay:o,onDidDrop:m})),l.createElement("div",{style:{height:"100px"}},l.createElement(r.M,{lines:n})))}},5197:(e,t,n)=>{n.d(t,{p:()=>d});var a=n(3407),l=n(2784);const r={default:e=>l.createElement("div",{style:{padding:"10px",height:"100%",backgroundColor:"rgb(60,60,60)"}},e.params.title)},i={myHeaderComponent:e=>{const[t,n]=l.useState(e.api.isExpanded);l.useEffect((()=>{const t=e.api.onDidExpansionChange((e=>{n(e.isExpanded)}));return()=>{t.dispose()}}),[]);return l.createElement("div",{style:{padding:"10px",height:"100%",backgroundColor:"rgb(60,60,60)"}},l.createElement("a",{onClick:()=>{e.api.setExpanded(!t)},className:t?"expanded":"collapsed"}),l.createElement("span",null,e.params.title))}},d=()=>l.createElement(a.Vm,{components:r,headerComponents:i,onReady:e=>{e.api.addPanel({id:"panel_1",component:"default",params:{title:"Panel 1"},title:"Panel 1"}),e.api.addPanel({id:"panel_2",component:"default",params:{title:"Panel 2"},title:"Panel 2"}),e.api.addPanel({id:"panel_3",component:"default",params:{title:"Panel 3"},title:"Panel 3"})},className:"dockview-theme-abyss"})},9345:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>s,default:()=>v,frontMatter:()=>m,metadata:()=>u,toc:()=>c});var a=n(7896),l=(n(2784),n(876)),r=n(5197),i=n(2538),d=n(4691),p=n(3036),o=n(9817);const m={description:"Paneview Documentation"},s="Paneview",u={unversionedId:"components/paneview",id:"version-1.5.2/components/paneview",title:"Paneview",description:"Paneview Documentation",source:"@site/versioned_docs/version-1.5.2/components/paneview.mdx",sourceDirName:"components",slug:"/components/paneview",permalink:"/docs/1.5.2/components/paneview",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.5.2/components/paneview.mdx",tags:[],version:"1.5.2",frontMatter:{description:"Paneview Documentation"},sidebar:"tutorialSidebar",previous:{title:"Gridview",permalink:"/docs/1.5.2/components/gridview"},next:{title:"Splitview",permalink:"/docs/1.5.2/components/splitview"}},k={},c=[{value:"PaneviewReact Component",id:"paneviewreact-component",level:2},{value:"Paneview API",id:"paneview-api",level:2},{value:"Paneview Panel API",id:"paneview-panel-api",level:2},{value:"Advanced Features",id:"advanced-features",level:2},{value:"Custom Header",id:"custom-header",level:3},{value:"Drag And Drop",id:"drag-and-drop",level:3},{value:"Interactions",id:"interactions",level:3}],g={toc:c},N="wrapper";function v(e){let{components:t,...n}=e;return(0,l.kt)(N,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"paneview"},"Paneview"),(0,l.kt)("p",null,"A paneview is a collapsed collection of vertically stacked panels and panel headers.\nThe panel header will always remain visible however the panel will only be visible when the panel is expanded."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Paneview panels can be re-ordered by dragging and dropping the panel headers.")),(0,l.kt)("hr",null),(0,l.kt)("h1",{id:"introduction"},"Introduction"),(0,l.kt)("div",{style:{height:"400px",backgroundColor:"rgb(30,30,30)",color:"white",margin:"20px 0px"}},(0,l.kt)(r.p,{mdxType:"SimplePaneview"})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Simple Paneview example"',title:'"Simple',Paneview:!0,'example"':!0},"import {\n    IPaneviewPanelProps,\n    PaneviewReact,\n    PaneviewReadyEvent,\n} from 'dockview';\n\nconst components = {\n    default: (props: IPaneviewPanelProps<{ title: string }>) => {\n        return (\n            <div\n                style={{\n                    padding: '10px',\n                    height: '100%',\n                    backgroundColor: 'rgb(60,60,60)',\n                }}\n            >\n                {props.params.title}\n            </div>\n        );\n    },\n};\n\nSimplePaneview = () => {\n    const onReady = (event: PaneviewReadyEvent) => {\n        event.api.addPanel({\n            id: 'panel_1',\n            component: 'default',\n            params: {\n                title: 'Panel 1',\n            },\n            title: 'Panel 1',\n        });\n\n        event.api.addPanel({\n            id: 'panel_2',\n            component: 'default',\n            params: {\n                title: 'Panel 2',\n            },\n            title: 'Panel 2',\n        });\n\n        event.api.addPanel({\n            id: 'panel_3',\n            component: 'default',\n            params: {\n                title: 'Panel 3',\n            },\n            title: 'Panel 3',\n        });\n    };\n\n    return (\n        <PaneviewReact\n            components={components}\n            headerComponents={headerComponents}\n            onReady={onReady}\n            className=\"dockview-theme-abyss\"\n        />\n    );\n};\n")),(0,l.kt)("h2",{id:"paneviewreact-component"},"PaneviewReact Component"),(0,l.kt)("p",null,"You can create a Paneview through the use of the ",(0,l.kt)("inlineCode",{parentName:"p"},"ReactPaneview")," component."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import { ReactPaneview } from 'dockview';\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onReady"),(0,l.kt)("td",{parentName:"tr",align:null},"(event: SplitviewReadyEvent) => void"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"components"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"headerComponents"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"className"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"''"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disableAutoResizing"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(o.Z,{to:"../basics/#auto-resizing",mdxType:"Link"},"Auto Resizing"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disableDnd"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onDidDrop"),(0,l.kt)("td",{parentName:"tr",align:null},"Event"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"paneview-api"},"Paneview API"),(0,l.kt)("p",null,"The Paneview API is exposed both at the ",(0,l.kt)("inlineCode",{parentName:"p"},"onReady")," event and on each panel through ",(0,l.kt)("inlineCode",{parentName:"p"},"props.containerApi"),".\nThrough this API you can control general features of the component and access all added panels."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Paneview API via Panel component"',title:'"Paneview',API:!0,via:!0,Panel:!0,'component"':!0},"const MyComponent = (props: IGridviewPanelProps<{ title: string }>) => {\n    // props.containerApi...\n\n    return <div>{`My first panel has the title: ${props.params.title}`}</div>;\n};\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Paneview API via the onReady callback"',title:'"Paneview',API:!0,via:!0,the:!0,onReady:!0,'callback"':!0},"const onReady = (event: GridviewReadyEvent) => {\n    // event.api...\n};\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"height"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"Component pixel height")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"width"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"Component pixel width")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"minimumSize"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"The sum of the ",(0,l.kt)("inlineCode",{parentName:"td"},"minimumSize")," property for each panel")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maximumSize"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"The sum of the ",(0,l.kt)("inlineCode",{parentName:"td"},"maximumSize")," property for each panel")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"length"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"Number of panels")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"panels"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"IPaneviewPanel[]")),(0,l.kt)("td",{parentName:"tr",align:null},"All panels")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onDidLayoutChange"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Event<void>")),(0,l.kt)("td",{parentName:"tr",align:null},"Fires on layout change")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onDidLayoutFromJSON"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Event<void>")),(0,l.kt)("td",{parentName:"tr",align:null},"Fires of layout change caused by a fromJSON deserialization call")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onDidAddView"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Event<IPaneviewPanel>")),(0,l.kt)("td",{parentName:"tr",align:null},"Fires when a view is added")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onDidRemoveView"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Event<IPaneviewPanel>")),(0,l.kt)("td",{parentName:"tr",align:null},"Fires when a view is removed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onDidDrop"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Event<PaneviewDropEvent")),(0,l.kt)("td",{parentName:"tr",align:null},"Fires on an external drop event (See ",(0,l.kt)(o.Z,{to:"./paneview/#drag-and-drop",mdxType:"Link"},"Drag and Drop"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"addPanel"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"addPanel(options: AddPaneviewComponentOptions): IPaneviewPanel")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"removePanel"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(panel: IPaneviewPanel): void")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"movePanel"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(from: number, to: number): void")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"getPanel"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(id:string): IPaneviewPanel \\| undefined")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"focus"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(): void")),(0,l.kt)("td",{parentName:"tr",align:null},"Focus the active panel, if exists")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"layout"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(width: number, height:number): void")),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)(o.Z,{to:"../basics/#auto-resizing",mdxType:"Link"},"Auto Resizing"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fromJSON"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(data: SerializedPaneview): void")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(o.Z,{to:"../basics/#serialization",mdxType:"Link"},"Serialization"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"toJSON"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(): SerializedPaneview")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(o.Z,{to:"../basics/#serialization",mdxType:"Link"},"Serialization"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clear"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(): void")),(0,l.kt)("td",{parentName:"tr",align:null},"Clears the current layout")))),(0,l.kt)("h2",{id:"paneview-panel-api"},"Paneview Panel API"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"const MyComponent = (props: IGridviewPanelProps<{ title: string }>) => {\n    // props.api...\n\n    return <div>{`My first panel has the title: ${props.params.title}`}</div>;\n};\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Panel id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isFocused"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"Is panel focsed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isActive"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"Is panel active")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isVisible"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"Is panel visible")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"width"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"Panel width")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"height"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"Panel height")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onDidDimensionsChange"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Event<PanelDimensionChangeEvent>")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onDidFocusChange"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Event<FocusEvent>")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onDidVisibilityChange"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Event<VisibilityEvent>")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onDidActiveChange"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Event<ActiveEvent>")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onDidConstraintsChange"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onDidConstraintsChange: Event<PanelConstraintChangeEvent>")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setVisible"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(isVisible: boolean): void")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setActive"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(): void")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setConstraints"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(value: PanelConstraintChangeEvent2): void;")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setSize"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(event: SizeEvent): void")),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"advanced-features"},"Advanced Features"),(0,l.kt)("h3",{id:"custom-header"},"Custom Header"),(0,l.kt)("p",null,"You can provide a custom component to render an alternative header."),(0,l.kt)("div",{style:{height:"400px",backgroundColor:"rgb(30,30,30)",color:"white",margin:"20px 0px"}},(0,l.kt)(i.$,{mdxType:"CustomHeaderPaneview"})),(0,l.kt)("p",null,"You can provide a ",(0,l.kt)("inlineCode",{parentName:"p"},"headerComponent")," option when creating a panel to tell the library to use a custom header component."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"const onReady = (event: PaneviewReadyEvent) => {\n    event.api.addPanel({\n        id: 'panel_1',\n        component: 'default',\n        headerComponent: 'myHeaderComponent',\n        params: {\n            valueA: 'A',\n        },\n        title: 'Panel 1',\n    });\n};\n")),(0,l.kt)("p",null,"This header must be defined in the collection of components provided to the ",(0,l.kt)("inlineCode",{parentName:"p"},"headerComponents")," props for ",(0,l.kt)("inlineCode",{parentName:"p"},"ReactPaneivew")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import { IPaneviewPanelProps } from 'dockview';\n\nconst MyHeaderComponent = (props: IPaneviewPanelProps<{ title: string }>) => {\n    const [expanded, setExpanded] = React.useState<boolean>(\n        props.api.isExpanded\n    );\n\n    React.useEffect(() => {\n        const disposable = props.api.onDidExpansionChange((event) => {\n            setExpanded(event.isExpanded);\n        });\n\n        return () => {\n            disposable.dispose();\n        };\n    }, []);\n\n    const onClick = () => {\n        props.api.setExpanded(!expanded);\n    };\n\n    return (\n        <div\n            style={{\n                padding: '10px',\n                height: '100%',\n                backgroundColor: 'rgb(60,60,60)',\n            }}\n        >\n            <a\n                onClick={onClick}\n                className={expanded ? 'expanded' : 'collapsed'}\n            />\n            <span>{props.params.title}</span>\n        </div>\n    );\n};\n\nconst headerComponents = { myHeaderComponent: MyHeaderComponent };\n")),(0,l.kt)("h3",{id:"drag-and-drop"},"Drag And Drop"),(0,l.kt)("p",null,"If you provide the ",(0,l.kt)("inlineCode",{parentName:"p"},"PaneviewReact")," component with the prop ",(0,l.kt)("inlineCode",{parentName:"p"},"onDidDrop")," you will be able to interact with custom drop events."),(0,l.kt)(d.l,{mdxType:"DragAndDropPaneview"}),(0,l.kt)("h3",{id:"interactions"},"Interactions"),(0,l.kt)("p",null,"You can safely create multiple paneview instances within one page. They will not interact with each other by default."),(0,l.kt)("p",null,"If you wish to interact with the drop event from one paneview instance in another paneview instance you can implement the ",(0,l.kt)("inlineCode",{parentName:"p"},"showDndOverlay")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"onDidDrop")," props on ",(0,l.kt)("inlineCode",{parentName:"p"},"PaneviewReact"),"."),(0,l.kt)("p",null,"As an example see how dragging a header from one control to another will only trigger an interactable event for the developer if the checkbox is enabled."),(0,l.kt)(p.o,{mdxType:"SideBySidePaneview"}))}v.isMDXComponent=!0}}]);
//# sourceMappingURL=3dce3395.661bb8d8.js.map