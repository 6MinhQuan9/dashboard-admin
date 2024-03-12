'use client';
import { AppstoreOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import Link from 'next/link';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps['items'] = [
  getItem(<Link href={'/'}>Admin</Link>, 'sub2', <AppstoreOutlined />, [
    getItem(<Link href={'/dashboard'}>Dashboard</Link>, '5', []),
    getItem('Sample', '6'),
  ]),
];

const NavBar = () => {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['5']}
      defaultOpenKeys={['sub2']}
      mode="inline"
      items={items}
    />
  );
};

export default NavBar;