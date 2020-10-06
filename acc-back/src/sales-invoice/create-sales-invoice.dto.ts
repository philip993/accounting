import { Customer } from 'src/customer/customer.entity';

export class CreateSalesInvoiceDto {
  salesInvoiceId: number;
  salesInvoiceCustomerFK: number;
  salesInvoiceNumber: string;
  salesInvoiceDate: string;
  salesInvoiceDue: string;
  salesInvoiceTotal: string;
  customer: Customer;
}
