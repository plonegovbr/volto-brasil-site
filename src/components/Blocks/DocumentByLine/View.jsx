import React from 'react';
import { useSelector } from 'react-redux';
import { FormattedDate } from '@plone/volto/components';

const View = () => {
  const content = useSelector((state) => state.content.data);
  const effective = content.effective;
  const modified = content.modified;
  return (
    <div className="documentByLine block">
      {effective && (
        <span className="documentPublished">
          <span>Publicado em</span>
          <span className="value">
            <FormattedDate date={effective} includeTime />
          </span>
        </span>
      )}
      {modified && (
        <span className="documentModified">
          <span>Atualizado em</span>
          <span className="value">
            <FormattedDate date={modified} long includeTime />
          </span>
        </span>
      )}
    </div>
  );
};

export default View;
