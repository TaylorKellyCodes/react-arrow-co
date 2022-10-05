import React from 'react';
import classNames from 'classnames';

const FooterSocial = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-social',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          
        </li>
        <li>
          
        </li>
        <li>
          
        </li>
      </ul>
    </div>
  );
}

export default FooterSocial;