import * as React from 'react';

import {
  iconButtonIconStyle,
  iconButtonStyle,
  iconButtonTextStyle
} from './IconButtonStyles';
import { IconButtonColor } from './IconButttonColor';

interface IIconButtonProps {
  onClickCallback: () => void;
  icon: any;
  buttonText: string;
  color: IconButtonColor;
}

export class IconButton extends React.Component<IIconButtonProps, any> {
  constructor(props: IIconButtonProps) {
    super(props);
  }

  public render() {
    return (
      <button className={iconButtonStyle} onClick={this.props.onClickCallback}>
        <div className={iconButtonIconStyle + ` ${this.props.color}`}>
          <i>{this.props.icon}</i>
        </div>
        <div className={iconButtonTextStyle + ` ${this.props.color}`}>
          <span>{this.props.buttonText}</span>
        </div>
      </button>
    );
  }
}
