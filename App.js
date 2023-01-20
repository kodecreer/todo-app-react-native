import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, SectionList, StyleSheet, Text, View } from 'react-native';
import Item from './Item';

class TodoItem {
  constructor(title,item_desc,is_done, id){
    this.title = title;
    this.section = section;
    this.item_desc = item_desc;
    this.is_done = is_done;
    this.id = id
  }
}

export default function App() {

  let [todo, setTodo] = useState([
    {title:'Clean the kitchen', item_desc:'Do not forget to put up the dishes', is_done:false, id:0},
    {title:'Clean the washroom', item_desc:'Do not forget to put up the clothes', is_done:false, id:1},
    {title:'Finish Physics Homework',  item_desc:'Fix errors', is_done:false, id:2},
    {title:'Prepare for test',  item_desc:'Prepare for CS Networks quiz', is_done:false, id:3},
    {title:'Study Scriptures', item_desc:'30 minutes at least and study the Old Testament focusing on the Savior. May this give me enough to carrry across the line of man.', is_done:false, id:4}])
  let [completed, setCompleted] = useState([])
  let [data, setData] = useState( [
    { title: 'ToDo',
      data: todo,
    },
    {title: "Completed",
     data: completed
  }] )
  let [selectedId, setSelectedId] = useState(0)


  function toggle_is_done(item){
    setSelectedId( item.id)
    console.log(item)
    // setTodo([...todo.filter(val => val.id != item.id)])
    // setData(data => {
    //   // Loop over your list
    //   return data.map((item) => {
    //       // Check for the item with the specified id and update it
    //       return item.id === idx ? {...item, done: !item.done} : item
    //   })
  // })

  }
  return (
    <View style={styles.container}>
      <SafeAreaView></SafeAreaView>
      <SectionList 
      sections={data} 
      renderItem={({item}) => <Item item={item} 
      toggle_switch={toggle_is_done} />} 
      keyExtractor={(item, index) => item.id + index} 
      extraData={selectedId} 
      renderSectionHeader={({section})=>
        section.data.length > 0 ?(<Text style={styles.header}>{section.title}</Text>) : (null)
      }
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  }
});
