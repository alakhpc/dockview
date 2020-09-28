import { IPanel, PanelInitParameters } from '../../panel/types';
import { IView, ISplitViewOptions, LayoutPriority } from './splitview';
import { Constructor, FrameworkFactory } from '../../types';
import { PanelView } from '../panelView';

export interface PanelViewInitParameters extends PanelInitParameters {
    minimumSize?: number;
    maximumSize?: number;
    snapSize?: number;
    priority?: LayoutPriority;
}

export interface ISerializableView extends IView, IPanel {
    init: (params: PanelViewInitParameters) => void;
}

export interface SplitPanelOptions extends ISplitViewOptions {
    components?: {
        [componentName: string]: PanelView;
    };
    frameworkComponents?: {
        [componentName: string]: any;
    };
    frameworkWrapper?: FrameworkFactory<PanelView>;
}

export interface ISerializableViewConstructor
    extends Constructor<ISerializableView> {}

export function createComponent<T>(
    id: string,
    componentName: string | Constructor<T> | any,
    components: {
        [componentName: string]: T;
    },
    frameworkComponents: {
        [componentName: string]: any;
    },
    createFrameworkComponent: (
        id: string,
        componentId: string,
        component: any
    ) => T
): T {
    const Component =
        typeof componentName === 'string'
            ? components[componentName]
            : componentName;
    const FrameworkComponent =
        typeof componentName === 'string'
            ? frameworkComponents[componentName]
            : componentName;
    if (Component && FrameworkComponent) {
        throw new Error(
            `cannot register component ${componentName} as both a component and frameworkComponent`
        );
    }
    if (FrameworkComponent) {
        if (!createFrameworkComponent) {
            throw new Error(
                'you must register a frameworkPanelWrapper to use framework components'
            );
        }
        const wrappedComponent = createFrameworkComponent(
            id,
            componentName,
            FrameworkComponent
        );
        return wrappedComponent;
    }
    return new Component() as T;
}