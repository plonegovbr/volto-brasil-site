/**
 * Logo component.
 * @module components/theme/Logo/Logo
 */
import { useEffect } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { Image } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import config from '@plone/volto/registry';
import { flattenToAppURL } from '@plone/volto/helpers';
import { UniversalLink } from '@plone/volto/components';
import { toBackendLang } from '@plone/volto/helpers';
import { getSite } from '../../actions/site/site';
import LogoImage from './Logo.svg';

const messages = defineMessages({
  site: {
    id: 'Site',
    defaultMessage: 'Site',
  },
  plonesite: {
    id: 'Plone Site',
    defaultMessage: 'Plone Site',
  },
});

/**
 * Logo component class.
 * @function Logo
 * @param {Object} intl Intl object
 * @returns {string} Markup of the component.
 */
const Logo = () => {
  const { settings } = config;
  const lang = useSelector((state) => state.intl.locale);
  const site = useSelector((state) => state.site.data);
  const intl = useIntl();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSite());
  }, [dispatch]);

  return (
    <UniversalLink
      href={settings.isMultilingual ? `/${toBackendLang(lang)}` : '/'}
      title={intl.formatMessage(messages.site)}
    >
      <Image
        src={
          site['plone.site_logo']
            ? flattenToAppURL('/++api++' + site['plone.site_logo'])
            : LogoImage
        }
        alt={intl.formatMessage(messages.plonesite)}
        title={intl.formatMessage(messages.plonesite)}
      />
    </UniversalLink>
  );
};

export default Logo;
