import { ChangeDetectorRef, Inject, OnDestroy, Pipe, PipeTransform } from "@angular/core";
import {
  Currency,
  Locale,
  LOCALE_CONFIG,
  LocaleConfig,
  NumberFormatOptions,
  TranslocoLocalePipe,
  TranslocoLocaleService,
} from "@ngneat/transloco-locale";
import { isNil } from "@ngneat/transloco";

@Pipe({
  name: "ferpCurrency",
  standalone: true,
  pure: false,
})
export class CurrencyPipe extends TranslocoLocalePipe implements PipeTransform, OnDestroy {
  constructor(
    protected override translocoLocaleService: TranslocoLocaleService,
    protected override cdr: ChangeDetectorRef,
    @Inject(LOCALE_CONFIG) private localeConfig: LocaleConfig
  ) {
    super(translocoLocaleService, cdr);
  }

  /**
   * Transform a given number into the locale's currency format.
   *
   * @example
   *
   * 1000000 | translocoCurrency: 'symbol' : {} : USD // $1,000,000.00
   * 1000000 | translocoCurrency: 'name' : {} : USD // 1,000,000.00 US dollars
   * 1000000 | translocoCurrency: 'symbol' : {minimumFractionDigits: 0 } : USD // $1,000,000
   *
   */
  transform(
    value: number | string,
    currencyCode?: Currency,
    display: "code" | "symbol" | "name" = "symbol",
    numberFormatOptions: NumberFormatOptions = {},
    locale?: Locale
  ): string {
    if (isNil(value)) return "";
    const localeCode = this.getLocale(locale);

    const options = {
      ...numberFormatOptions,
      minimumFractionDigits: 0,
      currencyDisplay: display,
      currency: currencyCode || this.translocoLocaleService._resolveCurrencyCode(),
    };
    return this.translocoLocaleService.localizeNumber(value, "currency", localeCode, options);
  }

  ngOnDestroy(): void {
    super.onDestroy();
  }
}
