export default {
  Shortcut: {
    Shortcuts: [
      {
        ColumnType: 'Number',
        IsDynamic: false,
        ShortcutKey: 'M',
        ShortcutOperation: 'Multiply',
        ShortcutResult: '1000',
      },
      {
        ColumnType: 'Date',
        IsDynamic: true,
        ShortcutKey: 'N',
        ShortcutOperation: 'Replace',
        ShortcutResult: 'Next Work Day',
      },
    ],
  },
  Dashboard: {
    VisibleButtons: ['Shortcut'],
  },
};
