import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, Drawer, List, WhiteSpace } from '@ant-design/react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default class DrawerExample extends React.Component {
  constructor() {
    super(...arguments);
    this.onOpenChange = isOpen => {
      /* tslint:disable: no-console */
      console.log('是否打开了 Drawer', isOpen.toString());
    };
  }
  render() {
    const itemArr = Array.apply(null, Array(20))
      .map(function(_, i) {
        return i;
      })
      .map((_i, index) => {
        if (index === 0) {
          return (
            <List.Item
              key={index}
              thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
              multipleLine
            >
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Text>Categories - {index}</Text>
                <Button
                  type="primary"
                  size="small"
                  onPress={() => this.drawer.closeDrawer()}
                >
                  close drawer
                </Button>
              </View>
            </List.Item>
          );
        }
        return (
          <List.Item
            key={index}
            thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
          >
            <Text>Categories - {index}</Text>
          </List.Item>
        );
      });
    // Todo: https://github.com/DefinitelyTyped/DefinitelyTyped
    const sidebar = (
      <ScrollView style={[styles.container]}>
        <List>{itemArr}</List>
      </ScrollView>
    );

    //const direction

    return (
      <>
      <View style={{ flex: 1, marginTop: 30, padding: 8 }}>

      <Button onPress={() => {
      this.drawer1 && this.drawer1.openDrawer();
      this.drawer2 && this.drawer2.closeDrawer();
      }}>
      Open drawer
      </Button>

      <Button onPress={() => {
      this.drawer1 && this.drawer1.closeDrawer();
      this.drawer2 && this.drawer2.openDrawer();
      }}>
      Open drawer
      </Button>



      <Drawer
        sidebar={sidebar}
        position="left"
        open={false}
        drawerRef={el => (this.drawer1 = el)}
        onOpenChange={this.onOpenChange}
        drawerBackgroundColor="#ccc"
      >
      </Drawer>

      <Drawer
        sidebar={sidebar}
        position="right"
        open={false}
        drawerRef={el => (this.drawer2 = el)}
        onOpenChange={this.onOpenChange}
        drawerBackgroundColor="#ccc"
        >
      </Drawer>
          


          <WhiteSpace />

        </View>  
      </>
    );
  }
}