import { ButtonProps as MuiButtonProps } from '@mui/material';
import { FC } from 'react';
declare const MuiIcons: {
    X: import("@mui/material/OverridableComponent").OverridableComponent<import("@mui/material").SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    LinkedIn: import("@mui/material/OverridableComponent").OverridableComponent<import("@mui/material").SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    Facebook: import("@mui/material/OverridableComponent").OverridableComponent<import("@mui/material").SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    Instagram: import("@mui/material/OverridableComponent").OverridableComponent<import("@mui/material").SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    Twitter: import("@mui/material/OverridableComponent").OverridableComponent<import("@mui/material").SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    ExpandLess: import("@mui/material/OverridableComponent").OverridableComponent<import("@mui/material").SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    ExpandMore: import("@mui/material/OverridableComponent").OverridableComponent<import("@mui/material").SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
};
type IconName = keyof typeof MuiIcons;
export type ButtonProps = {
    target?: string;
    variant?: 'primary' | 'secondary' | 'outline' | 'menu' | 'menuItem' | 'topic';
    startIconName?: IconName;
    endIconName?: IconName;
} & Pick<MuiButtonProps, 'id' | 'onClick' | 'children' | 'disabled' | 'type' | 'component' | 'className' | 'href'>;
export declare const Button: FC<ButtonProps>;
export {};
