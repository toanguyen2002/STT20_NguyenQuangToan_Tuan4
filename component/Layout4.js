import { StatusBar } from 'expo-status-bar';
import { Dimensions } from 'react-native';
import { Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
const Layout4 = () => {
    return (
        <View style={styles.container}>
            <View style={{ padding: 10, backgroundColor: '#fff', flexDirection: 'row', width: Dimensions.get('window').width }}>
                <View>
                    <Image style={{ width: 105, height: 100, resizeMode: 'contain' }} source={{ uri: require('../assets/book.png') }} />
                    <Text style={{ marginTop: 27, fontSize: 12, fontWeight: '700' }}>Mã giảm giá đã lưu</Text>
                </View>
                <View style={{ marginLeft: 16 }}>
                    <Text style={{ fontWeight: "bold" }}>Nguyên hàm tích phân và ứng dụng</Text>
                    <Text style={{ marginVertical: 7, fontWeight: "bold" }}>Cung cấp bởi Tiki Trading</Text>
                    <Text style={{ color: 'red', fontWeight: "bold", marginVertical: 7 }}> 141.800 đ</Text>
                    <Text style={{ textDecorationLine: 'line-through', color: '#aaa', }}>141.000 đ</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 7 }}>
                        <View style={{
                            flexDirection: 'row',
                        }}>
                            <Text style={{ marginRight: 6 }}> -</Text>
                            <Text style={{ marginRight: 6 }}>1</Text>
                            <Text>+</Text>
                        </View>
                        <Text style={{ color: 'blue' }}>Mua Sau</Text>
                    </View>
                    <Text style={{ color: 'blue', fontSize: 12 }}>Xem Tại đây</Text>
                </View>
            </View >
            <View style={{ flexDirection: 'row', backgroundColor: '#fff', width: Dimensions.get('window').width, borderColor: 'white', marginTop: -1, padding: 15 }}>
                <View style={{ flexDirection: 'row', width: 208, height: 45, justifyContent: 'center', alignItems: 'center', borderColor: '#aaa', borderWidth: 1 }}>
                    <Text style={{ width: 32, height: 16, backgroundColor: 'yellow', marginRight: 10 }}></Text>
                    <Text >Mã Giảm Giá</Text>
                </View>
                <View style={{ marginLeft: 40, width: 99, height: 45, backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}> Áp Dụng</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', backgroundColor: '#fff', width: Dimensions.get('window').width, borderColor: 'white', marginTop: 20, padding: 22 }}>
                <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
                <Text style={{ fontSize: 12, color: 'blue', fontWeight: 'bold', marginLeft: 3 }}>Nhập tại đây?</Text>
            </View>

            <View style={{ flexDirection: 'row', backgroundColor: '#fff', width: Dimensions.get('window').width, borderColor: 'white', marginTop: 20, padding: 22, justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Tạm Tính</Text>
                <Text style={{ fontSize: 18, color: 'red', fontWeight: 'bold' }}>141.800 đ</Text>
            </View>

            <View style={{ bottom: 0, position: 'absolute', backgroundColor: '#fff', width: Dimensions.get('window').width, borderColor: 'white', marginTop: 20, padding: 29, }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Tạm Tính</Text>
                    <Text style={{ fontSize: 18, color: 'red', fontWeight: 'bold' }}>141.800 đ</Text>
                </View>
                <View style={{ marginTop: 10, width: 331, height: 45, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>TIẾN HÀNH ĐẶT HÀNG</Text>
                </View>
            </View>

        </View >
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

export default Layout4