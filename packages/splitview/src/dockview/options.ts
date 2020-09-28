import { IGridView } from '../gridview/gridview';
import { IGroupview } from '../groupview/groupview';
import {
    PanelContentPart,
    PanelContentPartConstructor,
    PanelHeaderPart,
    PanelHeaderPartConstructor,
    WatermarkConstructor,
    IGroupPanel,
} from '../groupview/panel/parts';
import { Orientation } from '../splitview/core/splitview';
import { FrameworkFactory } from '../types';
import { Api } from './componentDockview';

export interface GroupPanelFrameworkComponentFactory {
    content: FrameworkFactory<PanelContentPart>;
    tab: FrameworkFactory<PanelHeaderPart>;
}

export interface TabContextMenuEvent {
    event: MouseEvent;
    api: Api;
    panel: IGroupPanel;
}

export interface DockviewOptions {
    tabComponents?: {
        [componentName: string]: PanelHeaderPartConstructor;
    };
    components?: {
        [componentName: string]: PanelContentPartConstructor;
    };
    frameworkTabComponents?: {
        [componentName: string]: any;
    };
    frameworkComponents?: {
        [componentName: string]: any;
    };
    watermarkComponent?: WatermarkConstructor;
    watermarkFrameworkComponent?: any;
    frameworkComponentFactory: GroupPanelFrameworkComponentFactory;
    tabHeight?: number;
    debug?: boolean;
    enableExternalDragEvents?: boolean;
    orientation?: Orientation;
}

export interface PanelOptions {
    componentName: string;
    tabComponentName?: string;
    params?: { [key: string]: any };
    id: string;
    title?: string;
    suppressClosable?: boolean;
}

export interface AddPanelOptions
    extends Omit<PanelOptions, 'componentName' | 'tabComponentName'> {
    componentName: string | PanelContentPartConstructor;
    tabComponentName?: string | PanelHeaderPartConstructor;
    position?: {
        direction?: 'left' | 'right' | 'above' | 'below' | 'within';
        referencePanel: string;
    };
}

export interface AddGroupOptions {
    direction?: 'left' | 'right' | 'above' | 'below';
    referencePanel: string;
}

export interface MovementOptions2 {
    group?: IGridView;
}

export interface MovementOptions extends MovementOptions2 {
    includePanel?: boolean;
    group?: IGroupview;
}