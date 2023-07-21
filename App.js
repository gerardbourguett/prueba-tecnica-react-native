import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";

export default function App() {
  const tableHead = ["Id", "Empleado", "Detalle"];
  const tableData = [
    ["1", "Juan Perez", botonDetalle()],
    ["2", "Pedro Lopez", botonDetalle()],
    ["3", "Luis Nazar", botonDetalle()],
    ["4", "Camilo Perez", botonDetalle()],
    ["5", "Miguel Gonzalez", botonDetalle()],
  ];

  function botonDetalle() {
    return (
      <TouchableOpacity style={styles.detalleBoton}>
        <Text style={styles.detalleTexto}>Hola</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
        <Row data={tableHead} style={styles.head} textStyle={styles.text} />
        <Rows data={tableData} textStyle={styles.text} />
      </Table>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 6 },
  detalleBoton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  detalleTexto: {
    color: "#123",
    fontWeight: "bold",
    fontSize: 17,
    textAlign: "center",
  },
});
