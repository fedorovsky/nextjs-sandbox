import dynamic from 'next/dynamic';

export const UserCardLinaria = dynamic(
  () => import('./user-card-linaria').then((module) => module.UserCardLinaria),
  {
    loading: () => <div>Loading UserCardLinaria component...</div>,
  },
);
