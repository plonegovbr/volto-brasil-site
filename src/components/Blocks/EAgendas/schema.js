import { defineMessages } from 'react-intl';

const messages = defineMessages({
  url: {
    id: 'URL do e-Agendas',
    defaultMessage: 'URL do e-Agendas',
  },
  title: {
    id: 'e-Agendas',
    defaultMessage: 'e-Agendas',
  },
});

export const blockSchema = ({ intl }) => {
  return {
    title: intl.formatMessage(messages.title),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['url'],
      },
    ],
    properties: {
      url: {
        title: intl.formatMessage(messages.url),
        widget: 'url',
      },
    },

    required: ['url'],
  };
};
