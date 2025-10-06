// components/FireRiskCard.js
// Displays fire risk and compliance summary
// Author: Team COS | Susil Bhandari, CCM

import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function FireRiskCard({ project, compliance, governance }) {
  return (
    <View style={styles.card}>
      <Text style={styles.header}>📑 Audit‑Ready Report</Text>

      <Text style={styles.label}>Project:</Text>
      <Text style={styles.value}>{project.name}</Text>

      <Text style={styles.label}>Donor:</Text>
      <Text style={styles.value}>{project.donor}</Text>

      <Text style={styles.label}>Location:</Text>
      <Text style={styles.value}>
        Lat: {project.location.lat}, Lon: {project.location.lon}
      </Text>

      <Text style={styles.label}>Fire Risk:</Text>
      <Text
        style={[
          styles.value,
          compliance.riskLevel === "HIGH"
            ? styles.high
            : compliance.riskLevel === "MEDIUM"
            ? styles.medium
            : styles.low,
        ]}
      >
        {compliance.fireRisk}
      </Text>

      <Text style={styles.label}>Detections:</Text>
      <Text style={styles.value}>{compliance.detections}</Text>

      <Text style={styles.label}>Validated At:</Text>
      <Text style={styles.value}>{compliance.validatedAt}</Text>

      <Text style={styles.footer}>
        Methodology: {governance.methodology} | Author: {governance.author}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    padding: 15,
    borderRadius: 8,
    backgroundColor: "#fff",
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  label: {
    fontWeight: "600",
    marginTop: 5,
  },
  value: {
    marginBottom: 5,
  },
  high: {
    color: "red",
    fontWeight: "bold",
  },
  medium: {
    color: "orange",
    fontWeight: "bold",
  },
  low: {
    color: "green",
    fontWeight: "bold",
  },
  footer: {
    marginTop: 10,
    fontSize: 12,
    color: "#555",
  },
});
