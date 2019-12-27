import React from 'react';
import PropTypes from 'prop-types';

import { ProjectCategory, ProjectCategoryCopy } from 'shared/constants/projects';
import toast from 'shared/utils/toast';
import useApi from 'shared/hooks/api';
import { Form } from 'shared/components';

import { FormCont, FormHeading, FormElement, ActionButton } from './Styles';

const propTypes = {
  project: PropTypes.object.isRequired,
  fetchProject: PropTypes.func.isRequired,
};

const ProjectSettings = ({ project, fetchProject }) => {
  const [{ isUpdating }, updateProject] = useApi.put('/project');

  const categoryOptions = Object.values(ProjectCategory).map(category => ({
    value: category,
    label: ProjectCategoryCopy[category],
  }));

  return (
    <Form
      initialValues={Form.initialValues(project, get => ({
        name: get('name'),
        url: get('url'),
        category: get('category'),
        description: get('description'),
      }))}
      validations={{
        name: [Form.is.required(), Form.is.maxLength(100)],
        url: Form.is.url(),
        category: Form.is.required(),
      }}
      onSubmit={async (values, form) => {
        try {
          await updateProject(values);
          await fetchProject();
          toast.success('Changes have been successfully saved.');
        } catch (error) {
          Form.handleAPIError(error, form);
        }
      }}
    >
      <FormCont>
        <FormElement>
          <FormHeading>Project Details</FormHeading>
          <Form.Field.Input name="name" label="Name" />
          <Form.Field.Input name="url" label="URL" />
          <Form.Field.TextEditor
            name="description"
            label="Description"
            tip="Describe the project in as much detail as you'd like."
          />
          <Form.Field.Select name="category" label="Project Category" options={categoryOptions} />
          <ActionButton type="submit" variant="primary" isWorking={isUpdating}>
            Save changes
          </ActionButton>
        </FormElement>
      </FormCont>
    </Form>
  );
};

ProjectSettings.propTypes = propTypes;

export default ProjectSettings;
