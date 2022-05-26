"use strict";(self.webpackChunkdockview_docs=self.webpackChunkdockview_docs||[]).push([[180],{882:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"/math/math","metadata":{"permalink":"/docs2/blog/math/math","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/math/math.mdx","source":"@site/blog/math/math.mdx","title":"math/math","description":"Wondering how to create a resizable split view, pane or window; whichever you may call it?","date":"2022-05-25T22:29:28.000Z","formattedDate":"May 25, 2022","tags":[],"readingTime":10.585,"truncated":false,"authors":[],"frontMatter":{},"nextItem":{"title":"Dockview 1.4.3","permalink":"/docs2/blog/dockview-1.4.3-release"}},"content":"import { Splitview } from \'../../src/components/splitview/math\';\\n\\nWondering how to create a resizable split view, pane or window; whichever you may call it?\\nHere\'s a langauge indepedant walkthrough of how to design a split view control from scratch and the simple math behind it.\\nYou will find links to all examples which are written using TypeScript.\\n\\nHere\'s the end result and you can continue to read on to see how we got here.\\n\\n<Splitview mode={3} debug={false} />\\n\\n## First of all, what is a split view control?\\n\\nNot all split view controls are born equal, but for our purposes\\n\\n> A split view control is comprised from a number of \'views\' layed out either horizontally or vertically.\\n> Each view can be indepedantly resized by dragging on the edge of a particular view.\\n\\nIn order to explain how this works we are going to need some more in-depth definitions so lets start with the two\\nfundamental components of this control, the <b>View</b> and the <b>Sash</b> (I will explain).\\nThe below assumes the split view control has <b>n</b> views, where n is positive number.\\nFor example if n=4 then our split view controls has 4 views. This generic approach will make it much easier to explain going forwards.\\n\\n<div>\\n    <div>View</div>\\n    <ul style={{ marginLeft: \'40px\' }}>\\n        <li>\\n            The size of the n<sup>th</sup> view will be known as V<sub>n</sub>\\n        </li>\\n        <li>\\n            The minimum size of the n<sup>th</sup> view will be known as V\\n            <sup>min</sup>\\n            <sub>n</sub>\\n        </li>\\n        <li>\\n            The maximum size of the n<sup>th</sup> view will be known as V\\n            <sup>max</sup>\\n            <sub>n</sub>\\n        </li>\\n    </ul>\\n</div>\\n\\nAdditional by definition we can known V<sup>min</sup><sub>n</sub> <= V<sub>n</sub> <= V<sup>max</sup><sub>n</sub>\\n\\nTo be able to resize a view we need to be able to drag on the edge of a view to increase or decrease it\'s size.\\nThis can be achieved by introducing a narrow component that sits between each view acting as a \'drag handle\'.\\nWe will call this component a <b>Sash</b> because sash is also the word for those [windows](https://en.wikipedia.org/wiki/Sash_window) with movable panels.\\n\\n<div>\\n  <div>Sash</div>\\n  <ul style={{marginLeft: \\"40px\\"}}>\\n    <li>If we have n views then we will have n-1 sashes. There is no sash before V<sub>0</sub> nor after V<sub>n</sub></li>\\n    <li>The sash between V<sub>n</sub> and V<sub>n+1</sub> is known as S<sub>n</sub></li>\\n    <li>The sash is of fixed width, and it\'s sole purpose is to act a drag-handle for resizing views</li>\\n\\n  </ul>\\n</div>\\n\\nThis now gives us a definition of the split view control but in additional to that, to calculate the new view sizes\\nafter a sash is dragged we need to know which sash is being dragged.\\nWe will denote the sash S<sub>i</sub> as the sash to drag going forwards we can reference the following diagram.\\n\\n![alt txt](./visual_1.jpg)\\n\\nIf we are to drag the sash S<sub>i</sub> then we need to also know how far along the x-axis, or the horizontal-axis we have travelled.\\nWe can denote this as the delta, using the symbol \u0394.\\nDelta is only limited by how wide the screen is so for this purpose we can say it ranges from negative to positive infinity, that is -\u221e < \u0394 < \u221e .\\n\\nIn reality as you will see we will apply a set of constraints on the value of \u0394 reducing it\'s overall set of valid values.\\n\\n## Iteration #1 - The naive approach (aka. the accordian)\\n\\nAs I add delta I increase view sizes and as I remove delta I decrease view sizes.\\nA rather naive approach but it could look something like this:\\n\\n-   as the sash moves left shrink each view to the left and as the sash moves right expand each view to left, from right-most to left-most in both caes.\\n-   If there is enough delta to shrink a view to it\'s mimimum size then move onto the next view, and if we have enough delta to expand a view to it\'s maximum size then again move onto the next view.\\n-   Shrink no more once everything to the left is at minimums and expand no more once everything to the left is at maximums\\n-   We don\'t manipulate any views to the right of the active sash S<sub>i</sub>\\n\\nYou should be able to show each of the four points above hold true for the below interactive example.\\nYou\'ll see that changes to the right will always remain at zero because we are not manipulating views to the right of the active sash.\\n\\n<Splitview mode={1} debug={true} />\\n\\nThere are some obvious flaws with this approach but before we go into that lets put this implemenation in psuedocode using our definitions\\nfrom above where we drag sash S<sub>i</sub> by an amount \u0394\\n\\n<div\\n    style={{\\n        display: \'inline-block\',\\n        marginLeft: \'20px\',\\n        marginBottom: \'20px\',\\n        borderLeft: \'2px solid black\',\\n    }}\\n>\\n    <div className=\\"markdown-line\\">\\n        \u0394<sub>remaining</sub> = \u0394\\n    </div>\\n    <div className=\\"markdown-line\\">\\n        <span style={{ fontWeight: \'bold\' }}>for</span>\\n        <span>\\n            (<span style={{ fontStyle: \'italic\' }}>j = i; j >= 0; i--</span>)\\n        </span>\\n        <span style={{ fontWeight: \'bold\' }}> do</span>\\n    </div>\\n    <div className=\\"markdown-line indent-1\\">\\n        <span>\\n            V<sup>next</sup>\\n            <sub>j</sub> = <span style={{ fontWeight: \'bold\' }}>Min</span>(V<sup>\\n                max\\n            </sup>\\n            <sub>j</sub>, <span style={{ fontWeight: \'bold\' }}>Max</span>(V\\n            <sup>min</sup>\\n            <sub>j</sub>, V<sub>j</sub> + \u0394<sub>remaining</sub>))\\n        </span>\\n    </div>\\n    <div className=\\"markdown-line indent-1\\">\\n        <span>\\n            V<sup>\u0394</sup>\\n            <sub>j</sub> = V<sup>next</sup>\\n            <sub>j</sub> - V<sub>j</sub>\\n        </span>\\n    </div>\\n    <div className=\\"markdown-line indent-1\\">\\n        <span>\\n            \u0394<sub>remaining</sub> = \u0394<sub>remaining</sub> - V<sup>\u0394</sup>\\n            <sub>j</sub>\\n        </span>\\n    </div>\\n    <div className=\\"markdown-line indent-1\\">\\n        <span>\\n            V<sub>j</sub> = V<sup>next</sup>\\n            <sub>j</sub>\\n        </span>\\n    </div>\\n</div>\\n\\nor in plain text\\n\\n<div\\n    style={{\\n        borderLeft: \'2px solid black\',\\n        margin: \'0px 20px 20px 20px\',\\n        display: \'flex\',\\n        flexDirection: \'row\',\\n    }}\\n>\\n    <div\\n        style={{ borderRight: \'2px solid black\', flexShrink: 0, width: \'20px\' }}\\n    >\\n        <div style={{ display: \'flex\', justifyContent: \'center\' }}>1</div>\\n        <div style={{ display: \'flex\', justifyContent: \'center\' }}>2</div>\\n        <div style={{ display: \'flex\', justifyContent: \'center\' }}>3</div>\\n        <div style={{ display: \'flex\', justifyContent: \'center\' }}>4</div>\\n    </div>\\n    <div style={{ flexGrow: 1, marginLeft: \'20px\' }}>\\n        <div>\\n            For each view j to the left of the sash we have dragged, from\\n            right-most to left-most\\n        </div>\\n        <div>\\n            Add the delta to the view j (clamped at either the maximum or\\n            minimum value)\\n        </div>\\n        <div>\\n            Subtract the different between the new and old size (the used delta)\\n            from the remaining delta\\n        </div>\\n        <div>repeat</div>\\n    </div>\\n</div>\\n\\nGoing back to that obvious flaw, the width of the control does not remain constant. It flexes with \u0394.\\n\\n## Iteration #2 - \u0394 is added. Then \u0394 must be removed\\n\\nWe want a component of constant width and we dont want to think too hard.\\nSo If I have added \u0394 to the left then I should add -\u0394 (or remove \u0394) on the right, and vice-versa; right? Nearly.\\n\\n<Splitview mode={2} debug={true} />\\n\\nThere are some more subtle flaws with this approach; but lets describe it in psuedocode first.\\nWe now need another variable to track the delta we\'ve added on the left, \u0394<sub>used</sub>.\\nAfter we\'ve applied changes to the left side we\'ll substract this \u0394<sub>used</sub> from the right side which should keep the width of our control at a\\nconstant size.\\n\\n<div style={{display: \\"inline-block\\", marginLeft: \\"20px\\", marginBottom: \\"20px\\", borderLeft: \\"2px solid black\\"}}>\\n    <div className=\\"markdown-line\\">\\n        \u0394<sub>remaining</sub> = \u0394\\n    </div>\\n     <div className=\\"markdown-line markdown-highlight\\">\\n        \u0394<sub>used</sub> = 0\\n    </div>\\n     <div className=\\"markdown-line\\">\\n      <span style={{fontWeight: \\"bold\\"}}>for</span><span>(<span style={{fontStyle: \\"italic\\"}}>j = i; j >= 0; i--</span>)</span>\\n      <span style={{fontWeight: \\"bold\\"}}> do</span>\\n    </div>\\n    <div className=\\"markdown-line indent-1\\">\\n      <span>\\n          V<sup>next</sup><sub>j</sub> = <span style={{fontWeight: \\"bold\\"}}>Min</span>(V<sup>max</sup><sub>j</sub>, <span style={{fontWeight: \\"bold\\"}}>Max</span>(V<sup>min</sup><sub>j</sub>, V<sub>j</sub> + \u0394<sub>remaining</sub>))\\n      </span>\\n    </div>\\n     <div className=\\"markdown-line indent-1\\">\\n      <span>\\n            V<sup>\u0394</sup><sub>j</sub> = V<sup>next</sup><sub>j</sub> - V<sub>j</sub>\\n      </span>\\n    </div>\\n    <div className=\\"markdown-line indent-1\\">\\n      <span>\\n      \u0394<sub>remaining</sub> = \u0394<sub>remaining</sub> - V<sup>\u0394</sup><sub>j</sub>\\n      </span>\\n    </div>\\n    <div className=\\"markdown-line indent-1 markdown-highlight\\">\\n      <span>\\n      \u0394<sub>used</sub> = \u0394<sub>used</sub> + V<sup>\u0394</sup><sub>j</sub>\\n      </span>\\n    </div>\\n    <div className=\\"markdown-line indent-1\\">\\n      <span>\\n        V<sub>j</sub> = V<sup>next</sup><sub>j</sub>\\n      </span>\\n    </div>\\n\\n<div style={{height: \\"0px\\", width: \\"100%\\", marginBottom: \\"20px\\"}}/>\\n<div className=\\"markdown-line markdown-highlight\\">\\n<span style={{fontWeight: \\"bold\\"}}>for</span><span>(<span style={{fontStyle: \\"italic\\"}}>{\\"j = i+1; j < n; i++\\"}</span>)</span>\\n<span style={{fontWeight: \\"bold\\"}}> do</span>\\n</div>\\n<div className=\\"markdown-line markdown-highlight indent-1\\">\\n<span>\\n    V<sup>next</sup><sub>j</sub> = <span style={{fontWeight: \\"bold\\"}}>Min</span>(V<sup>max</sup><sub>j</sub>, <span style={{fontWeight: \\"bold\\"}}>Max</span>(V<sup>min</sup><sub>j</sub>,V<sub>j</sub> - \u0394<sub>used</sub>))\\n</span>\\n</div>\\n<div className=\\"markdown-line markdown-highlight indent-1\\">\\n<span>\\n    V<sup>\u0394</sup><sub>j</sub> = V<sup>next</sup><sub>j</sub> - V<sub>j</sub>\\n</span>\\n</div>\\n<div className=\\"markdown-line markdown-highlight indent-1\\">\\n<span>\\n\u0394<sub>used</sub> = \u0394<sub>used</sub> + V<sup>\u0394</sup><sub>j</sub>\\n</span>\\n</div>\\n<div style={{marginBottom: \\"20px\\"}} className=\\"markdown-line markdown-highlight indent-1\\">\\n<span>\\nV<sub>j</sub> = V<sup>next</sup><sub>j</sub>\\n</span>\\n</div>\\n</div>\\n\\nGo back and try to minimise or maximise every view in the container. The width is no longer preserved, you can see at some point the change to the left\\nis not longer eqaul to the change on the right, which causes the container to once again flex.\\n\\n## Iteration #3 - Constraining the values of \u0394\\n\\nIn the cases where iteration #2 is not working correctly this can be explained as either adding or removing too much delta.\\nFortunately it turns out there are a few constraints we can define on delta to help with this.\\nFor a sash S<sub>i</sub> lets think about the minimum and maximum amount of delta we can use.\\nTry to follow the explainations first and then we will use another interactive example and diagram to reinforce the explaination.\\n\\n> S<sub>i</sub> can go no further left that the sum of the minimum sizes of the views to the left, and can go no further right than the sum of the\\n> minimum sizes of the views to the right; because otherwise you would end up with at least one view that is smaller than it\'s specified minimum.\\n\\n> Another less obvious condition on S<sub>i</sub> is that it can go no further left that the sum of the maximum sizes of the views to the right, and can go no further\\n> right than the sum of maximum sizes to the left; because otherwise you would end up with at least one view that is larger than it\'s specified maximum.\\n\\nThis leaves us with 4 constraints we need to apply on \u0394; but since \u0394 is relative to S<sub>i</sub> first of all we need these\\nconstraints relative to S<sub>i</sub>. That is to say what amount of \u0394 is equivalent to the constraints we just described.\\n\\nWhen the views to the left of S<sub>i</sub> are all at minimum size we will call the distance between here and \u0394 to be \u0394<sup>min</sup><sub>left</sub>.\\nThis distance would be the sum of the differences between\\nV<sup>min</sup><sub>j</sub> and V<sub>j</sub> for each view, or in more format notation we could write this as\\n\\n<div style={{ margin: \'20px\' }}>\\n    <span>\\n        \u0394<sup>min</sup>\\n        <sub>left</sub> = \u03a3 V<sup>min</sup>\\n        <sub>j</sub> - V<sub>j</sub>\\n    </span>\\n    <span style={{ marginLeft: \'20px\' }}>j = i,...0</span>\\n</div>\\n\\nSimilarly we can work out the distance between S<sub>i</sub> and the point at each every view to the left is at its\\nmaximum size as the sum of differences between V<sup>max</sup><sub>j</sub> an V<sub>j</sub>\\n\\n<div style={{ margin: \'20px\' }}>\\n    <span>\\n        \u0394<sup>max</sup>\\n        <sub>left</sub> = \u03a3 V<sup>max</sup>\\n        <sub>j</sub> - V<sub>j</sub>\\n    </span>\\n    <span style={{ marginLeft: \'20px\' }}>j = i,...0</span>\\n</div>\\n\\nThe same logic can be applied to work out those values for \u0394<sup>min</sup><sub>right</sub> and \u0394<sup>max</sup><sub>right</sub>\\n\\n<div style={{ margin: \'20px\' }}>\\n    <div style={{ marginBottom: \'10px\' }}>\\n        <span>\\n            \u0394<sup>min</sup>\\n            <sub>right</sub> = \u03a3 V<sub>j</sub> - V<sup>min</sup>\\n            <sub>j</sub>\\n        </span>\\n        <span style={{ marginLeft: \'20px\' }}>j = i+1...n</span>\\n    </div>\\n    <div>\\n        <span>\\n            \u0394<sup>max</sup>\\n            <sub>right</sub> = \u03a3 V<sub>j</sub> - V<sup>min</sup>\\n            <sub>j</sub>\\n        </span>\\n        <span style={{ marginLeft: \'20px\' }}>j = i+1...n</span>\\n    </div>\\n</div>\\n\\nWe now have two minimum constraints which are V<sup>min</sup><sub>left</sub> and V<sup>max</sup><sub>right</sub> and two maximum\\nconstraints V<sup>max</sup><sub>left</sub> and V<sup>min</sup><sub>right</sub>.\\nTo get one minimum and maximum value for the \u0394 we should take the maximum of the two minimums and the minimum of the two maximums which will\\nensure all four constraints will hold true.\\n\\n<div style={{ margin: \'20px\' }}>\\n    <div style={{ marginBottom: \'10px\' }}>\\n        \u0394<sub>min</sub> = MAX ( V<sup>min</sup>\\n        <sub>left</sub> , V<sup>max</sup>\\n        <sub>right</sub> )\\n    </div>\\n    <div>\\n        \u0394<sub>max</sub> = MIN ( V<sup>max</sup>\\n        <sub>left</sub> , V<sup>min</sup>\\n        <sub>right</sub> )\\n    </div>\\n</div>\\n\\nFinally we must clamp our \u0394 to be within this minimum and maxium boundary.\\nThis clamped delta can be used in place of delta in the pseudocode from iteration #2.\\n\\n<div style={{ margin: \'20px\' }}>\\n    \u0394<sub>clamped</sub> = MIN ( V<sub>max</sub> , MAX ( V<sub>min</sub> , \u0394 ) )\\n</div>\\n\\nYou can see how this works in this interactive example which also shows the current values of our four constraints for each sash drag event.\\n\\n<Splitview mode={3} debug={true} />\\n\\nAdditionally you can see in the below diagram how all of our above calculations come together to give a minimum and maximum constraints on \u0394.\\n\\n![alt txt](./constraints.jpg)\\n\\n## Appendix\\n\\n### The clamp function\\n\\nTo clamp a value is to say given a value, a minimum and a maximum return\\n\\n-   the minimum, if value < minimum\\n-   the maximum if value > maximum\\n-   otherwise returning the value\\n\\nIn otherwords we have \'clamped\' the value to be within our defined minimum and maximum values. Mathematically we can write this as\\n\\n<div style={{ marginBottom: \'20px\' }} className=\\"markdown-line\\">\\n    <b>f</b>(value, value<sub>min</sub>, value<sub>max</sub>) = <b>MIN</b>(value\\n    <sub>max</sub>, <b>MAX</b>(value<sub>min</sub>, value))\\n</div>\\n\\nwith some examples\\n\\n<div style={{ marginLeft: \'20px\', marginBottom: \'20px\' }}>\\n    <div className=\\"markdown-small-line\\">\\n        <b>f</b>(10, 20, 30) = 20\\n    </div>\\n    <div className=\\"markdown-small-line\\">\\n        <b>f</b>(40, 20, 30) = 30\\n    </div>\\n    <div className=\\"markdown-small-line\\">\\n        <b>f</b>(25, 20, 30) = 25\\n    </div>\\n</div>"},{"id":"dockview-1.4.3-release","metadata":{"permalink":"/docs2/blog/dockview-1.4.3-release","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-05-22-dockview-1.4.3.mdx","source":"@site/blog/2022-05-22-dockview-1.4.3.mdx","title":"Dockview 1.4.3","description":"\ud83d\ude80 Features","date":"2022-05-22T00:00:00.000Z","formattedDate":"May 22, 2022","tags":[{"label":"release","permalink":"/docs2/blog/tags/release"}],"readingTime":0.265,"truncated":false,"authors":[],"frontMatter":{"slug":"dockview-1.4.3-release","title":"Dockview 1.4.3","tags":["release"]},"prevItem":{"title":"math/math","permalink":"/docs2/blog/math/math"},"nextItem":{"title":"Dockview 1.4.2","permalink":"/docs2/blog/dockview-1.4.2-release"}},"content":"## \ud83d\ude80 Features\\n\\n-   Small adjusted to behaviours of default paneview header componnet [#116](https://github.com/mathuo/dockview/pull/116)\\n-   Improved support for external dnd events in the dockview component. `showDndOverlay` prop on `DockviewReact` exposes more parameters to interact with [#110](https://github.com/mathuo/dockview/pull/110)\\n\\n## \ud83d\udd25 Breaking changes\\n\\n-   Fix typo by renaming `onDidLayoutfromJSON` to `onDidLayoutFromJSON` in dockview component api [#112](https://github.com/mathuo/dockview/pull/112/files)"},{"id":"dockview-1.4.2-release","metadata":{"permalink":"/docs2/blog/dockview-1.4.2-release","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-05-16-dockview-1.4.2.mdx","source":"@site/blog/2022-05-16-dockview-1.4.2.mdx","title":"Dockview 1.4.2","description":"\ud83d\ude80 Features","date":"2022-05-16T00:00:00.000Z","formattedDate":"May 16, 2022","tags":[{"label":"release","permalink":"/docs2/blog/tags/release"}],"readingTime":0.19,"truncated":false,"authors":[],"frontMatter":{"slug":"dockview-1.4.2-release","title":"Dockview 1.4.2","tags":["release"]},"prevItem":{"title":"Dockview 1.4.3","permalink":"/docs2/blog/dockview-1.4.3-release"},"nextItem":{"title":"Dockview 1.4.1","permalink":"/docs2/blog/dockview-1.4.1-release"}},"content":"## \ud83d\ude80 Features\\n\\n-   Fix deserialization issue where previously active panel wasn\'t display correctly after deserialization [#108](https://github.com/mathuo/dockview/pull/108)\\n\\n## \ud83d\udd25 Breaking changes\\n\\n-   Rename `onDidAddGroup` to `onDidAddPanel`, `onDidRemoveGroup` to `onDidRemovePanel` and `onDidActiveGroupChange` to `onDidActivePanelChange` on the Gridview API [#106](https://github.com/mathuo/dockview/pull/106)"},{"id":"dockview-1.4.1-release","metadata":{"permalink":"/docs2/blog/dockview-1.4.1-release","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-05-11-dockview-1.4.1.mdx","source":"@site/blog/2022-05-11-dockview-1.4.1.mdx","title":"Dockview 1.4.1","description":"\ud83d\ude80 Features","date":"2022-05-11T00:00:00.000Z","formattedDate":"May 11, 2022","tags":[{"label":"release","permalink":"/docs2/blog/tags/release"}],"readingTime":0.635,"truncated":false,"authors":[],"frontMatter":{"slug":"dockview-1.4.1-release","title":"Dockview 1.4.1","tags":["release"]},"prevItem":{"title":"Dockview 1.4.2","permalink":"/docs2/blog/dockview-1.4.2-release"}},"content":"## \ud83d\ude80 Features\\n\\n-   Fix Drag and Drop issues in Dockview on Firefox [#103](https://github.com/mathuo/dockview/pull/103)\\n\\n## \ud83d\udee0 Miscs\\n\\n-   Documentation enhancements https://mathuo.github.io/dockview/docs/\\n\\n## \ud83d\udd25 Breaking changes\\n\\nAll breaking changes here are designed to simplify the library with only one way to do something.\\n\\n-   Remove `setVisible` and `setActive` from the Splitview API. You can still achieve the same behaviors through calling `setVisible` and `setActive` on the Splitview Panel API. [#105](https://github.com/mathuo/dockview/pull/105)\\n-   Remove `setVisible`, `setActive` and `toggleVisiblity` from Gridview API. You can still achieve the same behaviors through calling `setVisible` and `setActive` on the Gridview Panel API [#105](https://github.com/mathuo/dockview/pull/105)\\n-   Remove `onFocusEvent` from Panel API as this was not intended to be a public method. You can use `onDidFocusChange` instead [#105](https://github.com/mathuo/dockview/pull/105)\\n-   Remove HOC `<DockviewComponents.Panel\\\\>`, `<DockviewComponents.Content>`, `<DockviewComponents.Tab>` and `<DockviewComponents.Actions>` [#105](https://github.com/mathuo/dockview/pull/105)"}]}')}}]);