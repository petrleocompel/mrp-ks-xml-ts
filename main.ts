import {
  MRPKSData,
  Invoice,
  Item,
  ItemRowTypeEnum,
  TaxCodeEnum,
  RowSumEnum,
  RootObject,
} from "./types.ts";
import { stringify } from "https://deno.land/x/xml/mod.ts";

function getNewInvoice() {
  const today = new Date();
  const taxDate = new Date();
  taxDate.setDate(taxDate.getDate() + 14);
  return {
    DocumentNumber: `${today.getFullYear()}0001`,
    IssueDate: `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`,
    TaxCode: TaxCodeEnum.TUZMEMSKE_USKUT_PLN,
    CurrencyCode: "CZK",

    ValuesWithTax: "F",

    ZeroTaxRateAmount: "0.00",
    ReducedTaxRateAmount: "0.00",
    BaseTaxRateAmount: "10000.00",

    RoundingAmount: "0.00",
    ReducedTaxRateTax: "0.00",
    BaseTaxRateTax: "2100.00",
    TotalWithTaxCurr: "0.00",
    TaxPointDate: `${taxDate.getFullYear()}-${taxDate.getMonth()}-${taxDate.getDate()}`,
    DoubleEntryBookkeepingCode: "0.000",
    SingleEntryBookkeepingCode: "0",
    SingleEntryBookkeepingSubCode: "0",
    ControlStatement_Leasing: "F",
    TotalWeight: "0.000000",
    CostCentre: "03",
    ContractNumber: "0",
    VatRegime: "0",
    VatCountry: "CZ",
    EURExchangeRate: "1.000000",
    EURExchangeRateAmount: "1.000000",
    CalcParams:
      "UPDP=2;VATRU=0.10;VATRM=0;TRU=1.00;TRM=0;VATCA=1;VATCUPA=1;TRD=0;TRDCA=0;VATFRB=0",
    VariableSymbol: "2018023",
    ConstantSymbol: "0308",
    PaymentDueDate: "2019-01-11",
    CurrRateAmount: "1.000000",
    CurrRate: "1.000000",
    PaidAmount: "12100.00",
    PaidAmountCurr: "12100.00",
    InvoiceType: "F",
    PaymentMeansCode: "převodem",
    Discount: "0.00",
    DocType: " ",
  };
}
//: Partial<Item>
function getNewItem() {
  return {
    RowType: ItemRowTypeEnum.FINANCNI,
    TaxCode: TaxCodeEnum.TUZMEMSKE_USKUT_PLN,
    DiscountPercent: 0,
    RowSumType: RowSumEnum.BEZNY,
    UnitDiscount: 0,
    UnitCode: "ks",
    ContractNumber: "0",
    CostCentre: "0",
    TaxPercent: "0.00",
    TaxAmount: "0.000000",
    TotalWeight: "0.000000",
  };
}

function wrap(arr: Invoice[]): RootObject {
  return {
    MRPKSData: {
      IssuedInvoices: { Invoice: arr },
      _version: "2.0",
      _countryCode: "CZ",
      _currencyCode: "CZK",
    },
  };
}

console.log(
  stringify(
    wrap([
      {
        ...getNewInvoice(),
        Company: {} as any,

        Items: {
          Item: [
            {
              ...getNewItem(),
              Description: "UVB-2000 Gear 7",
              Quantity: 2,
              TaxPercent: 21,
              UnitPrice: 2000,
            },
          ],
        },
      },
    ])
  )
);
