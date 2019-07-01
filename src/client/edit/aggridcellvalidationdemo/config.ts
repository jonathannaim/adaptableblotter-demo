import { PredefinedConfig } from 'adaptableblotter/types';

export default {
  Dashboard: {
    VisibleButtons: ['CellValidation'],
  },
  CellValidation: {
    CellValidations: [
      {
        ActionMode: 'Stop Edit',
        ColumnId: 'CustomerReference',
        Range: {
          Operator: 'None',
          Operand1: '',
          Operand2: '',
          Operand1Type: 'Value',
          Operand2Type: 'Value',
        },
      },
      {
        ActionMode: 'Show Warning',
        ColumnId: 'Employee',
        Range: {
          Operator: 'None',
          Operand1: '',
          Operand2: '',
          Operand1Type: 'Value',
          Operand2Type: 'Value',
        },
      },
      {
        ActionMode: 'Stop Edit',
        ColumnId: 'InvoicedCost',
        Range: {
          Operator: 'GreaterThan',
          Operand1: 3000,
          Operand2: '',
          Operand1Type: 'Value',
          Operand2Type: 'Value',
        },
      },
      {
        ActionMode: 'Show Warning',
        ColumnId: 'OrderCost',
        Range: {
          Operator: 'PercentChange',
          Operand1: 100,
          Operand2: '',
          Operand1Type: 'Value',
          Operand2Type: 'Value',
        },
      },
    ],
  },
} as PredefinedConfig;
