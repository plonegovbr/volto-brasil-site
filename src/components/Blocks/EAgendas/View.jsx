import React from 'react';
import { MaybeWrap } from '@plone/volto/components';
import { UniversalLink } from '@plone/volto/components';
import banner from './eAgendas.png';

const View = (props) => {
  const { isEditMode, data } = props;
  const { url } = data;
  return (
    <div className="eAgendas block">
      <MaybeWrap
        condition={!isEditMode}
        as={UniversalLink}
        href={url}
        target={'_blank'}
      >
        <div className="inner">
          <img src={banner} alt="Banner com imagem sobre o sistema e-Agendas" />
        </div>
      </MaybeWrap>
    </div>
  );
};

export default View;
