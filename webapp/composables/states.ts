export const useLevel = () => useState('level', () =>
  [
    { key:null ,text: 'Keine Angabe'},
    { key:'a0' ,text: 'A0'},
    { key:'a1' ,text: 'A1'},
    { key:'a2' ,text: 'A2'},
    { key:'b1' ,text: 'B1'},
    { key:'b2' ,text: 'B2'},
    { key:'c1' ,text: 'C1'},
    { key:'c2' ,text: 'C2'},
    { key:'all' ,text: 'Alle'}
  ]
);