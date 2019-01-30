// packages
import { StyleSheet } from 'react-native';

// constants
import { BASE, GREEN, PURPLE, UI } from '../../atoms/style/colors.style';
import { typography } from '../../atoms/style/typography.style';

// utility functions
import { size, percentage } from '../../../utilities/style.utilities';

const { ada_text_h1, ada_text_light, ada_text_h5 } = typography;

const ads_splash = StyleSheet.create({
  heading: {
    ...ada_text_light,
    ...ada_text_h1,
    color: BASE.light,
    marginBottom: size(5),
    marginTop: size(150),
    textAlign: 'center'
  },
  div: {
    display: 'flex',
    alignItems: 'center'
  },
  subheading: {
    ...ada_text_light,
    ...ada_text_h5,
    color: BASE.light,
    marginTop: 0,
    textAlign: 'center',
    width: percentage(90)
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: percentage(100)
  }
});

export default ads_splash;
