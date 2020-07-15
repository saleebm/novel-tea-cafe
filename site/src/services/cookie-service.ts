import Cookies, {
  Cookie,
  CookieGetOptions,
  CookieSetOptions,
} from 'universal-cookie'

export class CookieService {
  private cookieStorage: Cookie

  constructor() {
    this.cookieStorage = new Cookies()
  }

  public getItem(name: string, options?: CookieGetOptions): string {
    return this.cookieStorage.get(name, options)
  }

  public setItem(
    name: string,
    value: string | any,
    options?: CookieSetOptions,
  ): void {
    this.cookieStorage.set(name, value, options)
  }

  public removeItem(name: string, options?: CookieSetOptions) {
    this.cookieStorage.remove(name, options)
  }

  getAll() {
    return this.cookieStorage.getAll()
  }
}

export const cookieService = new CookieService()
