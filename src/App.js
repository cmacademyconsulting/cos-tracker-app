import { getFireRisk } from "./services/firmsApi";
import { formatAuditReport } from "./utils/formatReport";

async function demoReport() {
  const fireData = await getFireRisk(27.7, 85.3, 10); // Example: Kathmandu
  const report = formatAuditReport(fireData, {
    name: "Kathmandu Infrastructure Project",
    donor: "World Bank",
  });

  console.log("Audit-Ready Report:", report);
}

demoReport();
