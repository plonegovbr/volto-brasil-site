// Blocks
import EAgendasBlockEdit from './components/Blocks/EAgendas/Edit';
import EAgendasBlockView from './components/Blocks/EAgendas/View';

// Icones
import calendarSVG from '@plone/volto/icons/calendar.svg';

// Reducers
import site from './reducers/site/site';

const applyConfig = (config) => {
  // Reducers
  config.addonReducers = {
    ...config.addonReducers,
    site,
  };
  config.settings = {
    ...config.settings,
    isMultilingual: false,
    supportedLanguages: ['pt-br'],
    defaultLanguage: 'pt-br',
    socialNetworks: [],
    apiExpanders: [
      ...config.settings.apiExpanders,
      {
        match: '',
        GET_CONTENT: ['breadcrumbs', 'navigation', 'actions', 'types'],
        querystring: {
          'expand.navigation.depth': 2,
        },
      },
    ],
    image_crop_aspect_ratios: [
      {
        label: '16:9',
        ratio: 16 / 9,
      },
      {
        label: '4:3',
        ratio: 4 / 3,
      },
      {
        label: '1:1',
        ratio: 1,
      },
    ],
  };
  // Novos Blocos
  config.blocks.groupBlocksOrder = [
    ...config.blocks.groupBlocksOrder,
    { id: 'PortalBrasil', title: 'PortalBrasil' },
  ];
  const localBlocks = {
    eAgendas: {
      id: 'eAgendas',
      title: 'e-Agendas',
      group: 'PortalBrasil',
      icon: calendarSVG,
      view: EAgendasBlockView,
      edit: EAgendasBlockEdit,
      restricted: false,
      mostUsed: false,
      sidebarTab: true,
      blockHasOwnFocusManagement: false,
    },
  };
  config.blocks.blocksConfig = {
    ...config.blocks.blocksConfig,
    ...localBlocks,
  };

  // Grid Block
  // Remove old Grid Block
  config.blocks.blocksConfig.__grid.restricted = true;
  config.blocks.blocksConfig.gridBlock.allowedBlocks = [
    ...config.blocks.blocksConfig.gridBlock.allowedBlocks,
    'eAgendas',
    'video',
  ];
  config.blocks.blocksConfig.gridBlock.blocksConfig = {
    ...config.blocks.blocksConfig.gridBlock.blocksConfig,
    ...localBlocks,
  };
  // Twitter
  config.blocks.blocksConfig.tweetBlock = {
    ...config.blocks.blocksConfig.tweetBlock,
    defaultLanguage: 'pt',
  };

  return config;
};

export default applyConfig;
