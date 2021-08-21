
import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window');
import { moderateScale } from 'react-native-size-matters';

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;


const normalize = (number, factor = 0.25) => {
    return moderateScale(number, factor);
}


export const FONTS = {
    bold: 'Montserrat-Bold',
    light: 'Montserrat-Light',
    medium: 'Montserrat-Medium',
    regular: 'Montserrat-Regular',
    semibold: 'Montserrat-SemiBold',
}

export const COLORS = {
    primary: '#5DB075',
    secondary: '#FFFFFF',
    black: 'black'
}



export const RESPONSIVE = {
    scale: (size) => width / guidelineBaseWidth * size,
    verticalScale: size => height / guidelineBaseHeight * size,
    moderateScale: (size, factor = 0.5) => size + (scale(size) - size) * factor
}


export const FONTSIZE = {
    h1: normalize(40),
    h2: normalize(34),
    h3: normalize(28),
    h4: normalize(22),
    h5: normalize(16),
    h6: normalize(10),
}

