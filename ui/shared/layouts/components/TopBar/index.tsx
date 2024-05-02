import React, { useMemo, useState } from 'react';
import './styles.css';

export interface TopBarProps {
  title: string;
  iconName?: string;
  onChange?: (name: string, value: any) => void;
  children?: React.ReactNode;
}

const TopBar = (props: TopBarProps) => {
  const { title, iconName, children } = props;

  return (
    <div className="top-bar-container ">
      <section>
        <h2>
          {iconName && (
            <span style={{ marginRight: 8 }}>
              {/* <Icon name={iconName} size={15} color="#333" /> */}
            </span>
          )}
          {title}
        </h2>
      </section>
      {children && (
        <div className="top-bar-content">{children && children}</div>
      )}
    </div>
  );
};

export default TopBar;
