import React from 'react';
import {Modal, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const PopupModal = ({modalVisible}) => {
  //const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>
            Do you want to delete this person?
          </Text>
          <View style={styles.popupBtn}>
            <TouchableOpacity style={[styles.button, styles.buttonClose]}>
              <Text style={styles.textStyle}>Confirm</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buttonClose]}>
              <Text style={styles.textStyle}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default PopupModal;

const styles = StyleSheet.create({});
