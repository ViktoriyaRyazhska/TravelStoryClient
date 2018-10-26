export const menus = [
  {
    'name': 'Statistic',
    'icon': 'dashboard',
    'link': false,
    'open': false,
    'sub': [
      {
        'name': 'General',
        'link': '/auth/dashboard',
        'icon': 'dashboard',
        'chip': false,
        'open': true,
      }
    ]
  },
  {
    'name': 'User management',
    'icon': 'list',
    'link': false,
    'open': false,
    'sub': [
      {
        'name': 'All users',
        'icon': 'done_all',
        'link': 'table',
        'open': false,
      },
    ]

  },
  {
    'name': 'Pages',
    'icon': 'content_copy',
    'open': false,
    'link': false,
    'sub': [
      {
        'name': 'About us',
        'icon': 'local_laundry_service',
        'open': false,
        'link': 'pages/about',
      }, {
        'name': 'Contact',
        'icon': 'directions',
        'open': false,
        'link': 'pages/contact'
      }
    ]
  },
  {
    'name': 'Office location',
    'icon': 'map',
    'open': false,
    'link': false,
    'sub': [
      {
        'name': 'google-map',
        'icon': 'directions',
        'link': 'maps/googlemap',
        'open': false,
      }
    ]
  }
];
