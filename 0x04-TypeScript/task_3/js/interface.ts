type RowID = number;

// Create an interface RowElement that contains these 3 fields:
interface RowElement {
  firstName: string;
  lastName: string;
  age?: number; // Optional property denoted by the '?'
}