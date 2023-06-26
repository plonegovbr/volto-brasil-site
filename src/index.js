const applyConfig = (config) => {
  config.settings = {
    ...config.settings,
    isMultilingual: false,
    supportedLanguages: ['pt-br'],
    defaultLanguage: 'pt-br',
    apiExpanders: [
      ...config.settings.apiExpanders,
      {
        match: '',
        GET_CONTENT: [
          'breadcrumbs',
          'navigation',
          'actions',
          'authors',
          'types',
        ],
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
  // Grid Block
  config.blocks.blocksConfig.__grid.gridAllowedBlocks = [
    ...config.blocks.blocksConfig.__grid.gridAllowedBlocks,
    'video',
  ];
  // Twitter
  config.blocks.blocksConfig.tweetBlock = {
    ...config.blocks.blocksConfig.tweetBlock,
    defaultLanguage: 'pt',
  };
  return config;
};

export default applyConfig;
