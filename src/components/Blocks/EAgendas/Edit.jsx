import React from 'react';
import { blockSchema } from './schema';
import BlockDataForm from '@plone/volto/components/manage/Form/BlockDataForm';
import { Icon, SidebarPortal } from '@plone/volto/components';
import iconSVG from '@plone/volto/icons/calendar.svg';
import View from './View';

const Edit = (props) => {
  const { selected, block, data, onChangeBlock, intl } = props;
  const schema = blockSchema({ intl });
  return (
    <>
      <View {...props} isEditMode />
      <SidebarPortal selected={selected}>
        <BlockDataForm
          icon={<Icon size="24px" name={iconSVG} />}
          schema={schema}
          title={schema.title}
          onChangeField={(id, value) => {
            onChangeBlock(block, {
              ...data,
              [id]: value,
            });
          }}
          onChangeBlock={onChangeBlock}
          formData={data}
          block={block}
        />
      </SidebarPortal>
    </>
  );
};

export default Edit;
