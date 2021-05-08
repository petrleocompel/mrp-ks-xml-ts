/**
 * Typ řádku
 */
export enum ItemRowTypeEnum {
  /** Finanční = 1 */
  FINANCNI = 1,
  /** Textový řádek = 2 */
  TEXT = 2,
}
export enum TaxCodeEnum {
  /** Tuzemské uskut. pln. */
  TUZMEMSKE_USKUT_PLN = 41,
  /** Tuzemské přij.pln. */
  TUZMEMSKE_PRIJ_PLN = 71,
  /** Nedaňový doklad uskutečněný */
  NEDAN_DOKLAD_USKUT = 19,
  /** Nedaňový doklad přijatý */
  NEDAN_DOKLAD_PRIJ = 39,
}
export enum RowSumEnum {
  /** běžný */
  BEZNY = 1,
  /** odpočet záloh */
  ODPOCET_ZALOH = 2,
  /** pouze pro uskutečněná plnění */
  REVERSE_CHARGE = 3,
}
export enum CountryCode {}

export interface Company {
  /**
   * @name CompanyId
   * @type string (12)
   * @description IČO
   */
  CompanyId: string;
  /**
   * @name AddressId
   * @type string (50)
   * @description ID adresy - jednoznačný identifikátor adresy. Pro výměnu dat s externím systémem (např. eshop)
   * @deprecated -- Nejistá položka
   */
  AddressId?: any;
  /**
   * @name Name
   * @type string (50)
   * @description Firma
   */
  Name: string;
  /**
   * @name Name2
   * @type string (50)
   * @description Firma 2
   * @deprecated -- Nejistá položka
   */
  Name2?: string;
  /**
   * @name CustomerName
   * @type string (30)
   * @description Jméno
   * @deprecated -- Nejistá položka
   */
  CustomerName?: string;
  /**
   * @name Street
   * @type string (30)
   * @description Ulice
   */
  Street: string;
  /**
   * @name City
   * @type string (30)
   * @description Město
   */
  City: string;
  /**
   * @name CountryCode
   * @type string (2)
   * @description Kód státu dle číselníku států. Např. CZ - Česká republika, SK - Slovensko
   */
  CountryCode: string;
  /**
   * @name ShortNote
   * @type string (30)
   * @description Jiné
   * @deprecated -- Nejistá položka
   */
  ShortNote?: any;
  /**
   * @name ZipCode
   * @type string (15)
   * @description PSČ
   */
  ZipCode: string;
  /**
   * @name VatNumber
   * @type string (17)
   * @description CZ verze: DIČ dle CZ legislativy (VAT identification number), formát čísla např. CZ99999999, SK9999999999, DE999999999. Viz: http://ec.europa.eu/taxation_customs/vies/faq.html?locale=en#item_11. SK verze: DIČ dle SK legislativy, např. 1999999999, 2999999999
   */
  VatNumber: string;
  /**
   * @name VatNumberSK
   * @type string (14)
   * @description CZ verze: nepoužívá se. SK verze: IČ DPH (VAT identification number). Formát čísla např. CZ99999999, SK9999999999, DE999999999. Viz: http://ec.europa.eu/taxation_customs/vies/faq.html?locale=en#item_11
   * @deprecated -- Nejistá položka
   */
  VatNumberSK?: any;
  /**
   * @name NaturalPerson
   * @type boolean
   * @description Příznak typu firmy - "T" - fyzická osoba, "F" - právnická osoba
   */
  NaturalPerson: "T" | "F" | string;
  /**
   * @name Country
   * @type string (30)
   * @description Stát
   */
  Country: string;
  /**
   * @name Email
   * @type string (256)
   * @description Email
   */
  Email: string;
  /**
   * @name Note
   * @type string (1024)
   * @description Poznámka
   */
  Note: string;
  /**
   * @name Phone
   * @type string (30)
   * @description Telefon
   * @deprecated -- Nejistá položka
   */
  Phone?: any;
  /**
   * @name Phone2
   * @type string (30)
   * @description Telefon 2
   * @deprecated -- Nejistá položka
   */
  Phone2?: any;
  /**
   * @name Fax
   * @type string (30)
   * @description Fax
   * @deprecated -- Nejistá položka
   */
  Fax?: any;

  /**
   * @name UserField1
   * @type string (40)
   * @description Uživ.pole 1
   * @deprecated -- Nejistá položka
   **/
  UserField1?: any;
  /**
   * @name UserField2
   * @type string (40)
   * @description Uživ.pole 2
   * @deprecated -- Nejistá položka
   **/
  UserField2?: any;
  /**
   * @name UserField3
   * @type string (40)
   * @description Uživ.pole 3
   * @deprecated -- Nejistá položka
   **/
  UserField3?: any;
  /**
   * @name UserField4
   * @type string (40)
   * @description Uživ.pole 4
   * @deprecated -- Nejistá položka
   **/
  UserField4?: any;
  /**
   * @name UserField5
   * @type string (40)
   * @description Uživ.pole 5
   * @deprecated -- Nejistá položka
   **/
  UserField5?: any;
}

export interface Item {
  /**
   * @name Description
   * @type string (100)
   * @description Text
   */
  Description: string;
  /**
   * @name RowType
   * @type integer
   * @description Typ řádku:1-Finanční,2-Textový řádek
   */
  RowType: ItemRowTypeEnum;
  /**
   * @name TaxCode
   * @type integer
   * @description Typ DPH, odpovídá číselníku Typy DPH. Např. 41 - Tuzemské uskut. pln., 71 - Tuzemské přij.pln., 19 - Nedaňový doklad uskutečněný, 39 - Nedaňový doklad přijatý
   */
  TaxCode: TaxCodeEnum | number | string;
  /**
   * @name Quantity
   * @type decimal (15,6)
   * @description Počet MJ
   */
  Quantity: number | string;
  /**
   * @name UnitPrice
   * @type decimal (15,6)
   * @description Cena MJ v měně dokladu bez DPH. Platí (CenaMJ-SlevaMJ)*PocetMJ=Celkem za řádek dokladu bez DPH
   */
  UnitPrice: string | number;
  /**
   * @name TaxPercent
   * @type decimal (15,2)
   * @description Procentuální výše sazby DPH (0 = Osvobozeno, 99 = MimoDPH)
   */
  TaxPercent: string | number;
  /**
   * @name TaxAmount
   * @type decimal (15,6)
   * @description Částka DPH za MJ v měně dokladu
   */
  TaxAmount: string | number;
  /**
   * @name DiscountPercent
   * @type decimal (15,2)
   * @description Procentuální výše slevy za položku dokladu. Pomocný údaj, při výpočtu celkové částky dokladu se k němu nepřihlíží. Podstatné je pole SLEVAMJ
   */
  DiscountPercent: number | string;
  /**
   * @name UnitDiscount
   * @type decimal (15,6)
   * @description Sleva MJ v měně dokladu bez DPH. Platí vztah CenaMJ-SlevaMJ=Cena za MJ po slevě bez DPH
   */
  UnitDiscount: string | number;
  /**
   * @name StockCardNumber
   * @type decimal (15,2)
   * @description Číslo skladové karty, odpovídá uživatelskému seznamu skladových karet. Pro import nepovinné.
   */
  StockCardNumber?: string;
  /**
   * @name CostCentre
   * @type string (6)
   * @description Nákladové středisko. V případě vyplnění musí odpovídat uživatelskému číselníku Střediska. Výchozí hodnota "0"
   * @default "0"
   */
  CostCentre: string;
  /**
   * @name ContractNumber
   * @type string (15)
   * @description Zakázka. V případě vyplnění, musí odpovídat uživatelskému číselníku Zakázky. Výchozí hodnota "0"
   * @default "0"
   */
  ContractNumber: string;
  /**
   * @name RowSumType
   * @type integer
   * @description Typ sumace řádku: 1-běžný, 2-odpočet záloh, 3-ReverseCharge(pouze pro uskutečněná plnění)
   */
  RowSumType: RowSumEnum;
  /**
   * @name TotalWeight
   * @type decimal (15,6)
   * @description Hmotnost za MJ
   */
  TotalWeight: number | string;
  /**
   * @name UnitCode
   * @type string (3)
   * @description Měrná jednotka - např. "ks", "kg", "t", "m2" apod.
   */
  UnitCode: "ks" | "kg" | "t" | "m2" | string;
  /**
   * @name ItemType
   * @type string (2)
   * @description Typ položky, odpovídá uživatelskému číselníku Typy položek. Nepovinné.
   */
  ItemType?: string;
  /**
   * @name SubscriptionStartPeriod
   * @type date
   * @description Datum od - rozsah období (nájem, předplatné za období apod.). Pro rozúčtování nákladů/výnosů příštích období.
   * @deprecated -- Nejistá položka
   */
  SubscriptionStartPeriod?: any;
  /**
   * @name SubscriptionEndPeriod
   * @type date
   * @description Datum od - rozsah období (nájem, předplatné za období apod.). Pro rozúčtování nákladů/výnosů příštích období.
   * @deprecated -- Nejistá položka
   */
  SubscriptionEndPeriod?: any;
}

export interface Items {
  Item: Item[];
}

export interface SumValue {
  TaxCode: string;
  TaxType: string;
  TaxPercent: string;
  CurrencyCode: string;
  Amount: string;
  Tax: string;
  TaxCurrRateAmount: string;
  TaxCurrRateTax: string;
  ReverseChargeAmount: string;
  ReverseChargeTax: string;
  TaxCurrRateReverseChargeAmount: string;
  TaxCurrRateReverseChargeTax: string;
  TaxApplied: string;
}

export interface SumValues {
  SumValue: SumValue[];
}

export interface Payment {
  PaymentType: string;
  PaymentDate: string;
  DocumentNumber: string;
  Amount: string;
  AmountCurr: string;
  AmountPaidDocumentCurr: string;
  CurrencyCode: string;
  CurrRate: string;
  CurrRateAmount: string;
}

export interface Payments {
  Payment: Payment;
}

export interface Invoice {
  /**
   * @name DocumentNumber
   * @type string (10)
   * @description Číslo dokladu, jednoznačný identifikátor, nejsou povoleny duplicity.
   **/
  DocumentNumber: string;
  /**
   * @name IssueDate
   * @type date
   * @description Dat.vystavení
   **/
  IssueDate: string;
  /**
   * @name CurrencyCode
   * @type string (3)
   * @description Měna dokladu. Odpovídá číselníku měn. Např. "CZK", "EUR", "USD" apod.
   **/
  CurrencyCode: "CZK" | "EUR" | "USD" | string;
  /**
   * @name ValuesWithTax
   * @type boolean
   * @description Způsob zadávání částek (CENAMJ) v položkách dokladu. "T" - částky zadávány v cenách s DPH, "F" - částky zadávány v cenách BEZ DPH
   **/
  ValuesWithTax: "T" | "F" | string;
  /**
   * @name TaxCode
   * @type integer
   * @description Typ DPH, odpovídá číselníku Typy DPH. Např. 41 - Tuzemské uskut. pln., 71 - Tuzemské přij.pln., 19 - Nedaňový doklad uskutečněný, 39 - Nedaňový doklad přijatý
   **/
  TaxCode: TaxCodeEnum | string | number;
  /**
   * @name ZeroTaxRateAmount
   * @type decimal (15,2)
   * @description Částka Osvobozeno - hodnota plnění osvobozených od DPH (v lokální měně)
   **/
  ZeroTaxRateAmount: string;
  /**
   * @name ReducedTaxRateAmount
   * @type decimal (15,2)
   * @description Částka základu dph pro sníženou sazbu (v lokální měně)
   **/
  ReducedTaxRateAmount: string;
  /**
   * @name BaseTaxRateAmount
   * @type decimal (15,2)
   * @description Částka zakladu dph pro základní sazbu (v lokální měně)
   **/
  BaseTaxRateAmount: string;
  /**
   * @name RoundingAmount
   * @type decimal (15,2)
   * @description Částka MIMODPH - hodnota nedaněná (v lokální měně)
   **/
  RoundingAmount: string;
  /**
   * @name ReducedTaxRateTax
   * @type decimal (15,2)
   * @description Částka DPH - snížená sazba (v lokální měně)
   **/
  ReducedTaxRateTax: string;
  /**
   * @name BaseTaxRateTax
   * @type decimal (15,2)
   * @description Částka DPH - základní sazba (v lokální měně)
   **/
  BaseTaxRateTax: string;
  /**
   * @name TotalWithTaxCurr
   * @type decimal (15,2)
   * @description Celková částka v zahr.měně
   **/
  TotalWithTaxCurr: string;
  /**
   * @name TaxPointDate
   * @type date
   * @description Daň.povinnost
   **/
  TaxPointDate: string;
  /**
   * @name DeliveryDate
   * @type date
   * @description Datum dodání /Datum pro Kontrolní hlášení
   * @deprecated -- Nejistá položka
   **/
  DeliveryDate?: any;
  /**
   * @name DoubleEntryBookkeepingCode
   * @type decimal (15,3)
   * @description Číslo účetní předkontace, nepovinné. Odkazuje do číselníku "Účetní předkontace". Pro účetnictví (podvojné).
   **/
  DoubleEntryBookkeepingCode: string;
  /**
   * @name SingleEntryBookkeepingCode
   * @type integer
   * @description Kód pohybu zaúčtování pro Daňovou evidenci (Syntet.)
   **/
  SingleEntryBookkeepingCode: string;
  /**
   * @name SingleEntryBookkeepingSubCode
   * @type integer
   * @description Kód pohybu zaúčtování pro Daňovou evidenci (analyt.)
   **/
  SingleEntryBookkeepingSubCode: string;
  /**
   * @name OriginalDocumentNumber
   * @type string (50)
   * @description Původní číslo dokladu/Evidenční číslo daň.dokladu (číslo v evidenci vystavitele dokladu).
   **/
  OriginalDocumentNumber?: any;
  /**
   * @name ControlStatement_Leasing
   * @type boolean
   * @description Příznak leasingu nad limit 10.000,- pro Kontrolní hlášení v CZ verzi programu
   **/
  ControlStatement_Leasing?: string;
  /**
   * @name TotalWeight
   * @type decimal (15,6)
   * @description Hmotnost zboží za doklad celkem
   **/
  TotalWeight: string;
  /**
   * @name CostCentre
   * @type string (6)
   * @description Nákladové středisko. V případě vyplnění musí odpovídat uživatelskému číselníku Střediska. Výchozí hodnota "0"
   **/
  CostCentre: string;
  /**
   * @name ContractNumber
   * @type string (15)
   * @description Zakázka. V případě vyplnění, musí odpovídat uživatelskému číselníku Zakázky. Výchozí hodnota "0"
   **/
  ContractNumber: string;
  /**
   * @name VatRegime
   * @type integer
   * @description Režim DPH:0-Běžný tuzemský,1-Registrace v EU,2-MOSS
   **/
  VatRegime: string;
  /**
   * @name VatCountry
   * @type string (2)
   * @description Stát DPH - kód členské země EU. Pro režim DPH=0(běžný tuzemský) vždy "CZ" pro českou verzi nebo "SK" pro slovenskou verzi programu
   **/
  VatCountry: string;
  /**
   * @name VatNumber
   * @type string (17)
   * @description VAT reg.č.(DIČ) pro Režimy DPH 1 (EU) a 2(MOSS). Registrační číslo přidělené k placení DPH v jiném členském státě EU. Pokud je uvedeno, musí odpovídat číselníku "Registrace platců v zemích EU".
   * @deprecated -- Nejistá položka
   **/
  VatNumber?: any;
  /**
   * @name EURExchangeRate
   * @type decimal (15,6)
   * @description Kurz Měna dokladu/EUR. Pro vystavené doklady v režimu MOSS v CZ verzi programu
   **/
  EURExchangeRate: string;
  /**
   * @name EURExchangeRateAmount
   * @type decimal (15,6)
   * @description Kurz Měna dokladu/EUR - počet jednotek. Pro vystavené doklady v režimu MOSS v CZ verzi programu
   **/
  EURExchangeRateAmount: string;
  /**
   * @name Note
   * @type string (1024)
   * @description Poznámka
   * @deprecated -- Nejistá položka
   **/
  Note?: any;
  /**
   * @name CalcParams
   * @type string (200)
   * @description Parametry výpočtu dokladu - počet.des.míst, způsob zaokrouhlení, atd...
   * Rozšířený popis elementu CalcParams:
   * Parametry výpočtu dokladu jsou řetězec složený z dílčích parametrů ve tvaru [Zkratka_Dílčího_Parametru]=[Hodnota_Dílčího_Parametru] oddělených středníkem.
   * Žádný z dílčích parametrů není povinný a na jejich pořadí uvnitř celého řetězce nezáleží.
   * Příklad řetězce : UPDP=2;VATRU=0.10;VATRM=0;TRU=1.00;TRM=0;VATCA=1;VATCUPA=0;TRD=1;TRDCA=1;VATFRB=0
   * Jednotlivé dílčí parametry jsou tyto:
   * UPDP - UnitPriceDecimalPlaces ... Počet desetinných míst Ceny za měrnou jednotku (rozsah 1..4, pro SK verzi 1..6)
   * VATRU -  VATRoundingUnit ... Zaokrouhlování DPH - jednotky (např. 1.00, 0.10, 0.01). Pouze pro CZ verzi.
   * VATRM - VATRoundingMethod ... Zaokrouhlování DPH - způsob (0 - přirozeně, 1 - dolů, 2 - nahoru, 3 - bankéřské zaokrouhlení). Pouze pro CZ verzi.
   * TRU - TotalRoundingUnit ... Zaokrouhlování celkové částky dokladu - jednotky (např. 1.00, 0.10, 0.01)
   * TRM - TotalRoundingMethod ... Zaokrouhlování celkové částky - způsob (0 - přirozeně, 1 - dolů, 2 - nahoru, 3 - bankéřské zaokrouhlení)
   * VATCA - VATCoefficientApplication - Pro výpočet celkové DPH použít Koeficient DPH (0 - nepoužít, 1 - použít). Pouze pro CZ verzi.
   * VATCUPA - VATCoefficientUnitPriceApplication - Pro výpočet jednotkové DPH použít Koeficient DPH (0 - nepoužít, 1 - použít). Pouze pro CZ verzi.
   * TRD - TotalRoundingDissolving - Rozpuštění celkového zaokrouhlení (0 - rozpustit do částky MIMODPH, 1 - rozpustit do ZAKLAD+DPH)
   * TRDCA - TotalRoundingDissolvingCoefficientApplication -  Pro rozpuštění zaokrouhlení použít Koeficient DPH (0 - podle způsobu výpočtu dokladu, 1 - vždy použít koeficient). Pouze pro CZ verzi a TRD=1.
   * VATFRB - VATFromRoundedBase -   Celkovou DPH počítat ze zaokrouhleného základu (0 - z nezaokrouhleného, 1 - ze zaokrouhleného). Pouze SK verze.
   **/
  CalcParams: string;
  /**
   * @name VariableSymbol
   * @type string (10)
   * @description Variabilní symbol
   **/
  VariableSymbol: string;
  /**
   * @name ConstantSymbol
   * @type string (8)
   * @description Konst.symbol
   **/
  ConstantSymbol: string;
  /**
   * @name SpecificSymbol
   * @type string (10)
   * @description Specif.symb.
   * @deprecated -- Nejistá položka
   **/
  SpecificSymbol?: any;
  /**
   * @name PaymentDueDate
   * @type date
   * @description Dat.splatnosti
   **/
  PaymentDueDate: string;
  /**
   * @name CurrRateAmount
   * @type decimal (15,6)
   * @description Kurz - počet jednotek. U dokladů v lokální(domácí) měně = 1.0000
   **/
  CurrRateAmount: string;
  /**
   * @name CurrRate
   * @type decimal (15,6)
   * @description Kurz. U dokladů v lokální(domácí) měně = 1.0000
   **/
  CurrRate: string;
  /**
   * @name PaidAmount
   * @type decimal (15,2)
   * @description Celkem zaplaceno. Pomocná počítaná položka. Suma úhrad v lokální měně
   **/
  PaidAmount: string;
  /**
   * @name PaidAmountCurr
   * @type decimal (15,2)
   * @description Celkem zaplaceno v měně dokladu. Pomocná počítaná položka. Suma úhrad v měně, ve které je doklad vystaven
   **/
  PaidAmountCurr: string;
  /**
   * @name CreditNoteOriginalNumber
   * @type string (50)
   * @description Původní číslo opravovaného dokladu - číslo dobropisované/vrubopisované faktury . Důležité v SK verzi pro DPH Kontrolný výkaz
   * @deprecated -- Nejistá položka
   **/
  CreditNoteOriginalNumber?: any;
  /**
   * @name InvoiceType
   * @type string (1)
   * @description Druh faktury: "F"-běžná, "X"-předfaktura, "P"-penalizační
   **/
  InvoiceType: "F" | "X" | "P" | string;
  /**
   * @name PaymentMeansCode
   * @type string (10)
   * @description Forma úhrady
   **/
  PaymentMeansCode: string;
  /**
   * @name Discount
   * @type decimal (15,2)
   * @description Procentuální výše slevy za celý doklad.
   **/
  Discount: string;
  Company: Company;
  Items: Items;
  SumValues?: SumValues;
  Payments?: Payments;
  /**
   * @name DeliveryNoteID
   * @type string (10)
   * @description Č.dod.listu
   **/
  DeliveryNoteID?: string;
  /**
   * @name DeliveryTypeCode
   * @type string (10)
   * @description Způsob dopravy
   **/
  DeliveryTypeCode?: string;
  /**
   * @name OrderNumber
   * @type string (20)
   * @description Číslo objednávky
   **/
  OrderNumber?: string;
  /**
   * @name OrderDate
   * @type date
   * @description Dat.objednávky
   **/
  OrderDate?: string;
  /**
   * @name DocType
   * @type string (2)
   * @description Typ dokladu, odpovídá číselníku Typy dokladů. Např. " "- běžný daňový doklad, "D"-dobropis, "V"-vrubopis,..
   **/
  DocType: string;
  /**
   * @name RecapitulativeStatementCode
   * @type string (1)
   * @description Kód plnění pro Souhrnné hlášení k DPH. "" (neuvedeno) - tuzemské plnění/bez rozlišení, "0"-Dodání zboží do jiného čl.státu, "1"-Přemístění obch. majetku, "2" - Dodání zboží třístranný obchod, "3" - Poskytnutí služby
   **/
  RecapitulativeStatementCode?: string;

  /**
   * @name ProformaInvoiceID
   * @type string (10)
   * @description Číslo předfaktury
   **/
  ProformaInvoiceID?: string;

  /**
   * @name PaymentInvoiceID
   * @type string (10)
   * @description Příznak zaplacení předfaktury. Číslo daň.dokladu, který vznikl z této předfaktury funkcí "..označit předfakturu za zaplacenou". Z externích systémů neplňte.
   **/
  PaymentInvoiceID?: string;

  /**
   * @name OriginalOrderNumber
   * @type string (50)
   * @description Původní číslo objednávky (číslo objednávky odběratele - vystavitele objednávky)
   * @deprecated -- Nejistá položka
   **/
  OriginalOrderNumber?: any;

  /**
   * @name UserField1
   * @type string (40)
   * @description Uživ.pole 1
   * @deprecated -- Nejistá položka
   **/
  UserField1?: any;
  /**
   * @name UserField2
   * @type string (40)
   * @description Uživ.pole 2
   * @deprecated -- Nejistá položka
   **/
  UserField2?: any;
  /**
   * @name UserField3
   * @type string (40)
   * @description Uživ.pole 3
   * @deprecated -- Nejistá položka
   **/
  UserField3?: any;
  /**
   * @name UserField4
   * @type string (40)
   * @description Uživ.pole 4
   * @deprecated -- Nejistá položka
   **/
  UserField4?: any;
  /**
   * @name UserField5
   * @type string (40)
   * @description Uživ.pole 5
   * @deprecated -- Nejistá položka
   **/
  UserField5?: any;
}

export interface IssuedInvoices {
  Invoice: Invoice[];
}

export interface MRPKSData {
  IssuedInvoices: IssuedInvoices;
  _version: string;
  _countryCode: string;
  _currencyCode: string;
}

export interface RootObject {
  MRPKSData: MRPKSData;
}
