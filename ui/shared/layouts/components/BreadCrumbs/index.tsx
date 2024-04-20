import React, { useCallback } from "react";
import "./styles.css";

export interface BreadCrumbsProps {
  breadcrumbs?: Array<{ value: string; label: string; icon?: any }>;
  showBackButton?: boolean;
  onClick: (path: string) => void;
}

export const BreadCrumbs: React.FunctionComponent<BreadCrumbsProps> = (
  props: BreadCrumbsProps
) => {
  const { breadcrumbs, showBackButton = true, onClick } = props;

  const handleBack = () => {
    const result =
      breadcrumbs.length <= 1
        ? breadcrumbs[breadcrumbs.length - 1].value
        : breadcrumbs[breadcrumbs.length - 2].value;

    onClick(result);
  };

  const handleLink = (value) => {
    onClick(`${value}`);
  };

  const renderBreadcrumbs = useCallback(() => {
    if (!breadcrumbs || breadcrumbs.length === 0) return <></>;
    return breadcrumbs.map((d, i) => {
      const { icon: Icon } = d;
      return (
        <React.Fragment key={i}>
          <div className="bread-crums-item">
            <span onClick={() => handleLink(d.value)}>
              {d.label}
              {Icon && <Icon />}
            </span>
          </div>
          {i < breadcrumbs.length - 1 && (
            <span className="bread-crumbs-divider"> &#8250; </span>
          )}
        </React.Fragment>
      );
    });
  }, [breadcrumbs]);

  return (
    <div className="bread-crumbs-container">
      {/*    {showBackButton && (
        <BackButton onClick={handleBack}>
          <img src={LeftArrowIcon} />
        </BackButton>
      )} */}
      <nav>{renderBreadcrumbs()}</nav>
    </div>
  );
};

export default BreadCrumbs;
