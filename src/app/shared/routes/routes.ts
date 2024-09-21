

export class routes {

  private static Url = '';


  public static get baseUrl(): string {
    return this.Url;
  }
  public static get login(): string {
    return this.baseUrl + '/login';
  }
  public static get forgotPassword(): string {
    return this.baseUrl + '/forgot-password';
  }
  public static get register(): string {
    return this.baseUrl + '/register';
  }
  public static get appointment(): string {
    return this.baseUrl + '/appointment';
  }
  public static get opd(): string {
    return this.baseUrl + '/opd';
  }
  public static get pharmacy(): string {
    return this.baseUrl + '/pharmacy';
  }
  public static get frontOffice(): string {
    return this.baseUrl + '/front-office';
  }
  public static get activities(): string {
    return this.baseUrl + '/activities';
  }
  public static get generalSettings(): string {
    return this.baseUrl + '/settings/general-settings';
  }
  public static get profile(): string {
    return this.baseUrl + '/profile';
  }
}