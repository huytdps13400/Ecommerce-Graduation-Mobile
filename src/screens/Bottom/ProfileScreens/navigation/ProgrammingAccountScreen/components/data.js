import {routes} from '@navigation/routes';

export const DATA = [
  {
    id: '1',
    label: 'Tài khoản',
    data: [
      {
        id: '1',
        title: 'Hồ sơ của tôi',
        navigation: routes.ORDERHISTORY,
      },
      {
        id: '2',
        title: 'Địa Chỉ',
        navigation: routes.ADDRESS_SCREEN,
      },
    ],
  },
  {
    id: '2',
    label: 'Hỗ trợ',
    data: [
      {
        id: '3',
        title: 'Điều Khoản Sử Dụng',
        navigation: null,
      },
      {
        id: '4',
        title: 'Giới Thiệu',
        navigation: null,
      },
    ],
  },
];