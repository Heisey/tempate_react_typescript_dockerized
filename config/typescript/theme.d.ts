import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    
    name: string,
    
    colors: {
      // ~~ Base Color
      baseColorLight: string
      baseColorLightRGB: string

      baseColor: string
      baseColorRGB: string

      baseColorDark: string
      baseColorDarkRGB: string

      // ~~ Prime Colors
      white: string
      whiteRGB: string

      black: string
      blackRGB: string

      // ~~ Primary Colors
      primaryColorLight: string
      primaryColorLightRGB: string

      primaryColor: string
      primaryColorRGB: string

      primaryColorDark: string
      primaryColorDarkRGB: string

      // ~~ Secondary Colors
      secondaryColorLight: string
      secondaryColorLightRGB: string

      secondaryColor: string
      secondaryColorRGB: string

      secondaryColorDark: string
      secondaryColorDarkRGB: string

      // ~~ Tertiary Colors
      tertiaryColorLight: string
      tertiaryColorLightRGB: string

      tertiaryColor: string
      tertiaryColorRGB: string

      tertiaryColorDark: string
      tertiaryColorDarkRGB: string

      // ~~ Quaternary Colors
      quaternaryColorLight: string
      quaternaryColorLightRGB: string

      quaternaryColor: string
      quaternaryColorRGB: string

      quaternaryColorDark: string
      quaternaryColorDarkRGB: string

      // ~~ Quinary Colors
      quinaryColorLight: string
      quinaryColorLightRGB: string

      quinaryColor: string
      quinaryColorRGB: string

      quinaryColorDark: string
      quinaryColorDarkRGB: string

      // ~~ Senary Colors
      senaryColorLight: string
      senaryColorLightRGB: string

      senaryColor: string
      senaryColorRGB: string

      senaryColorDark: string
      senaryColorDarkRGB: string

      // ~~ Success Colors
      successColorLight: string
      successColorLightRGB: string

      successColor: string
      successColorRGB: string

      successColorDark: string
      successColorDarkRGB: string

      // ~~ Info Colors
      infoColorLight: string
      infoColorLightRGB: string

      infoColor: string
      infoColorRGB: string

      infoColorDark: string
      infoColorDarkRGB: string

      // ~~ Error Colors
      errorColorLight: string
      errorColorLightRGB: string

      errorColor: string
      errorColorRGB: string

      errorColorDark: string
      errorColorDarkRGB: string

      // ~~ Warning Colors
      warningColorLight: string
      warningColorLightRGB: string

      warningColor: string
      warningColorRGb: string

      warningColorDark: string
      warningColorDarkRGB: string
    }
  }
}