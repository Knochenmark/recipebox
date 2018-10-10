import * as React from 'react';

import {
  iconButtonIconStyle,
  iconButtonStyle,
  iconButtonTextStyle
} from './IconButtonStyles';
import { IconButtonColor } from './IconButttonColor';

interface IIconButtonProps {
  onClickCallback?: () => void;
  icon: any;
  buttonText: string;
  color: IconButtonColor;
  isSubmitButton?: boolean;
}

export class IconButton extends React.Component<IIconButtonProps, any> {
  constructor(props: IIconButtonProps) {
    super(props);
  }

  public render() {
    const buttonType = this.props.isSubmitButton ? 'submit' : 'button';
    const callback = this.props.onClickCallback || undefined;
    return (
      <button type={buttonType} className={iconButtonStyle} onClick={callback}>
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
