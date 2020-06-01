import styled from '@emotion/styled';

import Link from '../Link';

const SidebarMenuItem = styled(Link)`
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
  margin: 1rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.4rem;
  width: 100%;
  color: ${props =>
    props.isSelected === '1' || props.isActivePath === '1'
      ? props.theme.colors.sidebar.itemActive
      : props.theme.colors.sidebar.item};
  font-weight: ${props =>
    props.isSelected === '1' || props.isActivePath === '1'
      ? props.theme.fontWeights.heading
      : props.theme.fontWeights.body};
  padding-left: calc(2rem * ${props => props.deepLevel + 1});
  border-left: ${props =>
    props.isSelected === '1'
      ? `4px solid ${props.theme.colors.primary}`
      : '4px solid transparent'};
`;

export default SidebarMenuItem;
