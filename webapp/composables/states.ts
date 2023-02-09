export const useCmsUrl = () => useState('cmsUrl', () => 'https://cms.speak-leipzig.de');

export const useMenu = () => useState('menu', () => [
  { key: 'home', path: '/' },
  { key: 'offers', path: '/offers' },
  { key: 'facilities', path: '/facilities' },
  { key: 'team', path: '/team' }
]);

export const useLevel = () => useState('level', () =>
  [
    'none',
    'a0' ,
    'a1' ,
    'a2' ,
    'b1' ,
    'b2' ,
    'c1' ,
    'c2' ,
    'all'
  ]
);