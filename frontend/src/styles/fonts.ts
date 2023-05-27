import { createGlobalStyle } from "styled-components";
import InterBold from "assets/fonts/Inter-Bold.woff";
import InterLight from "assets/fonts/Inter-LightBETA.woff";
import InterSemiBold from "assets/fonts/Inter-SemiBold.woff";
import InterRegular from "assets/fonts/Inter-Regular.woff";
import InterMedium from "assets/fonts/Inter-Medium.woff";

export const Fonts = createGlobalStyle`
    @font-face {
        font-family: 'Inter';
        src: url(${InterBold}) format('woff');
        font-weight: bold;
        font-style: normal;
        font-variant-settings: "liga" 0;
        font-variant-alternates: normal;
    }
    
    @font-face {
        font-family: 'Inter';
        src: url(${InterLight}) format('woff');
        font-weight: 300;
        font-style: normal;
        font-variant-settings: "liga" 0;
        font-variant-alternates: normal;
    }
    
    @font-face {
        font-family: 'Inter';
        src: url(${InterSemiBold}) format('woff');
        font-weight: 600;
        font-style: normal;
        font-variant-settings: "liga" 0;
        font-variant-alternates: normal;
    }
    
    @font-face {
        font-family: 'Inter';
        src: url(${InterRegular}) format('woff');
        font-weight: normal;
        font-style: normal;
        font-variant-settings: "liga" 0;
        font-variant-alternates: normal;
    }
    
    @font-face {
        font-family: 'Inter';
        src: url(${InterMedium}) format('woff');
        font-weight: 500;
        font-style: normal;
        font-variant-settings: "liga" 0;
        font-variant-alternates: normal;
    }
`;
