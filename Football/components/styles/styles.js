import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
    ...Platform.select({
        ios: {
            searchHeader: {
                paddingTop: 0,
                paddingBottom: 0,
                marginTop: 0,
                marginBottom: 0
            }
        }
    })
});