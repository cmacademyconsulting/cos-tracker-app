// screens/HomeScreen.js
// Main entry screen for COS Approval Tracker
// Author: Team COS | Susil Bhandari, CCM

import React, { useState } from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import { getFireRisk } from "../services/firmsApi";
import { formatAuditReport } from "../utils/formatReport";
import FireRiskCard from "../components/FireRiskCard";

export default function HomeScreen() {
  const [report, setReport] = useState(null);

  const handleCheckRisk = async () => {
    // Example: Kathmandu coordinates
    const fireData = await getFireRisk(27.7, 85.3, 10);
    const auditReport = formatAuditReport(fireData, {
      name: "Kathmandu Infrastructure Project",
      donor: "World Bank",
    });
    setReport(auditReport);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>COS Approval Tracker</Text>
      <Text style={styles.subtitle}>
        Validate fire risk with NASA FIRMS data and generate audit‑ready reports
      </Text>

      <Button title="Check Fire Risk" onPress={handleCheckRisk} />

      {report && (
        <FireRiskCard
          project={report.project}
          compliance={report.compliance}
          governance={report.governance}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    marginBottom: 20,
    textAlign: "center",
  },
});
