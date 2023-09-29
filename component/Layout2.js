import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
const Layout2 = () => {
    return (
        <ScrollView style={{}}>
            <View style={{ flexDirection: 'row', padding: 20, marginBottom: 70 }}>
                <Image style={{ width: 70, height: 70, resizeMode: 'contain', marginRight: 5 }} source={{ uri: require('../assets/usb.png') }} />
                <Text style={{ fontWeight: 'bold', fontSize: 14 }}>USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa bluetooth</Text>
            </View>
            <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}>Cực kỳ hài lòng</Text>
            <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'center' }}>
                <Image style={{ width: 30, height: 30 }} source={{ uri: require('../assets/star.png') }} />
                <Image style={{ width: 30, height: 30 }} source={{ uri: require('../assets/star.png') }} />
                <Image style={{ width: 30, height: 30 }} source={{ uri: require('../assets/star.png') }} />
                <Image style={{ width: 30, height: 30 }} source={{ uri: require('../assets/star.png') }} />
                <Image style={{ width: 30, height: 30 }} source={{ uri: require('../assets/star.png') }} />
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: 300, height: 50, borderColor: 'blue', borderWidth: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                    <Image style={{ width: 40, height: 40 }} source={{ uri: require('../assets/camera.png') }} />
                    <Text style={{
                        fontWeight: 'bold',
                    }}>Thêm hình ảnh</Text>
                </View>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                <View style={{ padding: 20, width: 300, height: 250, borderColor: '#aaa', borderWidth: 1, flexDirection: 'row', position: 'relative' }}>
                    <Text style={{
                        fontWeight: '100',
                    }}>Hãy chi sẻ những điều mà bạn thích về sản phẩm</Text>
                    <Text style={{
                        position: 'absolute',
                        bottom: 0,
                        right: 0
                    }}>https://meet.google.com/nsj-ojwi-xpp</Text>
                </View>
            </View>
            <View style={{ alignItems: 'center', marginTop: 30, padding: 10, }}>
                <Text style={{ width: 222, height: 31, backgroundColor: 'blue', color: '#fff', fontWeight: 'bold', textAlign: 'center', alignContent: 'center' }}>Gửi</Text>
            </View>
        </ScrollView >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#aaa',
        alignItems: 'center',
        position: 'relative'
        // justifyContent: 'center',
    },
});

export default Layout2