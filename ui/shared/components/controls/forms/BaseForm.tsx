
import React, { useMemo } from 'react';
import './styles.css';
import LoadingOverflow from '@ui/shared/layouts/components/LoadingOverflow';

export interface BaseFormProps {
  onSubmit: (e: unknown) => unknown;
  children?: React.ReactNode;
  title: string;
  isLoading?: boolean;
  customStyle?: {
    maxWidth?: number | string;
  };
}

const BaseForm: React.FunctionComponent<BaseFormProps> = (props) => {
  const { onSubmit, title, children, isLoading = false, customStyle } = props;

  const renderLoading = useMemo(
    () => (
      <div className="base-loading-container">
        <div className="base-spinner"></div>
      </div>
    ),
    [],
  );

  return (
    <form
      className="base-form"
      onSubmit={onSubmit}
      style={{ ...(customStyle ?? {}) }}
    >
      {isLoading ? (
        <LoadingOverflow />
      ) : (
        <>
          <h2>{title}</h2>
          <main>{children}</main>
        </>
      )}
    </form>
  );
};

export default BaseForm;

