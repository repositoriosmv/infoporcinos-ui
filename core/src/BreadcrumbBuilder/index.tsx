import { Breadcrumbs, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import clsx from 'clsx';

import useStyles from './styles';

export interface BreadcrumbProps {
  link: string;
  title: string;
}

export interface BreadcrumbBuilderProps {
  breadcrumbs: BreadcrumbProps[];
}

const BreadcrumbBuilder = ({ breadcrumbs }: BreadcrumbBuilderProps) => {
  const classes = useStyles();

  return (
    <Breadcrumbs separator="|" maxItems={3}>
      {breadcrumbs.reverse().map((breadcrumb, index: number) => (
        <Link
          key={index}
          component={RouterLink}
          to={breadcrumb.link}
          className={clsx({
            [classes.current]: index === 0,
          })}
          color={index === 0 ? 'textPrimary' : 'inherit'}
        >
          {breadcrumb.title}
        </Link>
      ))}
      <Link color="inherit" component={RouterLink} to="/app/dashboard">
        InfoPorcinos
      </Link>
    </Breadcrumbs>
  );
};

export default BreadcrumbBuilder;
