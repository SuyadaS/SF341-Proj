import React from 'react';
import { View, Text, Button, Image, StyleSheet} from 'react-native';

const Yes = () => {
  return (
    <View
      style={{
        
        backgroundColor: '#AED6F1',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white',textAlign: 'right'}}>RISK ASSESSMENT</Text>
      <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white',textAlign: 'right'}}>FOR COVID-19 INFECTION{"\n"}</Text>
      <Image source={require('../SF341-Proj/img/icon.png')} style={{width: 160,height:160}}></Image>
      <Text style={{fontSize: 20, fontWeight: 'bold',color: 'red'}}>
      {"\n"}ท่านอยู่ในกลุ่มเสี่ยง
      </Text>
      <View style={styles.buttonContainer}> 
            <Button style={styles.button}
            title="done" 
            color="#154360" />
        </View>
      
      
    </View>
  );
};
const styles = StyleSheet.create({
    buttonContainer:{
        marginTop:100,
        width:90,
        alignSelf:"center"
    }

})

export default Yes;