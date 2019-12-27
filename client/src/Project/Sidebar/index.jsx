import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, useRouteMatch } from 'react-router-dom';

import { ProjectCategoryCopy } from 'shared/constants/projects';
import { Icon, ProjectAvatar } from 'shared/components';

import {
  Sidebar,
  ProjectInfo,
  ProjectTexts,
  ProjectName,
  ProjectCategory,
  Divider,
  LinkItem,
  LinkText,
  NotImplemented,
} from './Styles';

const propTypes = {
  project: PropTypes.object.isRequired,
};

const ProjectSidebar = ({ project }) => {
  const match = useRouteMatch();

  const renderLinkItem = (text, iconType, path) => {
    const linkItemProps = path
      ? { as: NavLink, exact: true, to: `${match.path}${path}` }
      : { as: 'div' };

    return (
      <LinkItem {...linkItemProps}>
        <Icon type={iconType} />
        <LinkText>{text}</LinkText>
        {!path && <NotImplemented>Not implemented</NotImplemented>}
      </LinkItem>
    );
  };

  return (
    <Sidebar>
      <ProjectInfo>
        <ProjectAvatar />
        <ProjectTexts>
          <ProjectName>{project.name}</ProjectName>
          <ProjectCategory>{ProjectCategoryCopy[project.category]} project</ProjectCategory>
        </ProjectTexts>
      </ProjectInfo>

      {renderLinkItem('Kanban Board', 'board', '/board')}
      {renderLinkItem('Project settings', 'settings', '/settings')}
      <Divider />
      {renderLinkItem('Releases', 'shipping')}
      {renderLinkItem('Issues and filters', 'issues')}
      {renderLinkItem('Pages', 'page')}
      {renderLinkItem('Reports', 'reports')}
      {renderLinkItem('Components', 'component')}
    </Sidebar>
  );
};

ProjectSidebar.propTypes = propTypes;

export default ProjectSidebar;
