import { RowID, RowElement } from './interface';

declare module 'crud' {
  export function insertRow(row: RowElement): RowID;
  export function updateRow(id: RowID, updatedRow: RowElement): boolean;
  export function deleteRow(id: RowID): boolean;
}