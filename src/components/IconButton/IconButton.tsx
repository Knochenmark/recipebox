import * as React from 'react';

import {
  iconButtonIconStyle,
  iconButtonStyle,
  iconButtonTextStyle
} from './IconButtonStyles';

interface IIconButtonProps {
  onClickCallback: () => void;
  icon: any;
  buttonText: string;
}

export class IconButton extends React.Component<IIconButtonProps, any> {
  constructor(props: IIconButtonProps) {
    super(props);
  }

  public render() {
    return (
      <button className={iconButtonStyle} onClick={this.props.onClickCallback}>
        <div className={iconButtonIconStyle}>
          <i>{this.props.icon}</i>
        </div>
        <div className={iconButtonTextStyle}>
          <span>{this.props.buttonText}</span>
        </div>
      </button>
    );
  }
}
