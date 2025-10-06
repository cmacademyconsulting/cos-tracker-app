// utils/formatReport.js
// Converts FIRMS fire risk data into an audit-ready JSON report

export function formatAuditReport(fireData, projectMeta) {
  return {
    project: {
      name: projectMeta.name,
      donor: projectMeta.donor,
      location: fireData.projectLocation,
    },
    compliance: {
      fireRisk: fireData.riskLevel,
      detections: fireData.fireDetections,
      validatedAt: fireData.timestamp,
    },
    governance: {
      methodology: "COS (Compliance Operating System)",
      author: "Susil Bhandari, CCM",
      auditReady: true,
    },
  };
}
