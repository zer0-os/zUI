import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ButtonLink } from './ButtonLink';
import { ComponentProps } from './Link.types';

export interface BackLinkProps extends ComponentProps {
  onClick?: () => void;
}

/**
 * Navigates back using react-router-dom useNavigate.
 * Override back behaviour by passing onClick.
 */
export const BackLink = ({ onClick, ...rest }: BackLinkProps) => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return <ButtonLink onClick={onClick ?? goBack} {...rest} />;
};
