import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, Drawer, List, WhiteSpace } from '@ant-design/react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default class DrawerExample extends React.Component {

  state = { placement: 'left' };

  constructor() {
    super(...arguments);
    this.onOpenChange = isOpen => {
      /* tslint:disable: no-console */
      console.log('是否打开了 Drawer', isOpen.toString());
    };
  }
  render() {

    const { placement } = this.state;

    const itemArrLMB = Array.apply(null, Array(20))
      .map(function (_, i) {
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
    const sidebarLNB = (
      <ScrollView style={[styles.container]}>
        <List>{itemArrLMB}</List>
      </ScrollView>
    );

      const itemArrRMB = Array.apply(null, Array(20))
      .map(function (_, i) {
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
                <Text>우측 - {index}</Text>
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
            <Text>우측 - {index}</Text>
          </List.Item>
        );
      });

    // Todo: https://github.com/DefinitelyTyped/DefinitelyTyped
    const sidebarRNB = (
      <ScrollView style={[styles.container]}>
        <List>{itemArrRMB}</List>
      </ScrollView>
    );

    //const direction

    return (
      <>
        <View style={{ flex: 1, marginTop: 30, padding: 8 }}>

          <Button onPress={() => {
            this.setState({ placement: 'left' });
            this.drawer && this.drawer.openDrawer();
          }}>
            Open drawer
          </Button>

          <Button onPress={() => {
            this.setState({ placement: 'right' });
            this.drawer && this.drawer.openDrawer();
          }}>
            Open drawer
          </Button>

          <Drawer
            sidebar={placement==='left'?sidebarLNB:sidebarRNB}
            position={placement}
            open={false}
            drawerRef={el => (this.drawer = el)}
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