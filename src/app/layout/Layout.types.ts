interface LayoutNavigationInnerType {
  navigationMobile: React.ReactNode;
  navigationTop?: React.ReactNode;
  navigationBottom?: React.ReactNode;
  hrColor1?: string; // #B0B3B7
  hrColor2?: string; // #B0B3B7
}

export interface LayoutNavigation {
  notLoggedIn: LayoutNavigationInnerType;
}
