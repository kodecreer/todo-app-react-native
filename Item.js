import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, ClipboardStatic, Switch, Image} from 'react-native';

function toggle(e){

}
function Item(props) {
  let item = props.item.length > 0 ? props.item[0] : props.item
  let [isDone, setIsDone] =  useState(item.is_done)
  console.log(item)
  return (
    <View style={style.cell}>
        <Text selectable={true} style={style.title}>{item.title}</Text>
        <View style={style.cell_detail}>
          <Image style={style.img} source={require('./assets/favicon.png')}></Image>
        <Text selectable={true} style={style.description}>{item.item_desc}</Text>
        <Switch value={isDone} onChange={e => {
          setIsDone(!isDone);
          props.toggle_switch(item)
        }} 
        style={style.switch_style}
        />
        </View>

        <View style={style.border_line}></View>
        
    </View>
  )
}
let style = StyleSheet.create({
    cell : {

       width: "100%",
       padding: 15
    },
    title: {
        fontSize: 24
    },

    cell_detail : {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row', 
    },
    img : {
      width: 50,
      height: 50
    },
    description: {
        textAlign: 'center',
   
        width: 200
    },
    switch_style : {
 
    },
    border_line: {
      paddingBottom: 5,
      borderBottomColor: 'black',
      borderBottomWidth: StyleSheet.hairlineWidth,
    }

})


export default Item